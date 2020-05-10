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
      menus: [
        { "id":"1", "name": "Assortiment", "sm":"", "url": "/assortiment" },
        { "id":"2", "name": "Diensten", "sm":"", "url": "/diensten" },
        { "id":"3", "name": "Nieuws", "sm":"", "url": "/nieuws" },
        { "id":"4", "name": "Thema's", "sm":"", "url": "/thema" },
        { "id":"5", "name": "Over ons", "sm":"", "url": "/overons" }
      ]
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
