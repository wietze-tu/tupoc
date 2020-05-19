<template>
  <div id="webshop">
    <div id="navigation">
      <navigation 
        :menus="menus">
      </navigation>
      <layout-webshop/>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/core/blocks/Navigation/nav'
import layoutWebshop from '@/layouts/layout_webshop'

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
      navigation,
      layoutWebshop
    }
}
</script>

<style scoped lang="scss">
@import '../css/main.scss';


</style>
