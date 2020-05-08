<template>
    <div class="myAccount float-right">
        <b-nav-item-dropdown id="nav7_ddown" right>
            <template slot="button-content"><b-icon-person/></template>
                <div class="content">
                    <b-dropdown-item href="#">Mijn TU</b-dropdown-item>
                    <b-dropdown-item href="#" v-on:click="logout(myAccount.id)" >{{myAccount.client}} Uitloggen</b-dropdown-item>
                </div>
        </b-nav-item-dropdown>
    </div>
</template>

<script>
import { mapGetters, mapActions }  from 'vuex';
import { BIconPerson } from 'bootstrap-vue'
    export default {
        name: 'search',
        computed: mapGetters(['myAccount']),
        components: {
            BIconPerson
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            ...mapActions(['resetAccountState']),
            logout: function (id) {
                console.log(id + 'logout');
                 this.resetAccountState();
                 this.$session.destroy()
                 this.$router.push("/");
            }
        }
}
</script>

<style scoped lang="scss">
 @import '@/css/main.scss';
.myAccount {
    top: -15px;
    position: relative;
    margin-right: 20px;
    li {
        list-style: none;
    }
    .b-icon.bi {
        font-size: 28px;
        color: $tuGreen;
        }
    .content {
        padding-left: 20px;
        font-size: 11px;
    }
}
@media (max-width: 768px){ 
    .myAccount {
        top: 15px;
        margin-right: 0px;
        right: 0px;
    }
}
</style>