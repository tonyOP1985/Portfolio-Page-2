<template>
  <footer>
    <div class="container">
      <div class="footer-logo">
        <p>2017 Tony Oliver-Paull</p>
      </div>
      <div class="links">
        <div class="links-wrapper">
          <a href="https://github.com/tonyOP1985" target="_blank" class="btn icon">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/tony-oliverpaull-62b21434/" target="_blank" class="btn icon">
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
          <router-link to='/contact' class="btn icon">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'siteFooter'
}
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 100px;
  background-color: rgb( 51, 51, 51);
  transition: all 0.2s ease;
  clear: both;
  display: flex;
  align-items: center;
}

.container {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.footer-logo {
  width: 50%;
}

.footer-logo p {
  color: #fff;
  width: 50%;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;
}

.links {
  width: 50%;
}

.links-wrapper {
  width: 20%;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.icon {
    color: #777;
    transition: all 0.2s ease;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  @media(max-width: 1170px) {
    .container {
      width: 100%;
    }
  }

  @media(max-width: 1000px) {
    .links-wrapper {
      width: 50%;
    }
    .footer-logo p {
      width: 100%;
    }
  }

  @media(max-width: 450px) {
    footer {
      height: 100%;
    }
    .container {
      flex-direction: column;
    }
    .links-wrapper, .footer-logo {
      width: 100%;
    }
    .links {
      order: 1;
      margin: 0 auto;
    }
    .footer-logo {
      order: 2;
    }
  }
</style>
