<template>
	<div class="banner">
		<div class="wrapper" ref="slider">
			<ul class="content" ref="sliderGroup">
				<slot></slot>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import {hasClass,addClass} from 'api/className.js';

	export default {
		name:'slide',
		props: {
			loop: {
				type: Boolean,
				default: true,
			},
			autoPlay: {
				type: Boolean,
				default: true,
			},
			interval: {
				type: Number,
				default: 3000,
			},
		},
		mounted(){
			setTimeout(()=>{
				this._setSliderWidth();
				this._initSlider();
			},20)
		},
		methods:{
			_setSliderWidth(){
				this.children = this.$refs.sliderGroup.children;
				
				let width = 0;
				let sliderWidth = this.$refs.slider.clientWidth;
					 		
			},
			_initSlider(){
				
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.banner {
		background: #FFFFFF;
		padding: 15px;
		>.wrapper{
		>ul{
			>li{
			img{ display: block; width: 100%;}
		}
		}
		}
	}
</style>