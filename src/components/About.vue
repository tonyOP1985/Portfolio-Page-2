<template>
  <div>
    <section class="about">
      <div class="body-container">
        <header class="header-main">
         <!--  <div class="greeting-box">
            <h1 class="greeting">Hello!</h1>
          </div> -->
          <div class="text-box">
            <div class="heading-primary">
              <span class="heading-primary-main">Tony Oliver-Paull &mdash;</span>
              <span class="heading-primary-sub">Full-stack web developer</span>
            </div>
          </div>
          <div class="link-box">
            <div class="links">
              <a href="#" class="btn icon">
                <i class="fa fa-github fa-lg" aria-hidden="true"></i>
              </a>
              <a href="#" class="btn icon">
                <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
              </a>
              <router-link to='/contact' class="btn icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </router-link>
              <a href="#" class="resume btn">résumé</a>
            </div>
          </div>
        </header>
      </div>
    </section>
    <AboutMe></AboutMe>
  </div>
</template>

<script>
/* eslint-disable */
import AboutMe from './AboutMe'
export default {
  name: 'about',
  components: {
    AboutMe
  }
}
</script>

<style scoped>
  .about {
    width: 100%;
    height: 300px;
    /*background-color: #30c9e8;*/
    background: linear-gradient(45deg, #FFBF30, #30c9e8);
    /*background-image: 
    linear-gradient(
    to right bottom,
    rgba(255, 191, 48, 0.4), 
    rgba(48, 203, 232, 0.4)), 
    url(../../static/img/hero2.jpg);
    background-repeat: no-repeat;
    background-size: cover;*/
    color: #fff;
    transition: all 0.2s ease;
    overflow: hidden;
  }

  .body-container {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-main {
    width: 100%;
  }

  .greeting-box {
    width: 100%;
  }

  .greeting {
    font-size: 10rem;
    text-shadow: 0px 25px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    transition: all 0.2s ease;
  }

  .text-box {
    width: 80%;
    margin: 0 auto;
  }

  .text-box, .link-box {
    text-align: center;
  }

  .heading-primary {
    width: 100%;
    font-size: 1.7rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
  }

  .link-box {
    width: 100%;
    margin: 20px auto 0 auto;
  }

  .links {
    width: 296px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 20px;
    width: 40px;
    height: 40px;
    background-color:#02abd6;
    /*background-color: #FF1800;*/
    border-radius: 100px;
    color: #fff;
    transition: all 0.2s ease;
  }

  a {
    text-decoration: none;
  }

  .links i, {
    color: #fff;
  }

  .resume {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 115px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    background-color:#02abd6;
    /*background-color: #FF1800;*/
    border-radius: 100px;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}

@media(max-width: 1200px) {
 /* .about {
    height: 500px;
  }*/
  .body-container {
    width: 80%;
  }
  .greeting {
    width: 100%;
    font-size: 8rem;
  }
  .text-box {
    margin: 0 auto;
  }
}

@media(max-width: 1000px) {
  .text-box {
    margin: 0 auto;
  }
}

@media(max-width: 770px) {
  .body-container {
    width: 100%;
  }
  .greeting {
    font-size: 6rem;
    margin-left: 8px;
  }
  .text-box {
    width: 100%;
  }
  .link-box {
    width: 100%;
  }
}

@media(max-width: 360px) {
  .about {
    height: 350px;
  }
  .greeting {
    font-size: 4rem;
  }
  .heading-primary {
    font-size: 1.2rem;
  }
  .icon {
    margin-right: 5px;
  }
  .links {
    width: 250px;
    margin: 0 auto;
  }
}

</style>