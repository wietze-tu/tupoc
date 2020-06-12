<template>
    <div>
        <article v-for="assortment in assortments" :key="assortment.id" class="widget-assortment col-sm-3 ">
            <div class="assortment-widget-detail">
              <router-link v-bind:to="'assortment/'+assortment.id"  class="assortment-widget-detail-link" >
                <div 
                    class="ribbon assortment" 
                    :class="assortment.color">
                  <h2 class="assortment-icon assortment-green  ">{{ assortment.title }}</h2>
                </div>
                <div class="assortment-body">
                    <figure>
                        <img :src="'https://accept.ocp.technischeunie.nl/static/images/dummy/assortment/' + assortment.img" :alt="assortment.title">
                    </figure>
                    <div class="assortment-description">
                        {{ assortment.description }}
                    </div>
                    <p class="bottom-link desktop-only">

                        <router-link v-bind:to="'assortment/'+assortment.id"  class="assortment-widget-detail-link-button" >
                            <b-iconstack font-scale="1" class="icon">
                                <b-icon stacked icon="circle-fill" variant=""></b-icon>
                                <b-icon stacked icon="chevron-right" shift-h="1" scale="0.9" variant="white"></b-icon>
                            </b-iconstack>
                            {{ assortment.title}}  
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
                assortments: [] 
            }
        },
        created() {
            this.$http.get(api.getAssortment).then((response) => {
                this.assortments = response.data
            }).catch(function (error) {
                console.log(error.response.status);
            });
        }
    }

</script>

<style scoped lang="scss">
.icon {
    margin-left: 5px;
}


</style>