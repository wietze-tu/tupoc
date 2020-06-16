<template>
<article id="assortment">
    <h3 class="section-header">{{globalAssortment}} bij de technischeunie</h3>
    <div id="visual-search-results" class="row ">
        <div>
            <h2>Blader in het assortiment</h2>
            <ul>
                <li v-for="assortment in assortments" :key="assortment.id"  >
                    <router-link v-if="assortment.child" :to="linkUrl +'/'+ assortment.id" >
                        <div class="product-image dimensions small-image">
                            <a class="assortment-icon" :class="color" :title="globalAssortment"></a>
                            <figure>
                                <img :src="imageUrl + assortment.img" :alt="assortment.title">
                                <figcaption class="overlay">
                                    <div >{{ assortment.title }}</div>
                                </figcaption>
                            </figure>
                        </div>
                    </router-link>
                    <router-link v-else :to="'/products/'+ assortment.id"  >
                        <div class="product-image dimensions small-image">
                            <a class="assortment-icon" :class="color" :title="globalAssortment"></a>
                            <figure>
                                <img :src="imageUrl + assortment.img" :alt="assortment.title">
                                <figcaption class="overlay">
                                    <div >{{ assortment.title }}</div>
                                </figcaption>
                            </figure>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
    <div id="assortmentIntro" class="row">
        <p v-html="assortmentText"></p>
    </div>
</article>
</template>

<script>
import api from '@/constants/api';
import settings from '@/constants/settings';
import example from '@/constants/exampleText';

    export default {
        name: 'Assortment',
        data() {
            return {
                linkUrl:  './',
                imageUrl: '',
                id: false,
                id2: false,
                id3: false,
                assortments: [],
                assortmentText: ''
              
            }
        },
        created() {   
            this.init();
        },
        methods: {
            init(){
                this.id = this.$route.params.id;
                this.id2 = this.$route.params.id2;
                this.id3 = this.$route.params.id3;

                this.$http.get(api.getAssortment +'?id='+this.id).then((response) => {
                    this.color = response.data[0].color;
                    this.globalAssortment = response.data[0].title;
                    this.assortments = response.data[0].child;                 
                    this.length = response.data[0].child.length;
                    this.imageUrl = settings.productgroep;
                    this.linkUrl = './'+this.id;
                    this.greet(this.color);
                    if (this.id2) { 
                        for (let _i=0 ; _i< this.assortments.length; _i++) {                          
                            if (this.assortments[_i].id == this.id2) {
                                this.assortments = this.assortments[_i].child;
                                this.imageUrl = settings.productklassegroep;
                                this.linkUrl = './'+this.id2; 
                            }
                        }
                    }
                   if (this.id3) { 
                        for (let _i=0 ; _i < this.assortments.length; _i++) {
                            if (this.assortments[_i].id == this.id3) {
                                this.imageUrl = settings.productklasse;
                                this.linkUrl = './'+this.id3;
                                 this.assortments = this.assortments[_i].child;
                            }
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            greet: function(event) {

                switch (event) {
                    case 'orange':
                        this.assortmentText =  example.assortmentTextOrange;
                        break;
                    case 'red': 
                        this.assortmentText =  example.assortmentTextRed;
                        break;
                    case 'green':
                        this.assortmentText =  example.assortmentTextGreen;
                        break;
                   
                }
            }
        },
        watch: {
             $route (){
                this.init();
            }
        }

        
    }

</script>

<style scoped lang="scss">
article#assortment {
    margin-top: 50px;
}
h3.section-header {
    font-size: 16.8px;
    text-align: left;
    color: $tuGreen;
    border: 1px solid $tuGrayBasic;
    line-height: 35px;
    padding: 10px;
    background: linear-gradient($tuWhite,$tuWhite,$tuWhiteGray);
    background: -webkit-linear-gradient($tuWhite,$tuWhite,$tuWhiteGray);
    background: -o-linear-gradient($tuWhite,$tuWhite,$tuWhiteGray);
    background: -moz-linear-gradient($tuWhite,$tuWhite,$tuWhiteGray);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=$tuWhite,endColorstr=$tuWhiteGray,GradientType=0);
    &:first-letter{
    text-transform: capitalize
    }
}
#assortmentIntro.row {
    text-align: left;
    ul {
        li {
            list-style: circle;
            padding-left: 0px;
        }
    }
   
    p {
        font-size: 11px;
        line-height: 14.5px;
        strong  {
            font-size: 11px !important;
            font-weight: bold;
            color: red !important;
            margin-bottom: 0;
        }
    }
    ul {
        li {
            list-style: circle;
            padding-left: 0px;
        }
    }
}

</style>
