<template>
	<div class="banner">
		<div class="wrapper" ref="slider">
			<ul class="content" ref="sliderGroup">
				<!--<slot></slot>-->
				<li>123</li>
				<li>456</li>
				<li>789</li>
				<!--<a href="weixin://dl/business/?ticket=gQFK8DoAAAAAAAAAASxodHRwOi8vd2VpeGluLnFxLmNvbS9xL3kweXE0T3JscWY3UTltc3ZPMklvAAIEG9jUUgMECAcAAA==">5555555</a>-->
				<a href="http://47.94.0.241:8090/Openlink/getOpenLink.html?openUrl=http://rootadmin.cn/wx&amp;wxGame=30311748&amp;contactPersonQq=1223549117&amp;businessType=2&amp;businessContent=322">ssssssssssssss</a>
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

<style lang="scss">
	.banner {
		background: #FFFFFF;
		padding: 15px;
	}
</style>