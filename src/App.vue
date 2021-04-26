<template>
  <div id="app">
   
    <router-view v-if='$route.path!="/"' />
     <Home v-else/>
  </div>
</template>

<script>
import {Home} from './pages/index.js'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

</style>
