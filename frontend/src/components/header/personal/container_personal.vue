<template>
  <div v-if="myAccount.id">
    <my-shopping-card/>
    <my-favorites/>
    <my-account/>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions }  from 'vuex';
import MyShoppingCard from './myShoppingCard.vue'
import MyAccount from './myAccount.vue'
import Myfavorites from './myFavorites.vue'


export default {
    name: 'Personal',
    computed: mapGetters(['myAccount']),
    methods: {
        ...mapActions(['fetchClient'])
    },
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