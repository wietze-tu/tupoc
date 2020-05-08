<template>
  <div id="webshop">
    <div id="navigation">
      <navigation 
        v-bind:menus="menus">
      </navigation>
      <body-webshop/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/theme/blocks/Navigation/nav'
import BodyWebshop from '@/layouts/layout_webshop'

export default  {
  data() {
    return {
      menus: [
        { "id":"1", "name": "Draad & Kabel", "sm":"kabel", "url": "/draad-kabel" },
        { "id":"2", "name": "Elektrotechniek", "sm":"electro", "url": "/elektrotechniek" },
        { "id":"3", "name": "Verlichting", "sm":"", "url": "/verlichting" },
        { "id":"4", "name": "Duurzaamheid", "sm":"", "url": "/thema" },
        { "id":"5", "name": "Leidingsystemen", "sm":"", "url": "/leidingsystemen" },
        { "id":"6", "name": "Sanitair", "sm":"", "url": "/sanitair" },
        { "id":"7", "name": "Gereedschap", "sm":"","url": "/gereedschap" },
        { "id":"8", "name": "PBM", "sm":"", "url": "/pbm" },
        { "id":"9", "name": "Bruin/witgoed", "sm":"", "url": "/bruin-witgoed" }
      ]
    }
      
  },
    name: 'Webshop',
    components: {
      'navigation': Nav,
      'bodyWebshop': BodyWebshop
    }
}
</script>

<style scoped lang="scss">
@import '../css/main.scss';


</style>
