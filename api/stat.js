import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const {
      nickname = 'Dummy Name',
      snowmanHeight = 310,
      attacking = 456,
    } = req.query;

    // 파일 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(
      Math.max(Math.floor((snowmanHeight - 130) / 30), 0),
      10,
    );

    // 조건에 따른 스타일 결정
    let headerColor, statColor;
    if (fileNumber < 4) {
      headerColor = '#3181F4';
      statColor = '#4F5861';
    } else if (fileNumber < 7) {
      headerColor = '#e6fcff';
      statColor = '#e6fcff';
    } else {
      headerColor = '#e6fcff';
      statColor = '#bbecff';
    }

    const urls = [
      `${baseUrl}/Card${fileNumber}.svg`,
      //`${baseUrl}/Object${fileNumber}.svg`,
      `${baseUrl}/Snowman000.svg`,
      fileNumber >= 4 ? `${baseUrl}/Star.svg` : `${baseUrl}/Snow.svg`,
    ];

    // 모든 SVG 파일을 동시에 가져옵니다.
    const svgResponses = await Promise.all(urls.map((url) => fetch(url)));
    svgResponses.forEach((response) => {
      if (!response.ok)
        throw new Error(`Failed to fetch SVG: ${response.statusText}`);
    });
    const svgs = await Promise.all(
      svgResponses.map((response) => response.text()),
    );

    // 모든 SVG를 조합합니다.
    const combinedSvg = `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgs.join('')}
        <style>
          .header { font: 900 30px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${headerColor}; }
          .stat { font: 600 16px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${statColor}; }
        </style>
        <text x="30" y="60" class="header">${nickname}</text>
        <text x="30" y="135" class="stat">Height: ${snowmanHeight} M</text>
        <text x="30" y="170" class="stat">Attacked: ${attacking} times</text>
      </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(combinedSvg);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating combined SVG');
  }
};
export {};
