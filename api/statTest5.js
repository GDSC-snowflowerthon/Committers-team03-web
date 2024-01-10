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
    const cardUrl = `${baseUrl}/Card${fileNumber}.svg`;
    const objectUrl = `${baseUrl}/Object${fileNumber}.svg`;
    const snowmanUrl = `${baseUrl}/Snowman000.svg`;
    const weatherUrl =
      fileNumber >= 4 ? `${baseUrl}/Star.svg` : `${baseUrl}/Snow.svg`;

    // 각각의 SVG 파일을 가져옵니다.
    const fetchSvg = async (url) => {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed to fetch SVG: ${response.statusText}`);
      return await response.text();
    };

    const cardSvg = await fetchSvg(cardUrl);
    const objectSvg = await fetchSvg(objectUrl);
    const snowmanSvg = await fetchSvg(snowmanUrl);
    const weatherSvg = await fetchSvg(weatherUrl);

    // 모든 SVG를 조합합니다.
    const combinedSvg = `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        ${cardSvg}
        ${objectSvg}
        ${snowmanSvg}
        ${weatherSvg}
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
