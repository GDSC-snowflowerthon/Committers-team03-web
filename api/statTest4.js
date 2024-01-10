import fetch from 'node-fetch';
import sharp from 'sharp';
import {Buffer} from 'buffer';

export default async (req, res) => {
  try {
    const data = {
      nickname: req.query.nickname || 'Dummy Name',
      snowmanHeight: req.query.snowmanHeight || 223,
      damage: req.query.damage || 456,
    };

    // 이미지 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(Math.floor(data.snowmanHeight / 30), 10);
    const imageUrl = `${baseUrl}/${fileNumber}.png`;

    // 이미지 가져오기
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageDataUri = `data:image/png;base64,${base64Image}`;
    // SVG 컨텐츠 생성
    const svgContent = `
      <svg width="400" height="200">
        <style>
          .header { font: 700 30px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 600 16px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="30" y="60" class="header">${data.nickname}</text>
        <text x="30" y="135" class="stat">Height: ${data.snowmanHeight} M</text>
        <text x="30" y="170" class="stat">Attacked: ${data.damage} times</text>
      </svg>`;

    // SVG를 PNG로 변환
    const svgBuffer = Buffer.from(svgContent);
    const overlayImage = await sharp(svgBuffer).toFormat('png').toBuffer();

    // PNG 이미지 위에 SVG 이미지 합성
    const finalImage = await sharp(Buffer.from(imageDataUri))
      .overlayWith(overlayImage, {top: 0, left: 0})
      .toBuffer();

    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(finalImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error serving the content');
  }
};
export {};
