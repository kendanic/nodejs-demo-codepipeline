const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Node.js CI/CD Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      background: linear-gradient(135deg, #141e30, #243b55);
      color: #fff;
      min-height: 100vh;
    }

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

    .hero .btn {
      margin-top: 30px;
      padding: 15px 40px;
      border-radius: 30px;
      background: linear-gradient(135deg, #ff512f, #dd2476);
      color: white;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }

    .section {
      background: #f4f6f8;
      color: #333;
      padding: 80px 40px;
    }

    .section h2 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: auto;
    }

    .card {
      background: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .card h3 {
      margin-bottom: 15px;
      color: #0072ff;
    }

    footer {
      background: rgb(20, 48, 31);
      text-align: center;
      padding: 30px;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  </style>
</head>

<body>

  <section class="hero">
    <h1>Node.js on AWS</h1>
    <p>
      Deployed using AWS CodePipeline, CodeBuild, Elastic Beanstalk,
      Load Balancer, Auto Scaling and Blue/Green deployment.
    </p>
    <button class="btn">Deployment Successful</button>
  </section>

  <section class="section">
    <h2>CI/CD Architecture</h2>
    <div class="cards">
      <div class="card">
        <h3>Source</h3>
        <p>GitHub triggers the pipeline on every commit.</p>
      </div>
      <div class="card">
        <h3>Build</h3>
        <p>CodeBuild installs dependencies and runs tests.</p>
      </div>
      <div class="card">
        <h3>Deploy</h3>
        <p>Elastic Beanstalk deploys using Blue/Green strategy.</p>
      </div>
      <div class="card">
        <h3>Scale</h3>
        <p>ALB and Auto Scaling manage traffic automatically.</p>
      </div>
    </div>
  </section>

  <footer>
    © 2026 | Node.js CI/CD Demo | Elastic Beanstalk
  </footer>

</body>
</html>
  `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
