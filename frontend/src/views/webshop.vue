<template>
  <div id="webshop">
    <div id="navigation">
      <navigation 
        v-bind:menus="menus" 
        v-bind:submenukabel="submenukabel" >
        </navigation>
    </div>
    <h1>Webshop</h1>
  </div>
</template>

<script lang="ts">
import Nav from './../components/menu/nav.vue'

export default  {
  data() {
    return {
      menus: [
        { "id":"1", "name": "Draad & Kabel", "sm":"kabel", "url": "/draad-kabel" },
        { "id":"2", "name": "Elektrotechniek", "sm":"electro", "url": "/elektrotechniek" },
        { "id":"3", "name": "Verlichting", "sm":"none", "url": "/verlichting" },
        { "id":"4", "name": "Duurzaamheid", "sm":"none", "url": "/thema" },
        { "id":"5", "name": "Leidingsystemen", "sm":"none", "url": "/leidingsystemen" },
        { "id":"6", "name": "Sanitair", "sm":"none", "url": "/sanitair" },
        { "id":"7", "name": "Gereedschap", "sm":"none","url": "/gereedschap" },
        { "id":"8", "name": "PBM", "sm":"none", "url": "/pbm" },
        { "id":"9", "name": "Bruin/witgoed", "sm":"none", "url": "/bruin-witgoed" }
      ],
      submenukabel: [
        { "id":"101", "name": "vmvl | kabel | qwpk", "url": "/#" },
        { "id":"102", "name": "Aarddraad", "url": "/#" },
      ]
      }
      
  },
    name: 'Webshop',
    components: {
      'navigation': Nav
    }
}
</script>

<style scoped lang="scss">
 @import '../color.scss';
#navigation {
     border-bottom: 1px solid $tuWhiteGray;
}


</style>
