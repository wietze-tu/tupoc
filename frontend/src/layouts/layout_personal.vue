<template>
  <div v-if="myAccount.id">
    <my-shopping-card/>
    <my-favorites/>
    <my-account/>
  </div>
</template>

<script>
import { mapGetters, mapActions }  from 'vuex';
import MyShoppingCard from '@/components/theme/blocks/HeaderPersonal/myShoppingCard'
import MyAccount from '@/components/theme/blocks/HeaderPersonal/myAccount'
import Myfavorites from '../components/theme/blocks/HeaderPersonal/myFavorites'


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
 @import '@/css/main.scss';
</style>