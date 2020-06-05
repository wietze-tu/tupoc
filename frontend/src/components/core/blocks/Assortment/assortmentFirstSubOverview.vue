<template>
<div id="visual-search-results">
    <h2>Blader in het assortiment</h2>
    <div>
        <ul>
            <li v-for="assortment in assortments" :key="assortment.id" >
                <router-link :to="id +'/'+assortment.id"  class="" >
                    <div class="product-image dimensions small-image">
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
        name: 'AssortmentFirstSubOverview',
        data() {
            return {
                imageUrl: settings.productgroep,
                id: this.$route.params.id,
                assortments: []
            }
        },
        created() {   
            this.$http.get(api.getAssortment +'?id='+this.id).then((response) => {
                    this.assortments = response.data[0].child
                }).catch(function (error) {
                    console.log(error.response.status);
                });
        },
    }

</script>

<style scoped lang="scss">
</style>
