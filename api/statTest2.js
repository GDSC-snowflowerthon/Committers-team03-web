import {Buffer} from 'buffer';
import fetch from 'node-fetch';

import puppeteer from 'puppeteer';

export default async (req, res) => {
  try {
    const data = {
      nickname: req.query.nickname || 'Dummy Name',
      snowmanHeight: req.query.snowmanHeight || 223,
      damage: req.query.damage || 456,
    };

    // 파일 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(Math.floor(data.snowmanHeight / 30), 10);
    const pngUrl = `${baseUrl}/${fileNumber}.png`;

    // PNG 이미지 가져오기
    const imageResponse = await fetch(pngUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageDataUri = `data:image/png;base64,${base64Image}`;

    // SVG 텍스트 컨텐츠 생성
    const svgContent = `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>
          .header { font: 700 30px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 600 16px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="30" y="60" class="header">${data.nickname}</text>
        <text x="30" y="135" class="stat">Height: ${data.snowmanHeight} M</text>
        <text x="30" y="170" class="stat">Attacked: ${data.damage} times</text>
      </svg>`;

    // HTML 문자열 조합
    const htmlContent = `
      <div style="position: relative; width: 400px; height: 200px;">
        <img src="${imageDataUri}" alt="Snowman Image" style="width: 100%; height: auto;" />
        <div style="position: absolute; top: 0; left: 0;">
          ${svgContent}
        </div>
      </div>`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const htmlToImageBuffer = await page.screenshot({format: 'png'});
    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(htmlToImageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error serving the content');
  }
};
