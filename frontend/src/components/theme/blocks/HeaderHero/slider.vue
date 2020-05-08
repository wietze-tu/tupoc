<template>
     <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        img-width="2300"
        img-height="200"
        v-model="slide"
      >
        <b-carousel-slide
        content-visible-up = "sm"
        v-for="item in carouselItems"
        :key="item.id"
        :caption="item.text"
        :img-src="item.image"
      ></b-carousel-slide>
      </b-carousel>
    </div>
</template>

<script lang="ts">
export default  {
    name: 'slider',
    data() {
        return {
            carouselItems: [
            {
            id: 1,
            image: "https://www.technischeunie.nl/images/content/home/public/industrie.jpg",
            text: ""
            },
            {
            id: 2,
            image: "https://www.technischeunie.nl/images/content/home/public/installateur.jpg",
            text: ""
            },
            {
            id: 3,
            image: "https://www.technischeunie.nl/images/content/home/public/installatiebedrijf.jpg",
            text: "USP text"
            }
        ],
        slide: 0,
        sliding: null

        }
    }

}
</script>


<style scoped lang="scss">
@import '@/css/main.scss';

    h3 {
        line-height: 2.7em;
        font-size: 1.3em;
        margin-left: 10px;
        text-shadow: 1px 1px 2px $tuWhiteGray;
    }

 
</style>