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
            <mainNav/>
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
import Logo from '@/components/theme/blocks/Logo/logo'
import MainNav from '@/components/theme/blocks/Navigation/mainNav'
import Search from '@/components/theme/blocks/Search/search'
import Personal from './layout_personal'

export default {
      name: 'Header',
     
      components: {
        Logo,
        MainNav,
        Search,
        Personal
      }
}
</script>


<style scoped lang="scss" src="@/css/main.scss">


</style>
