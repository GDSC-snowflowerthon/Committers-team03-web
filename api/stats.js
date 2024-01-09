export default async (req, res) => {
  const renderSVG = (data) => {
    let gradientStops;

    if (data.snowmanHeight <= 150) {
      // snowmanHeight이 150 이하일 때는 하나의 색상만 사용
      gradientStops = `
        <stop offset="0%" style="stop-color:#90C9F6;" />
        <stop offset="100%" style="stop-color:#90C9F6;" />
      `;
    } else if (data.snowmanHeight > 150 && data.snowmanHeight <= 320) {
      // snowmanHeight이 150 초과, 320 이하일 때는 두 색상을 그라디언트로 사용
      const ratio = (data.snowmanHeight - 150) / (320 - 150);
      gradientStops = `
        <stop offset="0%" style="stop-color:#90C9F6;" />
        <stop offset="${ratio * 100}%" style="stop-color:#90C9F6;" />
        <stop offset="${ratio * 100}%" style="stop-color:#2E44BC;" />
        <stop offset="100%" style="stop-color:#2E44BC;" />
      `;
    } else {
      // snowmanHeight이 320 초과일 때는 다른 하나의 색상만 사용
      gradientStops = `
        <stop offset="0%" style="stop-color:#2E44BC;" />
        <stop offset="100%" style="stop-color:#2E44BC;" />
      `;
    }

    return `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="snowmanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            ${gradientStops}
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#snowmanGradient)" />
        <style>
          .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="10" y="25" class="header">Snowman Heights for ${data.nickname}</text>
        <text x="10" y="55" class="stat">Height: ${data.snowmanHeight} cm</text>
        <text x="10" y="80" class="stat">Attacked: ${data.damage} times</text>
      </svg>
    `;
  };

  try {
    // req.query에서 필요한 데이터를 직접 분해하여 할당합니다.
    const {
      nickname = 'Dummy Name',
      snowmanHeight = 223,
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
