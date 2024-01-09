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
export {renderSVG};

export default async (req, res) => {
  try {
    // Dummy data for demonstration purposes
    const data = {
      name: 'Dummy Name',
      followers: 123,
      public_repos: 456,
    } = req.query;

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
export {renderSVG};
