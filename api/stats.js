export default async (req, res) => {
  const renderSVG = (data) => {
    let gradientStops;

    // snowmanHeight 값에 따라 그라디언트를 조정합니다.
    if (data.snowmanHeight <= 150) {
      // 150 이하인 경우, #90C9F6 색상만 사용합니다.
      gradientStops = `
        <stop offset="0%" style="stop-color:#90C9F6;" />
        <stop offset="100%" style="stop-color:#90C9F6;" />
      `;
    } else if (data.snowmanHeight <= 320) {
      // 150 초과 320 이하인 경우, #90C9F6 에서 #2E44BC로 그라디언트를 적용합니다.
      const gradientRatio = (data.snowmanHeight - 150) / (320 - 150);
      gradientStops = `
        <stop offset="100%" style="stop-color:#90C9F6;" />
        <stop offset="${100 * gradientRatio}%" style="stop-color:#90C9F6;" />
        <stop offset="${100 * gradientRatio}%" style="stop-color:#2E44BC;" />
        <stop offset="0%" style="stop-color:#2E44BC;" />
      `;
    } else {
      // 320 초과인 경우, #2E44BC 색상만 사용합니다.
      gradientStops = `
        <stop offset="0%" style="stop-color:#2E44BC;" />
        <stop offset="100%" style="stop-color:#2E44BC;" />
      `;
    }

    // SVG 문자열을 반환합니다.
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
