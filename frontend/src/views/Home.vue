<template>
  <div id="home">
    <navigation 
        v-bind:menus="menus">
    </navigation>
    <vue-slider/>
  </div>
</template>

<script lang="ts">
import Nav from './../components/menu/nav.vue'
import slider from '../components/slider/slider.vue'
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
    name: 'Webshop',
    components: {
      'navigation': Nav,
      'vueSlider': slider
    }
}
</script>

<style scoped lang="scss">
 @import '../color.scss';


</style>
