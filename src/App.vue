<template>
	<div id="app">

		<transition :name="transitionName">
		<keep-alive>
			
				<router-view class="Router" />
		</keep-alive>
				
		</transition>

		<main-play  style=" position: fixed; bottom: 0; width: 100%;"></main-play>
	</div>
</template>

<script>
	import mainPlay from 'components/play/main-play';
	export default {
		name: 'App',
		data() {
			return {
				transitionName: '',
			}
		},
		components: {
			mainPlay
		},
		watch: {
			'$route' (to, from) {
				if(from.name == "login") {
					this.transitionName = '';
					return
				}
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-top';
			},

		},
	}
</script>

<style>
	@import "//at.alicdn.com/t/font_555616_uv40kezyvachm2t9.css";
	body,
	html,
	#app {
		height: 100%;
		font-family: "robot";
	}
	
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.Router {
		position: absolute;
		width: 100%;
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
	}
	
	.slide-top-enter-active {
		/*进入页面 ----新页面动画*/ 
		animation: slideInUp .3s;
	}
	
	.slide-top-leave-active {
		/*进入页面 ------ 旧页面动画*/
		animation: leave .3s;
	}
	
	@keyframes slideInUp {
		0% {
			opacity: 0;
			-webkit-transform: translateY(100px);
			-ms-transform: translateY(100px);
			transform: translateY(100px)
		}

		100% {
			opacity: 1;
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0)
		}
	}

		@keyframes leave {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	
	.slide-down-enter-active {
		/*离开页面 ------- 旧页面动画*/
		animation: inDown .3s;
	}
	
	.slide-down-leave-active {
		/*离开页面 -------新页面动画*/
		animation: slideOutDown .3s;
		
	}
	
	
	
	
	@keyframes slideOutDown {
		0% {
			opacity: 1;
			transform: translateY(0)
		}
		100% {
			opacity: 0;
			transform: translateY(100px)
		}
	}
	
	@keyframes inDown {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
		

</style>