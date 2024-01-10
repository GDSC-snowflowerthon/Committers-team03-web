export default async (req, res) => {
  const renderSVG = (data) => {
    return `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>
          .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="10" y="25" class="header">Snowman Heights for ${data.nickname}</text>
        <text x="10" y="55" class="stat">${data.snowmanHeight}</text>
        <text x="10" y="80" class="stat">Attacked by ${data.attackedCount}</text>
      </svg>
    `;
  };

  try {
    // req.query에서 필요한 데이터를 직접 분해하여 할당합니다.
    const {
      nickname = 'Dummy Name',
      snowmanHeight = 123,
      attacking = 456,
      damage = 456,
      snowId = 1,
      hatId = 1,
      decoId = 1,
    } = req.query;
    // 이후에 이 변수들을 사용하여 data 객체를 생성합니다.
    const data = {
      nickname,
      snowmanHeight,
      attacking,
      damage,
      snowId,
      hatId,
      decoId,
    };

    // In a real scenario, you'd fetch data from GitHub API
    // const response = await fetch(`https://api.github.com/users/${username}`);
    // const data = await response.json();

    const svg = renderSVG(data);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (error) {
    res.status(500).send('Error generating SVG');
  }
};
export {};
