<template>
     <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="2300"
        img-height="200"
        v-model="onliner"
      >
        <b-carousel-slide
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
            text: "De groothandel in technische installatiematerialen voor bouw, installatie en industrie"
            },
            {
            id: 2,
            image: "https://www.technischeunie.nl/images/content/home/public/installateur.jpg",
            text: "De groothandel in technische installatiematerialen voor bouw, installatie en industrie"
            },
            {
            id: 3,
            image: "https://www.technischeunie.nl/images/content/home/public/installatiebedrijf.jpg",
            text: "De groothandel in technische installatiematerialen voor bouw, installatie en industrie"
            }
        ],
        slide: 0,
        sliding: null

        }
    }

}
</script>


<style scoped lang="scss">
@import '../../color.scss';
    
</style>