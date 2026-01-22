const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Node.js CI/CD Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: white;
      min-height: 100vh;
    }

    /* HERO SECTION */
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      background: linear-gradient(to right, #00c6ff, #0072ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      font-size: 1.2rem;
      max-width: 700px;
      opacity: 0.9;
    }

    .hero button {
      margin-top: 30px;
      padding: 15px 40px;
      font-size: 1rem;
      border: none;
      border-radius: 30px;
      background: linear-gradient(135deg, #ff512f, #dd2476);
      color: white;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .hero button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }

    /* LAYERED SECTION */
    .layers {
      background: #f4f6f8;
      color: #333;
      padding: 80px 40px;
    }

    .layers h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2.5rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: auto;
    }

    .card {
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .card h3 {
      margin-bottom: 15px;
      color: #0072ff;
    }

    .card p {
      opacity: 0.8;
    }

    /* FOOTER */
    footer {
      background: #0f2027;
      padding: 30px;
      text-align: center;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  </style>
</head>

<body>

  <section class="hero">
    <h1>Node.js CI/CD Pipeline</h1>
    <p>
      This application is deployed using AWS CodePipeline, CodeBuild,
      Elastic Beanstalk, Auto Scaling, and Blue/Green deployment strategy.
    </p>
    <button>Deployment Successful 🚀</button>
  </section>

  <section class="layers">
    <h2>Architecture Layers</h2>

    <div class="cards">
      <div class="card">
        <h3>Source</h3>
        <p>GitHub repository triggers the pipeline on every commit.</p>
      </div>

      <div class="card">
        <h3>CI</h3>
        <p>CodeBuild installs dependencies and runs automated tests.</p>
      </div>

      <div class="card">
        <h3>CD</h3>
        <p>CodeDeploy performs Blue/Green deployments with rollback.</p>
      </div>

      <div class="card">
        <h3>Infrastructure</h3>
        <p>Elastic Beanstalk with ALB and Auto Scaling handles traffic.</p>
      </div>
    </div>
  </section>

  <footer>
    © 2026 | Node.js on AWS Elastic Beanstalk | DevOps Demo
  </footer>

</body>
</html>
  `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
