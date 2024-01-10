export default async (req, res) => {
  // 비동기 함수로 renderSVG를 선언
  const renderSVG = async (data) => {
    // 파일 URL 결정
    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(Math.floor(data.snowmanHeight / 30), 10);
    const svgUrl = `${baseUrl}/${fileNumber}.svg`;

    // fetch를 사용하여 SVG 파일의 내용을 가져옵니다.
    const svgResponse = await fetch(svgUrl);
    if (!svgResponse.ok) {
      throw new Error(`Failed to fetch SVG: ${svgResponse.statusText}`);
    }
    let svgContent = await svgResponse.text();

    // SVG 내용에 텍스트 요소를 추가합니다.
    svgContent = svgContent.replace(
      '</svg>',
      `
      <style>
        .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
        .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
      </style>
      <text x="10" y="25" class="header">Snowman Heights for ${data.nickname}</text>
      <text x="10" y="55" class="stat">Height: ${data.snowmanHeight} M</text>
      <text x="10" y="80" class="stat">Attacked: ${data.damage} times</text>
    </svg>`,
    );

    return svgContent;
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

    const data = {
      nickname,
      snowmanHeight,
      attacking,
      damage,
      snowId,
      hatId,
      decoId,
    };

    // SVG 생성
    const svg = await renderSVG(data);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error serving the SVG file');
  }
};
