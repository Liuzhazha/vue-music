<template>
	 <swiper>
	   <swiper-slide v-if="bannerSrc" v-for="img in bannerSrc" ><img :src="img.pic" alt="" /></swiper-slide>     
 	 </swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { hasClass, addClass } from 'api/className.js';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data(){
			return{
 
			}
		},
		props:['bannerSrc'],
 		 components: {  
	      swiper,  
	      swiperSlide  
	    }, 
		mounted() {
			setTimeout(() => {

			}, 20)
		},
		methods: {
			_initSlider() {
				 
			}
		}

	}
</script>

<style lang="scss" scoped>
 .banner-wraper{
 	img{
 		display: block; width: 100%;border-radius: 5px;
 	}
 }
</style>