<template>
  <div v-if="myAccount.id">
    <my-shopping-card/>
    <my-favorites/>
    <my-account/>
  </div>
</template>

<script>
import { mapGetters, mapActions }  from 'vuex';
import MyShoppingCard from '@/components/core/blocks/HeaderAccount/myShoppingCard'
import MyAccount from '@/components/core/blocks/HeaderAccount/myAccount'
import MyFavorites from '../components/core/blocks/HeaderAccount/myFavorites'


export default {
    name: 'Personal',
    computed: mapGetters(['myAccount']),
    methods: {
        ...mapActions(['fetchClient'])
    },
    components: {
      MyShoppingCard,
      MyAccount,
      MyFavorites
    }
}

</script>


