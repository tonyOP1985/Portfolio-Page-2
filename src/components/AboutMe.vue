<template>
<div class="aboutMe">
  <div class="aboutMe-container">
    <div class="row">
      <div class="header">
        <h1>About Me</h1>
      </div>
      <div class="about-content">
        <img class="image" src="/static/img/tony1.png" alt="Tony Oliver-Paull">
        <div class="about-p">
          <p>I am a full-stack web developer with exprerience in all layers of software development, including a knowledge of Javascript, HTML, CSS, Vue,js, Node.js, PHP, Python, MongoDB, and MySQL. I'm passionate about software development, both on the front and back end, and I am always working to learn more. I enjoy projects that push me outside of my comfort zone and knowledge set.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="header">
        <h1>Skills</h1>
      </div>
      <div class="skill-wrapper">
        <h3>Front-End Skills</h3>
        <div class="skills">
          <div class="devicons-wrapper">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/html5-original.svg"
                     alt="html5">
                <p>HTML5</p>
              </div>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/css3-original.svg"
                     alt="css3">
                <p>CSS3</p>
              </div>
            </a>
            <a href="https://www.javascript.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/javascript-original.svg"
                     alt="javascript">
                <p>Javascript</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="https://jquery.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/jquery-original.svg"
                     alt="jquery">
                <p>jQuery</p>
              </div>
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/vuejs-original.svg"
                     alt="vuejs">
                <p>Vue</p>
              </div>
            </a>
            <a href="http://handlebarsjs.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/handlebars-original.svg"
                     alt="handlebars">
                <p>Handlebars</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="skill-wrapper">
        <h3>Back-end Skills</h3>
        <div class="skills">
          <div class="devicons-wrapper">
            <a href="https://nodejs.org/en/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/nodejs-original.svg"
                     alt="nodejs">
                <p>Node</p>
              </div>
            </a>
            <a href="https://expressjs.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/express-original-wordmark.svg"
                     alt="express">
                <p>Express</p>
              </div>
            </a>
            <a href="http://www.php.net/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/php-plain.svg"
                     alt="php">
                <p>PHP</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="https://www.mongodb.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/mongodb-original-wordmark.svg"
                     alt="mongodb">
                <p>MongoDB</p>
              </div>
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/mysql-original-wordmark.svg"
                     alt="mysql">
                <p>MySQL</p>
              </div>
            </a>
            <a href="https://www.python.org/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/python-original.svg"
                     alt="python">
                <p>Python</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="skill-wrapper">
        <h3>Other</h3>
        <div class="skills">
          <div class="devicons-wrapper">
            <a href="https://github.com/tonyOP1985" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/github-original.svg"
                     alt="github">
                <p>GitHub</p>
              </div>
            </a>
            <a href="https://www.heroku.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/heroku-original.svg"
                     alt="heroku">
                <p>Heroku</p>
              </div>
            </a>
            <a href="https://mochajs.org/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/mocha-plain.svg"
                     alt="mocha">
                <p>Mocha</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="https://code.visualstudio.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/visualstudio-plain.svg"
                     alt="visual studio">
                <p>VS Code</p>
              </div>
            </a>
            <a href="https://www.gimp.org/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/gimp-original.svg"
                     alt="gimp">
                <p>Gimp</p>
              </div>
            </a>
            <a href="https://www.npmjs.com/" target="_blank">
              <div class="devicons">
                <img src="../../static/img/devicons/npm-original-wordmark.svg"
                     alt="npm">
                <p>NPM</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'aboutMe'
}

</script>

<style scoped="">
.aboutMe {
  width: 100%;
  margin-top: 50px;
  transition: all 0.2s ease;
  color: #494C4E;
}

.aboutMe-container {
  width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.row {
  width: 60%;
  margin: 20px auto;
}

.header {
  width: 100%;
  margin-bottom: 10px;
}

.header h1 {
  width: auto;
  border-bottom: 2px solid #30c9e8;
}

.about-content {
  display: flex;
  flex-direction: row;
}

 .image {
  height: 190px;
  width: 190px;
  margin: 0 auto;
  padding: 0;
}

.about-p {
  width: 70%;
  font-size: 1rem;
  color: #494C4E;
}

.about-p p {
  padding: 0 10px;
}

.skill-wrapper {
  margin-bottom: 40px;
}

.skill-wrapper h3 {
  width: 95%;
  margin: 0 auto;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.skills {
  display: flex;
  flex-direction: row;
}

.devicons-wrapper {
  width: 351px;
  display: flex;
  flex-direction: row;
}

.devicons-wrapper a {
  text-decoration: none;
}

.devicons {
  height: 120px;
  width: 90px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  text-align: center;
}

.devicons p {
  color: #494C4E;
  font-weight: 600;
  letter-spacing: 1px;
}

img {
  height: 90px;
  width: 90px;
  padding: 10px;
}

@media(max-width: 1200px) {
  .aboutMe-container {
    width: 100%;
  }
  .row {
    width: 702px;
  }
}

@media(max-width: 770px) {
  .row {
    width: 95%;
  }
}

@media(max-width: 726px) {
  .skills {
    flex-direction: column;
  }
  .devicons-wrapper {
    width: 100%;
    justify-content: space-between;
  }
}

@media(max-width: 480px) {
  .about-content {
    flex-direction: column;
  }

  .about-p {
    width: 100%;
    padding-top: 15px;
  }
}

@media(max-width: 370px) {
  .devicons-wrapper {
    flex-direction: column;
  }
  .skills {
    flex-direction: row;
  }
  .devicons {
    width: 100%;
    margin: 0;
    text-align: center;
  }
  img {
    margin: 0 auto;
  }
}
</style>
