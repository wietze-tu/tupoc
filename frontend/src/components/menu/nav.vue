<template>
<div class="container">
      <b-navbar toggleable="lg" variant="faded" type="light" id="mainnavigation" class="row main">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown  v-for="menu in menus" v-bind:key="menu.id" v-bind:text="menu.name"  >
              <submenu-Item v-bind:submenus="kabel" class="dropdownContainer">
              </submenu-Item>
             </b-nav-item-dropdown>
          </b-navbar-nav> 
        </b-collapse>
      </b-navbar>
</div>
</template>

<script lang="ts">
import submenu from './submenuitems.vue'
export default {
  props: ['menus', 'submenukabel'],
  data() {
    return {
        kabel: [
            { "id":"0001",
              "name":"Energiekabels",
              "items": [
                { "id":"101", "name": "vmvl | kabel | qwpk", "url": "/#" },
                { "id":"102", "name": "Aarddraad", "url": "/#" }
           ]},
           {  "id":"0002",
              "name":"Informatie- en signaalkabels",
              "items": [
                { "id":"103", "name": "UTP", "url": "/#" },
                { "id":"104", "name": "Coax | Coaxkabel", "url": "/#" }
           ]},
           {  "id":"0003",
              "name":"test",
              "items": [
                { "id":"103", "name": "UTP-A", "url": "/#" },
                { "id":"104", "name": "Coax | Coaxkabel", "url": "/#" }
           ]},
           

        ],
        electro: [
          { "id":"111", "name": "Electro", "url": "/#" },
          { "id":"112", "name": "Aarddraad", "url": "/#" },
        ]
      }
  },
  name: 'navigation',
  components: {
    'submenuItem': submenu,
  }
}

</script>


<style scoped lang="scss">
 @import '../../color.scss';
.navbar-nav {
    li {
      font-size: 0.9em;
      font-family: Arial, Helvetica, sans-serif;
      a .nav-link {
            padding-left: 0;
        }
    }
  }

#webshop {
    .container {
        padding: 0;
    }
}
.dropdown-menu  {
  font-size: 0.9em;
}
.dropdownContainer {
  width: 100%;
  position: fixed;
  left: 0px;
  background: $tuWhite;
  border-bottom: 1px solid $tuWhiteGray;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 50px;
  .container{
    padding-right: 0px;
    padding-left: 0px;
  }
}

nav.main {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    >ul {
    margin-bottom: 0;
    padding: 0px;
      >li {
      min-height: 29px;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 6px;
      list-style: none;
      float: left;
      a {
        position: absolute;
        top: 10px;
        height: 23px;
        width: 45px;
        color: $tuGreen;
        display: block;
        font-family: Arial;
        font-size: 1em;
        padding: 10px 4px 8px;
      }
    }
    li.current {
        border-color: $tuGreen;
        border-style: solid;
        border-top: 0px;
        border-bottom: 0px;
        border-left-width: 1px;
        border-right-width: 1px;
    }
    li.nav-menu {
        padding-right: 20px;
        a {
          position: relative;
          top: -7px;
          height: 23px;
          width: 100%;
          color: $tuGrayMenu;
          display: block;
          font-family: Arial;
          font-size: 0.9em;
          padding: 10px 3px 8px 4px;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
}
.nav-home {
    min-width: 48px;
    margin-left: 2px;
    width: 50px;
}
nav.main>ul>li.currentx {
    border-color: $tuGreen;
    border-style: solid;
    border-top: 0px;
    border-bottom: 0px;
    border-left-width: 1px;
    border-right-width: 1px;
}

 div.nav-divider {
    float: left;
    height: 1px;
    width: 100%;
    background: $tuGreen;
    background: -webkit-linear-gradient(left,$tuGreen,$tuGreenLight);
    background: -o-linear-gradient(right,$tuGreen,$tuGreenLight);
    background: -moz-linear-gradient(right,$tuGreen,$tuGreenLight);
    background: linear-gradient(to right,$tuGreen,$tuGreenLight);
}


</style>