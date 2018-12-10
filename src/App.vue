<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <navs></navs>  
  </div>
</template>

<script>
import headers from "@/components/header/header.vue"
import navs from "@/components/nav/nav.vue"

export default {
  components:{
    headers,
    navs
  },
  name: 'App'
}
</script>

<style lang="less">
  #app{
    margin-top: 50px;
    margin-bottom: 60px;
  }
</style>
