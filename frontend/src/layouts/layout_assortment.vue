<template>
<div  id="bodyhome">
  <div class="container">
      <div class="row ">
        <div class="col-sm-12 ">
            <webshop-Overview />
        </div>
    </div>
  </div>
</div>
</template>

<script>
import WebshopOverview from '@/components/core/blocks/Assortment/assortmentOverview'
export default {
    name: 'webshop',
    components: {
      WebshopOverview
      }
}
</script>


