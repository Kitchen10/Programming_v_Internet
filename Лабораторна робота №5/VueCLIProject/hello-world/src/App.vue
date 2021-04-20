<template>
  <img alt="Vue logo" src="https://npu.edu.ua/npu_modules/images/logo/xlogo_npu.png.pagespeed.ic.hYv-k6ofZd.webp">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <userdata/>
  <comment/>
  <participants/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import userdata from './components/userdata.vue'
import comment from './components/comment.vue'
import participants from './components/Participants.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    userdata,
    comment,
    participants
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
