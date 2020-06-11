<template>
  <div id="webshop">
    <div id="navigation">
      <navigation v-bind:menus="menus"></navigation>
    </div>
    <h1>Diensten</h1>
  </div>
</template>

<script>
import navigation from '@/components/core/blocks/Navigation/navigation'

export default  {
  data() {
    return {
      menus: [
        { "name": "Levermogenlijkheden", "url": "/draad-kabel" },
        { "name": "Online diensten", "url": "/elektrotechniek" },
        { "name": "Koppelingen ERP & BIM", "url": "/verlichting" },
        { "name": "Showrooms", "url": "/thema" },
        { "name": "Opleidingen en Trainingen", "url": "/leidingsystemen" }
          ]
      }
  },
    name: 'Webshop',
    components: {
      navigation
    }
}
</script>

<style scoped lang="scss">
@import '../css/main.scss';
#navigation {
     border-bottom: 1px solid $tuWhiteGray;
}

</style>
