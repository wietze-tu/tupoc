<template>
<div class="">
    <div class="container">
        <div v-for="submenu in submenus"  v-bind:key="submenu.id" class="col-sm-3 itemsContainer">
            <h6>{{submenu.name}}</h6>
            <b-dropdown-item v-for="item in submenu.items"  v-bind:key="item.id" href="#">
                {{ item.name }}
            </b-dropdown-item>   
        </div>
    </div>
</div>
</template>

<script lang="ts">
export default  {
    props: ['submenus'],
     data() {
        return {
            }   
        },
     name: 'submenuitem'
}
</script>


<style scoped lang="scss">
 @import '../../color.scss';
 .col-sm-3 {
     float: left;
 }
 .container{
    padding-right: 0px;
    padding-left: 0px;
  }
  .dropdown-item {
      padding-top: 0px;
      padding-bottom: 0px;
  }
 .itemsContainer {
    padding-right: 0px;
    padding-left: 0px;
     h6 {
         color: $tuGreen;
         font-weight: 600;
         margin-top: 20px;
     }
     a {
         color: $tuGray;
         font-size: 0.9em;
     }
 }
</style>