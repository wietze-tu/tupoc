<template>
<div  id="bodyhome">
  <div class="container">
      <div class="row ">
        <div class="col-sm-12 ">
                <login-Form/>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import LoginForm from '@/components/core/blocks/Login/form_login'
export default {
      name: 'bodyHome',
      components: {
          'loginForm': LoginForm
      }
}
</script>


