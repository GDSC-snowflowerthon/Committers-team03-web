// import Card0 from '../public/0.svg';
// import Card1 from '../public/1.svg';
// import Card2 from '../public/2.svg';
// import Card3 from '../public/3.svg';
// import Card4 from '../public/4.svg';
// import Card5 from '../public/5.svg';
// import Card6 from '../public/6.svg';
// import Card7 from '../public/7.svg';
// import Card8 from '../public/8.svg';
// import Card9 from '../public/9.svg';
// import Card10 from '../public/10.svg';
import fs from 'fs';
import path from 'path';

export default async (req, res) => {
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

    // snowmanHeight에 따라 파일 이름을 결정합니다.
    let filename;
    if (data.snowmanHeight <= 130) {
      filename = '0.svg';
    } else if (snowmanHeight <= 160) {
      filename = '1.svg';
    } else if (snowmanHeight <= 190) {
      filename = '2.svg';
    } else if (snowmanHeight <= 220) {
      filename = '3.svg';
    } else if (snowmanHeight <= 250) {
      filename = '4.svg';
    } else if (snowmanHeight <= 280) {
      filename = '5.svg';
    } else if (snowmanHeight <= 310) {
      filename = '6.svg';
    } else if (snowmanHeight <= 340) {
      filename = '7.svg';
    } else if (snowmanHeight <= 370) {
      filename = '8.svg';
    } else if (snowmanHeight <= 410) {
      filename = '9.svg';
    } else {
      filename = '10.svg';
    }

    // 파일 시스템을 통해 SVG 파일을 읽습니다.
    // eslint-disable-next-line no-undef
    const filePath = path.join(process.cwd(), 'public', filename);
    let svg = fs.readFileSync(filePath, 'utf8');

    console.log(`${filePath}`);
    // SVG 파일을 읽습니다.

    // SVG 내용에 텍스트 요소를 추가합니다.
    svg = svg.replace(
      '</svg>',
      `
      <text x="10" y="25" class="header">Snowman Heights for ${nickname}</text>
      <text x="10" y="55" class="stat">Height: ${snowmanHeight} cm</text>
      <text x="10" y="80" class="stat">Attacked: ${damage} times</text>
    </svg>`,
    );

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error serving the SVG file');
  }
};

export {};
