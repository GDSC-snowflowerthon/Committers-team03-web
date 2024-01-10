import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    // GitHub 사용자의 닉네임을 받습니다.
    const nickname = req.query.nickname || 'Dummy Name';

    // 기본 값을 설정합니다.
    let snowmanHeight = 123; // 기본 눈사람 높이
    let attacking = 456; // 기본 공격 횟수
    let displayText = true; // API 호출 성공 여부 표시

    // 해당 사용자의 정보를 API에서 가져옵니다.
    const userInfoResponse = await fetch(
      `https://kidari.site/api/v1/readme/info/${nickname}`,
    );
    if (userInfoResponse.ok) {
      const userInfo = await userInfoResponse.json();
      snowmanHeight = userInfo.data.snowmanHeight;
      attacking = userInfo.data.attacking;
      displayText = false; // API 호출에 성공했으므로 대체 텍스트를 표시하지 않음
    }

    // 나머지 코드는 동일하게 유지하면서, SVG 텍스트 부분만 조건에 따라 변경합니다.
    let svgTextContent;
    if (displayText) {
      svgTextContent = `
        <text x="30" y="135" class="stat">Click Me To Use Kidari :)</text>
        <text x="30" y="170" class="stat">Join With Us!</text>
      `;
    } else {
      svgTextContent = `
        <text x="30" y="135" class="stat">Height: ${snowmanHeight} M</text>
        <text x="30" y="170" class="stat">Attacked: ${attacking} times</text>
      `;
    }

    // 파일 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app'; //TODO: https://kidari.site로 바꿔야함.
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

    // SVG 조합 부분에 svgTextContent를 사용합니다.
    const combinedSvg = `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgs.join('')}
        <style>
          .header { font: 900 30px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${headerColor}; }
          .stat { font: 600 16px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${statColor}; }
        </style>
        <text x="30" y="60" class="header">${nickname}</text>
        ${svgTextContent}
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
