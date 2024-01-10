import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const {
      nickname = 'Dummy Name',
      snowmanHeight = 123,
      attacking = 456,
    } = req.query;

    // 파일 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(Math.floor(snowmanHeight / 30), 10);
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
          .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="10" y="25" class="header">Snowman Heights for ${nickname}</text>
        <text x="10" y="55" class="stat">${snowmanHeight}</text>
        <text x="10" y="80" class="stat">Attacked by ${attacking} times</text>
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
