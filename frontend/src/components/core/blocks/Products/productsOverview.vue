<template>
    <div id="products">
        <h5>products</h5>
         {{ $route.params.id }}
         <div v-for="product in productlist" :key="product.id" class="tile-product small compare" id="scroll-to-4772006" :data-id="product.id">
            <div class="col-sm-2">
                image placeholder
            </div>
            <div class="col-sm-6 products">
                <h6>
                    {{ product.product_title }} | {{product.product_number}}
                    </h6>
                <p>
                    Artikelnummer TU: {{ product.article_number }}
                </p>
                <p>
                    Artikelcode leverancier: {{ product.article_code }}
                </p>
            </div>
            <div class="col-sm-4">price placeholder
            </div>
         </div>
        <div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import api from '@/constants/api';
 export default {
        name: 'products',
        data() {
            return {
                cat: this.$route.params.id,
                productlist: []
            }
        },
        computed: mapGetters(['products']),
        created() {
            console.log(this.cat);
            console.log(api.getProducts)
            this.$http.get(api.getProducts +'?category='+this.cat).then((response) => {
                this.productlist = response.data
            }).catch(function (error) {
                console.log(error.response.status);
            });
        }
 };

</script>

<style scoped lang="scss">
.tile-product > div {
    float: left;
    min-height: 90px;
}
.products {
    font-size: 11px;
    line-height: 15px;
    text-align: left;
    h6 {
        color: $tuGreen;
    }
    p {
        margin-bottom: 0;
    }
     div {
        float: left;
    }
}

</style>