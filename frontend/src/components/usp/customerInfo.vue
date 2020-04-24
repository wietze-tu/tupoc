<template>
    <div class="welcome">

        <ul>
            <li class="welcomePersonal">
                <section>
                    <div class="personal-details org-details">
                        {{myAccount.name}} {{myAccount.client}}
                    </div>
                    <div class="personal-details name-details">
                        {{myAccount.company}}
                    </div>
                </section>
            </li>
        </ul>
        
    </div>
</template>

<script>
import { mapGetters, mapActions }  from 'vuex';

export default  {
    name: 'customerInfo',
    computed: mapGetters(['myAccount']),
    methods: {
        ...mapActions(['fetchClient'])
        
    },
    data() {
        return {

        }
    },
    created() {
       if(this.$session.get('client')) {
         this.fetchClient(this.$session.get('client'));
        }
    }

}
</script>


<style scoped lang="scss">
@import '../../color.scss';
.welcome ul {
    margin-bottom: 0;
    li {
        margin: -14px 0 0 5px;
        max-height: 36px;
        font-size: 11.2px;
    }    
    li.welcomePersonal {
        margin: 4px 0 0 5px;
        overflow: hidden;
        text-align: right;
        letter-spacing: -1px;
        line-height: 1.1;
        color: $tuGrayMenu;
        max-width: 220px;
        max-height: 40px;
        float: right;
        .personal-details {
            overflow: hidden;
            white-space: nowrap;
            
        }
        .org-details {
                text-transform: uppercase;
        }
    }
}

    
</style>