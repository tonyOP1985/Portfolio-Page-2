<template>
<div id="app">
  <Navigation  v-on:openNav="addMarginTop"></Navigation>
  <div class="main" v-bind:class="{ addTopMargin: active }">
    <router-view/>
    <SiteFooter></SiteFooter>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'

export default {
  name: 'App',
  components: {
    Navigation,
    SiteFooter
  },
  data () {
    return {
       active: false
    }
  },
  methods: {
      addMarginTop (animate) {
      this.active = animate
    }
  }
}

</script>

<style>
  .addTopMargin {
    transition: margin-top 0.3s;
    overflow:hidden;
    height:100%;
  }
</style>

