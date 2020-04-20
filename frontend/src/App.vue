<template>
  <div id="app">
    <stack-usp/>
    <stack-header/>
    <router-view/>
  
  </div>
</template>

<script>
import StackUsp from '@/components/usp/container_usp.vue'
import StackHeader from '@/components/header/container_head.vue' 

export default {
  components: {
    'StackUsp': StackUsp,
    'StackHeader': StackHeader
  }
}
</script>

<style lang="scss">
@import './color.scss';
@import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');

#app {
  font-family: Verdana,Arial,Ari,'Liberation Sans',FreeSans,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $tuGray;
}
a:link, a:visited{
  color: $tuGreen
}
a:hover {
    color: $tuGray;
    text-decoration: underline;
}
h1 {
  margin-top: 5px !important;
}
.dropdown-toggle::after {
    display: none !important;
}
.dropdown-menu {
  border: 0px !important;
}
.dropdown-item:hover, .dropdown-item:focus {
  background-color: $tuWhite !important;
}
.dropdown-item {
    padding-bottom: 0px !important;
}

.nav-link, .dropdown-item{
  color: $tuGrayMenu !important;
  padding-left: 0 !important;
  padding-right: 1.8rem !important
}


@media (min-width: 1200px){
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 960px !important;
  } 
}
@media screen and (max-width: 768px) { 
  body {
    margin-left: 10px !important;
  }
  .mobile-hide { 
    display: none; 
  } 
}
@media screen and (min-width: 769px) { 
  .desktop-hide {
    display: none; 
  }
}

</style>
