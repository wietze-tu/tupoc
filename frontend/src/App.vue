<template>
  <div id="app">
    <header-usp/>
    <header-General/>
    <router-view/>
  
  </div>
</template>

<script>
import HeaderUsp from '@/layouts/blocks/layoutHeaderUsp'
import HeaderGeneral from '@/layouts/blocks/layoutHeader' 

export default {
  components: {
    HeaderUsp,
    HeaderGeneral
  }
}
</script>

<style lang="scss">
@import './css/main.scss';
</style>
