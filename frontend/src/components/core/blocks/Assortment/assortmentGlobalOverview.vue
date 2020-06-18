<template>
    <div>
        <article v-for="(assortment, itemObjKey) in assortments" :key="assortment.displayValue" class="widget-assortment col-sm-3 ">
            <div class="assortment-widget-detail">
              <router-link v-bind:to="'assortment/'+assortment.displayValue"  class="assortment-widget-detail-link" >
                <div 
                    class="ribbon assortment" :class="assortment.colorCode">
                  <h2 class="assortment-icon" :class="assortment.colorCode">
                  {{ assortment.displayValue }} {{itemObjKey + 1}}</h2>
                </div>
                <div class="assortment-body">
                    <figure>
                        <img :src="assortment.image" :alt="assortment.title">
                    </figure>
                    <div class="assortment-description">
                        {{ assortment.displayValue }}
                    </div>
                    <p class="bottom-link desktop-only">

                        <router-link v-bind:to="'assortment/'+(itemObjKey + 1)"  class="assortment-widget-detail-link-button" >
                            <b-iconstack font-scale="1" class="icon">
                                <b-icon stacked icon="circle-fill" variant=""></b-icon>
                                <b-icon stacked icon="chevron-right" shift-h="1" scale="0.9" variant="white"></b-icon>
                            </b-iconstack>
                            {{ assortment.displayValue}}  
                        </router-link>    
                    </p>
                </div>
              </router-link>
            </div>
        </article>
    </div>
</template>

<script>
import api from '@/constants/api';

    export default {
       
        name: 'Assortment',
        data() {
            return {
                assortments: [],
            }
        },
        created() {
            const configHeaders = {
                "Authorization": "Bearer " + this.$session.get('token')
            };
            
            this.axios({
            url: 'http://live.ci.ocp.technischeunie.nl:80/api/categories/',
            method: "GET",
            headers: configHeaders
             })
             .then((response)=>{
                this.getMyCategories(response.data.items); 
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            async getMyCategories(items) {
                for(let _i=0; _i< items.length; _i++){
                    const url = 'http://live.ci.ocp.technischeunie.nl:80'+(items[_i].links[0].href).substring(39);
                     try {
                        await this.axios({
                            url: url,
                            method: "GET",
                            headers: this.configHeaders
                            })
                            .then((response)=>{
                                this.assortments.push(response.data)
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        
                        } catch{console.log('catch');}                  
                    }
                }
            
            }
            
        }
  


</script>

<style scoped lang="scss">
.icon {
    margin-left: 5px;
}
.assortment-icon {
            background: url(https://accept.ocp.technischeunie.nl//static/images/sprites/assortment.png) 0 0 no-repeat;
            min-height: 24px;
                &.green {
                    background-position: 0 -34px;
                }
                &.red {
                    background-position: 0 -204px;
                }
                &.aqua {
                    background-position: 0 -136px;
                }
                &.blue {
                    background-position: 0 -68px;
                }
                &.orange {
                    background-position: 0 -102px;
                }
                &.purple {
                    background-position: 0 -170px;
                }
                &.yellow {
                    background-position: 0 0px;
                }
            }
   

</style>