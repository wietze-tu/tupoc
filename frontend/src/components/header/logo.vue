<template>
    <div class="col-sm-3 companyLogo headerLeft">
        <router-link to="/">
          <div class="logo"> 
          </div>       
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'logo' 
}
</script>

<style scoped lang="scss">
@import '../../color.scss';
.headerLeft {
    float: left;
    padding-left: 0;
  }
.companyLogo {
        text-align: left;
        img{
          width: 233px;
          height: 43px;
          margin: 10px 0;
        }
        .logo {
          height: 43px;
          width: 233px;
          background-image: url("../../assets/logo.png");
        }
  }
 @media screen and (max-width: 1280px) { 
  .col-sm-3  {
    width: 25%;
  }
  .companyLogo {
        .logo {
          height: 43px;
          width: 53px;
          background-image: url("../../assets/logo-mobile.png");
          background-repeat: no-repeat;
        }
  }
}
  
</style>