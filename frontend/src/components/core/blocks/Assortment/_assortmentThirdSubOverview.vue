<template>
<div id="visual-search-results">
    <h2>Blader in het assortiment*</h2>
    <div>
        <ul>
            <li v-for="assortment in assortments" :key="assortment.id" >
                <router-link :to="id +'/'+assortment.id"  class="" >
                    <div class="product-image dimensions small-image">
                        <a class="assortment-icon" :class="color" :title="globalAssortment"></a>
                        <figure>
                            <img :src="imageUrl + assortment.img" :alt="assortment.title">
                            <figcaption class="overlay">
                                <div>{{ assortment.title }}</div>
                            </figcaption>
                        </figure>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import api from '@/constants/api';
import settings from '@/constants/settings';

    export default {
        name: 'AssortmentSecondSubOverview',
        data() {
            return {
                imageUrl: settings.productgroep,
                id: this.$route.params.id,
                id2: this.$route.params.id2,
                id3: this.$route.params.id3,
                assortments: []
            }
        },
        created() {   
            console.log(this.id+'/'+this.id2+'/'+this.id3);
            this.$http.get(api.getAssortment +'?id='+this.id).then((response) => {
                this.color = response.data[0].color;
                this.globalAssortment = response.data[0].title;
                this.assortments = response.data[0].child[0].child;
                console.log(this.assortments)
                if (this.id3) { 
                    for (let _i=0 ; _i< this.assortments.length; _i++) {
                        if (this.assortments[_i].id == this.id3) {
                            this.assortments = this.assortments[_i].child
                            this.imageUrl = settings.productklasse;
                        }
                    }
                }
            }).catch(function (error) {
                console.log(error.response.status);
            });
        },
       
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
