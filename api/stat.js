import {Buffer} from 'buffer';
import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const data = {
      nickname: req.query.nickname || 'Dummy Name',
      snowmanHeight: req.query.snowmanHeight || 223,
      damage: req.query.damage || 456,
    };

    const baseUrl = 'https://commiters-team03-web.vercel.app';
    const fileNumber = Math.min(Math.floor(data.snowmanHeight / 30), 10);
    const pngUrl = `${baseUrl}/${fileNumber}.png`;

    const imageResponse = await fetch(pngUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageDataUri = `data:image/png;base64,${base64Image}`;

    const htmlContent = `
      <div style="position: relative; width: 400px; height: 200px;">
        <img src="${imageDataUri}" alt="Snowman Image" style="width: 100%; height: auto;" />
        <div id="text-container" style="position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 2s;">
          <div style="font: 700 30px 'Segoe UI', Ubuntu, Sans-Serif; color: #2f80ed; padding-left: 30px; padding-top: 60px;">${data.nickname}</div>
          <div id="height" style="font: 600 16px 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; color: #333; padding-left: 30px;">Height: 0 M</div>
          <div id="damage" style="font: 600 16px 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; color: #333; padding-left: 30px;">Attacked: 0 times</div>
        </div>
      </div>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const textContainer = document.getElementById('text-container');
          const heightElem = document.getElementById('height');
          const damageElem = document.getElementById('damage');
          let height = 0;
          let damage = 0;
          
          textContainer.style.opacity = 1;

          const animateValues = () => {
            if (height < ${data.snowmanHeight}) {
              height++;
              heightElem.textContent = 'Height: ' + height + ' M';
            }
            if (damage < ${data.damage}) {
              damage++;
              damageElem.textContent = 'Attacked: ' + damage + ' times';
            }
            if (height < ${data.snowmanHeight} || damage < ${data.damage}) {
              requestAnimationFrame(animateValues);
            }
          };

          setTimeout(animateValues, 2000); // Delay the animation start
        });
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlContent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error serving the content');
  }
};
