<template>
<div  id="head">
  <div class="container head stack_header">
      <div class="row appHeader">
        <div class="col-sm-3 logoSection">
            <!-- logo -->
            <logo/>
        </div>
        <div class="col-sm-3 navSection mobile-hide">
          <!-- main menu -->
            <navigation-header/>
        </div>
        <div class="col-sm-2 personalSectionMobile">
          <!-- personal menu -->
            <personal/>
        </div>  
        <div class="col-sm-4 searchSection">
          <!-- search -->
          <search/>
        </div> 
        <div class="col-sm-2 personalSection">
          <!-- personal menu -->
            <personal/>
        </div>   
      </div>
  </div>
</div>
</template>

<script>
import Logo from '@/components/core/logo'
import navigationHeader from '@/components/core/blocks/Navigation/navigationHeader'
import Search from '@/components/core/blocks/Search/search'
import Personal from './layoutHeaderAcount'

export default {
      name: 'Header',
     
      components: {
        Logo,
        navigationHeader,
        Search,
        Personal
      }
}
</script>


