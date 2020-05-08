<template>
  <div class="navcontainer">
    <div class="container">
        <b-navbar toggleable="lg" variant="faded" type="light" id="mainnavigation" class="row main-dropdown">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <mainNav class="desktop-hide"></mainNav>
                <b-nav-item-dropdown  v-for="menu in menus" v-bind:key="menu.id" v-bind:text="menu.name"  >
                  <submenu-Item v-if="menu.sm" v-bind:submenus="menu.sm" class="dropdownContainer">
                  </submenu-Item>
              </b-nav-item-dropdown>
            </b-navbar-nav> 
          </b-collapse>
        </b-navbar>
    </div>
  </div>
</template>

<script lang="ts">
import submenuItem from './submenuitems.vue'
import mainNav from './mainNav.vue'
export default {
  props: ['menus', 'submenukabel'],
  data() {
    return {
      }
  },
  name: 'navigation',
  components: {
    submenuItem,
    mainNav
  }
}

</script>


<style scoped lang="scss">
@import '@/css/main.scss';
 #navigation {
   .navcontainer{
   border-bottom: 1px solid $tuGrayBorder;
   }
 }
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

nav.main-dropdown {
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
nav.main-dropdown>ul>li.currentx {
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


@media screen and (max-width: 768px) { 
  .navbar-nav {
    li {
        text-align: left;

    }
  }
  nav.main-dropdown {
      position: absolute;
      top: 100px;
      button {
        position: fixed;
        top: 0px;
      }
      .navbar-nav  {
        background: $tuWhite;
        padding-top: 20px;
        padding-left: 20px;
    }
  }
  .navbar-toggler {
    border-color: $tuWhite !important;
    margin-top: 8px;
  }
  .dropdownContainer {
    -webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    padding-left: 20px;
  }
}
</style>