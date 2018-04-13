<template>
	<div class="mainPlay">
		<transition :name="playTransitionName">
			<div v-show="fullScreen" class="fullPlay">
				<div class="bgImg"><img :src="song.album.blurPicUrl" alt="" /></div>
				<div class="playTop">
					<div @click="setMiniScreen" class="lt"><i class="iconfont icon-fanhui"></i></div>
					<div class="ct">
						<h3>{{song.name}}</h3>
						<p>{{song.artists[0].name}}</p>
					</div>
				</div>

				<div class="cdWraper">
					<div class="cd" :class="{startMove : playing}">
						<div></div>
						<img :src="song.album.blurPicUrl" alt="" />
					</div>
				</div>

				<div class="btIcon">
					<div class="iconRow">
						<i class="iconfont icon-liebiaoxunhuan"></i>
						<i class="iconfont icon-shangyishou-yuanshijituantubiao"></i>
						<i class="iconfont icon-bofang-yuanshijituantubiao"></i>
						<i class="iconfont icon-xiayishou-yuanshijituantubiao"></i>
						<i class="iconfont icon-liebiao"></i>
					</div>
				</div>

			</div>
		</transition>

		<div @click="setFullscreen" class="miniPlay">
			<div class="lt"><img :src="song.album.blurPicUrl" /></div>
			<div class="ct">
				<h3>{{song.name}}</h3>
				<p>{{song.artists[0].name}}</p>
			</div>
			<div class="rt1"><i></i></div>
			<div class="rt2"></div>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				playTransitionName: '',
			}
		},
		computed: {
			...mapGetters([
				'song',
				'playing',
				'fullScreen',
			])
		},
		activated() {
			console.log(this.fullScreen)
		},
		created() {
			console.log(this.fullScreen)
		},
		methods: {
			...mapMutations({
				setPlaying: 'SET_PLAYING_STATE',
				setFullScreen: 'SET_FULL_SCREEN',

			}),
			setFullscreen() {
				this.setFullScreen(true)
				console.log(this.fullScreen)

			},
			setMiniScreen() {
				this.setFullScreen(false)
				console.log(this.fullScreen)
			},
		},
		watch: {
			'fullScreen' (e) {
				//e
				//true代表打开动画
				//否则是关闭
				this.playTransitionName = e ? 'slide-top' : 'slide-down';
			}
		}
	}
</script>

<style lang="scss" scoped>
	@-moz-keyframes cdTransition {
		from {
			transform: rotate(0deg);
			transform-origin: center bottom;
		}
		to {
			transform: rotate(360deg);
			transform-origin: center bottom;
		}
	}
	
	@keyframes cdTransition {
		from {
			transform: rotate(0deg);
			transform-origin: center bottom;
		}
		to {
			transform: rotate(360deg);
			transform-origin: center bottom;
		}
	}
	
	div.mainPlay {
		.fullPlay {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 150;
			background: #333333;
			>div.bgImg {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
				opacity: .6;
				-webkit-filter: blur(20px);
				filter: blur(20px);
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			>div.cdWraper {
				position: relative;
				left: 15%;
				width: 70%;
				top: 0;
				.cd {
					>div {
						transform-origin: center bottom;
						-webkit-transform-origin: center bottom;
						position: absolute;
						background: url(../../assets/cdWraper.png);
						width: 100%;
						height: 200%;
						border-radius: 50%;
						background-size: 100% 100%;
					}
					img {
						display: block;
						width: 50%;
						transform: translate3d(50%, 50%, 0);
						border-radius: 50%;
					}
				}
				.cd.startMove {
					animation: cdTransition 10s linear infinite;
				}
			}
			.playTop {
				position: relative;
				top: 0;
				left: 0;
				height: 44px;
				margin-bottom: 60px;
				display: flex;
				flex-direction: row;
				align-items: center;
				div.lt {
					padding-top: 20px;
					width: 44px;
					text-align: center;
					i {
						font-size: 20px;
						color: #FFFFFF;
					}
				}
				div.ct {
					position: relative;
					&:after {
						display: block;
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 1px;
						background: #FFFFFF;
						content: ' ';
						transform: scale(1, 0.5);
					}
					width: calc(100% - 88px);
					flex-shrink: 0;
					flex-grow: 0;
					&:before {
						content: "";
						display: table-cell;
					}
					margin-top: 20px;
					h3 {
						font-size: 14px;
						color: #FFFFFF;
						font-weight: normal;
					}
					p {
						padding-bottom: 5px;
						font-size: 12px;
						color: #FFFFFF;
					}
				}
			}
			.btIcon {
				position: absolute;
				width: 100%;
				bottom: 0;
				height: 70px;
				div.iconRow {
					height: 60px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items:center;
					width:calc(100% - 30px);
					margin:0 auto;
					i {
						color:#fff;
						&:nth-of-type(1) {
							font-size: 25px;
						}
						&:nth-of-type(2) {
							font-size: 40px;
						}
						&:nth-of-type(3) {
							font-size: 50px;
						}
						&:nth-of-type(4) {
							font-size: 40px;
						}
						&:nth-of-type(5) {
							font-size: 25px;
						}
					}
				}
			}
		}
		div.miniPlay {
			height: 44px;
			background: #f6f2ff;
			padding: 0 5px;
			display: flex;
			align-items: center;
			div {
				&:nth-of-type(1) {
					width: 34px;
					img {
						display: block;
						width: 100%;
					}
				}
				&:nth-of-type(2) {
					margin-left: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 34px;
					h3 {
						font-size: 13px;
						line-height: 1.5;
						font-weight: normal;
					}
					p {
						font-size: 12px;
						line-height: 1;
						color: #888888;
					}
				}
				&:nth-of-type(2) {}
			}
		}
	}
</style>