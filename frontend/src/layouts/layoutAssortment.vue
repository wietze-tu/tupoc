<template>
<div  id="bodyhome">
  <div class="container">
      <div class="row ">
        <div class="col-sm-9">
            <router-view />
        </div>
        <div class="col-sm-3">
            <assortmentNavigation/>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import assortmentNavigation from '../components/core/blocks/Navigation/navigationBlockAssortment';

export default {
    name: 'layout_assortment',
    components: {
        assortmentNavigation
      }
}
</script>

