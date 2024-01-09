export default async (req, res) => {
  const renderSVG = (data) => {
    return `
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>
          .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
          .stat { font: 400 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
        </style>
        <text x="10" y="25" class="header">GitHub Stats for ${data.name}</text>
        <text x="10" y="55" class="stat">Followers: ${data.followers}</text>
        <text x="10" y="80" class="stat">Repositories: ${data.public_repos}</text>
      </svg>
    `;
  };

  try {
    // req.query에서 필요한 데이터를 직접 분해하여 할당합니다.
    const {
      name = 'Dummy Name',
      followers = 123,
      public_repos = 456,
    } = req.query;
    // 이후에 이 변수들을 사용하여 data 객체를 생성합니다.
    const data = {name, followers, public_repos};

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
