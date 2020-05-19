<template>
  <div id="app">
    <header-usp/>
    <header-Top/>
    <router-view/>
  
  </div>
</template>

<script>
import HeaderUsp from '@/layouts/blocks/layout_header_usp'
import HeaderTop from '@/layouts/blocks/layout_header' 

export default {
  components: {
    HeaderUsp,
    HeaderTop
  }
}
</script>

<style lang="scss">
@import './css/main.scss';
</style>
