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

<script lang="ts">
import { mapGetters }  from 'vuex';
import { BIconPerson } from 'bootstrap-vue'
    export default {
        name: 'search',
        computed: mapGetters(['myAccount']),
        components: {
            BIconPerson
        },
        methods: {
            logout: function (id) {
                console.log(id + 'logout');
            }
        } 
}
</script>

<style scoped lang="scss">
@import '../../../color.scss';
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

</style>