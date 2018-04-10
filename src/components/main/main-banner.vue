<template>
	<swiper>
		<swiper-slide v-if="bannerSrc" v-for="(img, index) in bannerSrc" :key="index"><img :src="img.pic" alt="" /></swiper-slide>
	</swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { hasClass, addClass } from 'api/className.js';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {

			}
		},
		props: ['bannerSrc'],
		components: {
			swiper,
			swiperSlide
		},
		mounted() {
			setTimeout(() => {}, 20)
		},
		methods: {
			_initSlider() {

			}
		}

	}
</script>

<style lang="scss">
	.banner-wraper {
		border-bottom: 1px solid #e3e3e3;
		.swiper-container {
			border-radius: 5px;
			overflow: hidden;
			img {
				display: block;
				width: 100%;
			}
			box-shadow : 0px 3px 13px rgba(124, 45, 206, .49);
		}
	}
</style>