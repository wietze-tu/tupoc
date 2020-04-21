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

<script lang="ts">
import Logo from './logo.vue'
import MainNav from '../menu/mainNav.vue'
import Search from './search.vue'
import Personal from './personal/container_personal.vue'

export default {
      name: 'appHeader',
     
      components: {
        'logo': Logo,
        'mainNav': MainNav,
        'search': Search,
        'personal': Personal
      }
}
</script>


<style scoped lang="scss">
 @import '../../color.scss';
 #head {
  margin-top: 5px;
  border-bottom: 1px solid $tuWhiteGray;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

 .head {
  padding-right: 0px;
  padding-left: 0px;
}
.appHeader {
  margin-right: 0px;
  .headerRight {
    float: right;
    padding-right: 0;
  }
  .navSection {
    padding-left: 20px;
  }
  .searchSection {
    padding-top: 6px;
  }
  .personalSection {
    position: relative;
    bottom: 10px;
  }

}
@media screen and (max-width: 768px) { 
  #head {
    margin-top: 5px;
    margin-bottom: 5px;
    border-bottom: 0px;
    -moz-box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    -webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  }
  .logoSection {
    width: 25%;
    margin-left: 20%;
    float: left;
  }
  .personalSectionMobile {
    display: block;
    width: auto;
    position: absolute;
    top: -8px;
    right: 0px;
  }
  .personalSection {
    display: none;
  }
  .searchSection {
    margin-right: 14px;
    margin-left: 14px;
    margin-top: 10px;
  }
}
@media screen and (min-width: 768px) { 
  .personalSectionMobile {
    display: none;
  }
}

</style>
