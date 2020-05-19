<template>
    <div>
        <article v-for="assortment in assortments" :key="assortment.id" class="widget-assortment col-sm-3 ">
            <div class="assortment-widget-detail">
              <a class="assortment-widget-detail-link" href="#">
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
                        <router-link v-bind:to="assortment.url"  class="assortment-widget-detail-link" >                       
                        </router-link> 
                        <router-link v-bind:to="'products/'+assortment.id"  class="assortment-widget-detail-link" >
                            {{ assortment.title}}  
                        </router-link>    
                    </p>
                </div>
                </a>
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

article {
        float: left;
        margin-top: 20px;
        text-align: left;
        .assortment-widget-detail {
            background: linear-gradient(to bottom,#fff,#ededed);
        }
        h2 {
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
        .assortment-body {
            figure {
                img {
                    width: 100%;
                }
            }
        }
        .green{
            background: $tuGreen;
            }
        .red {
            background: $tuRed;
        }
        .blue {
            background: $tuBlue;
        }
        .aqua {
            background: $tuAqua;
        }
    :hover {
        text-decoration: none;
    }
    
}
</style>