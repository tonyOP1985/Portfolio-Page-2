<template>
<header class="header">
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">Tony Oliver-Paull</router-link>
      </div>
      <div :class="{isActive: animate}"
          class="hamburger hamburger--collapse hb-button"
          id="hamburger"
          @click.prevent="openNav">
        <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
        </span>
      </div>
      <ul class="navbar-nav">
        <li>
          <router-link to='/' class="about">About</router-link>
        </li>
        <li>
          <router-link to='/projects' class="projects">Projects</router-link>
        </li>
        <li>
          <router-link to='/contact'>Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div :class="{open: animate}" id="collapse-menu" class="collapse-nav" @click.prevent="openNav">
    <router-link to='/'>About</router-link>
    <router-link to='/projects'>Projects</router-link>
    <router-link to='/contact'>Contact</router-link>
  </div>
</header>

</template>

<script>
// @click="active = !active"
/* eslint-disable */
export default {
  name: 'navigation',
  data () {
    return {
      animate: false
    }
  },
  methods: {
    openNav (e) {
      this.animate = !this.animate
      console.log(this.animate)
      this.$emit('openNav', this.animate)
    }
  }
}

</script>
