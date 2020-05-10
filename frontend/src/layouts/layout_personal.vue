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
import MyFavorites from '../components/theme/blocks/HeaderPersonal/myFavorites'


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


