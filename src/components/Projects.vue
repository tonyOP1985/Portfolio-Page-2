<template>
<div class="projects">
  <div class="title">
    <div class="title-main">
      <h1>Projects</h1>
    </div>
  </div>
  <div class="project-wrapper" v-for="info in cardInfo" :key="info">
    <div class="project-title">
      <h1>{{ info.title }}</h1>
    </div>
    <div class="row">
      <div class="project-img">
        <img :src="info.image" :alt="info.alt">
      </div>
      <div class="project-info">
        <p>{{ info.text }}</p>
        <a class="btn" :href="info.code" target="_blank">View Code</a>
        <a class="btn" :href="info.projectLink" target="_blank">View Project</a>
        <div class="technologies">
          <h3>Technologies Used</h3>
          <ul>
            <li v-for="tech in info.technology" :key="tech">{{tech}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'projects',
  data () {
    return {
      cardInfo: [
        {
          image: '/static/img/projectImg/tonyopPortV12.png',
          title: 'Portfolio Page v1',
          text: 'Portfolio page.',
          alt: 'Tony Oliver-Paull',
          technology: ['Vue.js', 'Vue-router', 'Bootstrap-Vue', 'Nodemailer', 'Express.js'],
          projectLink: '#',
          code: 'https://github.com/tonyOP1985/Portfolio-Page'
        },
        {
          image: '/static/img/cloudy-day.svg',
          title: 'Weather App',
          text: 'Simple weather app.',
          alt: 'Weather App Cloud Icon',
          technology: ['Vue.js', 'Darksky API', 'Google Maps Geocoding API', 'Express.js'],
          projectLink: 'https://localweatherapp-tonyop.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/local-weather-app/tree/master/local-weather'
        },
        {
          image: '/static/img/sailor-moon.jpg',
          title: 'Sailor Moon Game',
          text: 'Game based off of the Japanese anime.',
          alt: 'Sailor Moon',
          technology: ['Vue.js', 'Express.js'],
          projectLink: 'https://sailor-moon-game.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/sailor-moon-game'
        },
        {
          image: '/static/img/indecisionApp1.png',
          title: 'Indecision App',
          text: 'Very first Vue.js app. Todo list that decides for you.',
          alt: 'Indecision App',
          technology: ['Vue.js'],
          projectLink: 'https://obscure-wave-95185.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/Indecision-App'
        },
        {
          image: '/static/img/hangManThumbNail.png',
          title: 'Hang Man',
          text: 'Hang Man game with astronomy terms.',
          alt: 'Hang man image',
          technology: ['Javascript', 'jQuery', 'HTML', 'CSS', 'Express.js'],
          projectLink: 'https://ancient-journey-60616.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/NodeHangMan'
        }
      ]
    }
  }
}

</script>

<style scoped>
* {
  transition: 0.2s ease all;
}
.projects {
  width: 100%;
  height: 100%;
  transition: 0.2s ease all;
}

.title {
  background: linear-gradient(45deg, #FFBF30, #30c9e8);
  width: 100%;
  height: 300px;
  padding: 40px 0;
  margin-bottom: 86px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 2rem;
}

.title-main {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.project-wrapper {
  width: 1170px;
  margin: 0 auto;
}

.project-title {
  width: 1000px;
  margin: 0 auto;
  border-bottom: 2px solid #30c9e8;
}

.row {
  width: 1000px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.project-img {
  height: 100%;
  width: 50%;
}

.project-img img {
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
}

.project-info {
  width: 40%;
}

.btn {
  display: block;
  font-family: 'Montserrat', sans-serif;
  width: 160px;
  margin: 10px 0;
  padding: 10px 0;
  border: none;
  background-color: #30c9e8;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #02abd6;
}

/* button a {
  text-decoration: none;
  color: #fff;
} */

.technologies ul {
  list-style: none;
}

ul li {
  padding-left: 20px;
}

ul li:before {
  content: "\2014";
  position: absolute;
  margin-left: -20px;
}

@media(max-width: 1190px) {
  .project-wrapper {
    width: 80%;
    margin: 0 auto;
  }
  
  .row  {
    width: 100%;
  }

  .project-img img {
    width: 300px;
  }

  .project-title {
    width: 100%;
  }
}

@media(max-width: 700px) {
  .title {
    height: 200px;
  }
  .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-img, .project-info {
    width: 100%;
  }
}

@media(max-width: 500px) {
  .project-title h1 {
    font-size: 1.5rem;
  }

  .title-main h1 {
    font-size: 2.5rem;
  }
}

@media(max-width: 400px) {
  .project-img img {
    width: 200px;
  }
}
</style>
