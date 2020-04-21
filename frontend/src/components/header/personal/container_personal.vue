<template>
  <div>
    <my-shopping-card/>
    <my-favorites/>
    <my-account/>
  </div>
</template>

<script lang="ts">
import MyShoppingCard from './myShoppingCard.vue'
import MyAccount from './myAccount.vue'
import Myfavorites from './myFavorites.vue'

export default {
    name: 'Ssbpersonal',
    components: {
    'myShoppingCard': MyShoppingCard,
    'myAccount': MyAccount,
    'myFavorites': Myfavorites
    }
}

</script>


<style scoped lang="scss">
@import '../../../color.scss';
 
</style>