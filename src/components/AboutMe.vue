<template>
<div class="aboutMe">
  <div class="aboutMe-container">
    <div class="row">
      <div class="header">
        <h1>About Me</h1>
      </div>
      <div class="about-content">
        <img class="image" src="../assets/projectImg/tony-port-img.png" alt="Tony Oliver-Paull">
        <div class="about-p">
          <p>
            I am a full-stack web-developer who has experience with technologies that include Javascript, HTML, CSS, Vue.js, Node.js, PHP, Python, MongoDB, and MySQL. Ever since I started to learn development I have grown very passionate about it and have developed a continual desire to learn more. I enjoy working on projects that require me to extend myself to outside of my comfort zone and knowledge set.
          </p>
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
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/html5-original.svg"
                     alt="html5">
                <p>HTML5</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/css3-original.svg"
                     alt="css3">
                <p>CSS3</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/javascript-original.svg"
                     alt="javascript">
                <p>Javascript</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/jquery-original.svg"
                     alt="jquery">
                <p>jQuery</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/vuejs-original.svg"
                     alt="vuejs">
                <p>Vue</p>
              </div>
            </a>
            <a href="#">
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
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/nodejs-original.svg"
                     alt="nodejs">
                <p>Node</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/express-original-wordmark.svg"
                     alt="express">
                <p>Express</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/php-plain.svg"
                     alt="php">
                <p>PHP</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/mongodb-original-wordmark.svg"
                     alt="mongodb">
                <p>MongoDB</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/mysql-original-wordmark.svg"
                     alt="mysql">
                <p>MySQL</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/mocha-plain.svg"
                     alt="mocha">
                <p>Mocha</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="skill-wrapper">
        <h3>Other</h3>
        <div class="skills">
          <div class="devicons-wrapper">
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/github-original.svg"
                     alt="github">
                <p>GitHub</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/heroku-original.svg"
                     alt="heroku">
                <p>Heroku</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/python-original.svg"
                     alt="python">
                <p>Python</p>
              </div>
            </a>
          </div>
          <div class="devicons-wrapper">
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/visualstudio-plain.svg"
                     alt="visual studio">
                <p>VS Code</p>
              </div>
            </a>
            <a href="#">
              <div class="devicons">
                <img src="../../static/img/devicons/gimp-original.svg"
                     alt="gimp">
                <p>Gimp</p>
              </div>
            </a>
            <a href="#">
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
