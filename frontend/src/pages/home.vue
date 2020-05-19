<template>
  <div id="home">
    <slider/>
    <body-home/>
  </div>
</template>

<script>
import Slider from '@/components/core/blocks/HeaderHero/slider'
import BodyHome from '../layouts/layout_home'


export default  {
  data() {
    return {
      menus: []
    }
      
  },
    name: 'home',
    components: {
      Slider,
      BodyHome
    }
}
</script>

<style scoped lang="scss">
  @import '@/css/main.scss';
</style>
