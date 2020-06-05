<template>
    <div>
        <article v-for="assortment in assortments" :key="assortment.id"  v-on:click="getId(assortment.id)" class="widget-assortment col-sm-3 ">
            <div class="assortment-widget-detail">
             
                <div 
                    class="ribbon assortment" 
                    :class="assortment.color">
                  <h2 class="assortment-icon assortment-green  ">{{ assortment.title }}</h2>
                </div>
                <div class="assortment-body">
                    <figure>
                        <img :src="imageUrl + assortment.img" :alt="assortment.title">
                    </figure>
                    <div class="assortment-description">
                    </div>
                    <p class="bottom-link desktop-only">

                        <router-link :to="id +'/'+assortment.id"  class="assortment-widget-detail-link-button" >
                            <b-iconstack font-scale="1" class="icon">
                                <b-icon stacked icon="circle-fill" variant=""></b-icon>
                                <b-icon stacked icon="chevron-right" shift-h="1" scale="0.9" variant="white"></b-icon>
                            </b-iconstack>
                            {{ assortment.title}}  
                        </router-link> 
                    </p>
                </div>
               
            </div>
        </article>
    </div>
</template>

<script>
import api from '@/constants/api';
import settings from '@/constants/settings';

    export default {
        name: 'Assortment',
        data() {
            return {
                imageUrl: settings.productgroep,
                id: this.$route.params.id,
                id2: this.$route.params.id2,
                assortments: []
            }
        },
        created() {   
            this.init();
        },
        methods: {
            init(){
                this.$http.get(api.getAssortment +'?id='+this.id).then((response) => {
                    this.assortments = response.data[0].child
                    if (this.id2) { 
                        for (let _i=0 ; _i< this.assortments.length; _i++) {
                            if (this.assortments[_i].id == this.id2) {
                                this.assortments = this.assortments[_i].child
                                this.imageUrl = settings.productklassegroep;
                            }
                        }
                    }
                }).catch(function (error) {
                    console.log(error.response.status);
                });
            },
            getId: function (newId2) {
             this.id2 = newId2;
             this.init();
            }
        }
        
    }

</script>

<style scoped lang="scss">
.icon {
    margin-left: 5px;
}

article {
        float: left;
        margin-top: 20px;
        margin-right: 12px;
        text-align: left;
        padding: 0;
        max-width: 220px;
        .assortment-widget-detail {
            background: linear-gradient(to bottom,$tuWhite,$tuWhiteGray);
        }
        h2 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            text-shadow: 1px 1px #333;
            line-height: 17px;
            padding-left: 5px;
            font-weight: 700;
            color: $tuWhite;
        } 
        div.ribbon {
            margin-left: 0;
            padding-left: 7px;
            padding-top: 5px;
            padding-bottom: 5px;
            .green{
                background: $tuGreen;
            }
        }
        .assortment-description {
            color: $tuGray;
            text-decoration: none;
            font-size: 11.2px;
            padding: 5px;
            min-height: 100px;
            text-align: left;
        }
        
    .assortment-widget-detail-link-button {
        font-size: 12px;
            line-height: 30px;
    }
    
}
@media only screen and (max-width: 600px) {
    article {
        padding-left: 15px;
        padding-right: 15px;
        max-width: 100%;
    }
}
</style>
