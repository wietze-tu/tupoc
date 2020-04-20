<template>
    <div class="">
        <div class="container">
            <div v-for="submenu in activeMenu"  v-bind:key="submenu.id" class="col-sm-3 itemsContainer">
                <h6>{{submenu.name}}</h6>
                <b-dropdown-item v-for="item in submenu.items"  v-bind:key="item.id" href="#">
                    {{ item.name }}
                </b-dropdown-item>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['submenus'],
    data() {
      return {
        activeMenu: []
      }
    },
    methods: {

    },
    created() {
      this.$http.get('https://my-json-server.typicode.com/wietze-tu/tupoc/'+ this.submenus ).then(function(data){
        this.activeMenu = data.body;
      }, data => {
        console.log(data.status);
     });
    }
}

</script>


<style scoped lang="scss">
 @import '../../color.scss';
 .col-sm-3 {
     float: left;
 }
 div.container{
    display: inherit; 
 }
 .container{
    padding-right: 0px;
    padding-left: 0px;
  }
  .dropdown-item {
      padding-top: 0px;
      padding-bottom: 0px;
      font-size: 10px;
  }
 .itemsContainer {
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 20px;
    overflow: hidden;
     h6 {
         color: $tuGreen;
         font-weight: 600;
         margin-top: 20px;
     }
     li{
          font-size: 0.9em;
     }
     a:link {
         color: $tuGray;
     }
 }

 .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    text-align: left;
}
</style>