<template>
  <div id="home">
    <slider/>
    <layout-home/>
  </div>
</template>

<script>
import slider from '@/components/core/blocks/HeaderHero/hero'
import layoutHome from '../layouts/layoutHome'


export default  {
  data() {
    return {
      menus: []
    }
      
  },
    name: 'home',
    components: {
      slider,
      layoutHome
    }
}
</script>

<style scoped lang="scss">
  @import '@/css/main.scss';
</style>
