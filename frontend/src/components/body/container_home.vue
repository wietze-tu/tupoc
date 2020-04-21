<template>
<div  id="bodyhome">
  <div class="container">
      <div class="row ">
        <div class="col-sm-12 ">
            
                main
                <login-Form/>
            
        </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import LoginForm from '../login/form_login.vue'
export default {
      name: 'bodyHome',
      components: {
          'loginForm': LoginForm
      }
}
</script>


<style scoped lang="scss">
 @import '../../color.scss';

</style>
