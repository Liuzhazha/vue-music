<template>
	<div v-if="this.currentSong.id" class="mainPlay">
		<transition :name="playTransitionName">
			<div v-show="fullScreen" class="fullPlay">
				<div class="bgImg"><img :src="currentSong.album.blurPicUrl" alt="" /></div>
				<div class="playTop">
					<div @click="setMiniScreen" class="lt"><i class="iconfont icon-fanhui"></i></div>
					<div class="ct">
						<h3>{{currentSong.name}}</h3>
						<p>{{currentSong.artists[0].name}}</p>
					</div>
				</div>

				<div class="cdWraper">
					<div class="cd" :class="{startMove : !playing}">
						<div></div>
						<img :src="currentSong.album.blurPicUrl" alt="" />
					</div>

				</div>
				<audio ref="audio" :src="'http://music.163.com/song/media/outer/url?id='+currentSong.id+'.mp3'" @canplay="ready" @error="error" @timeupdate="updateTime"></audio>
				<div class="timeLine">
					<div class="container">
						<div class="alreadyTime">{{ currentTime | lineTime}}</div>
						<div class="line">
							<div ref="alreadyLine" class="alreadyLine"></div>
						</div>
						<div class="allTime">{{currentSong.hMusic.playTime / 1000 | lineTime }}</div>
					</div>
				</div>

				<div class="btIcon">
					<div class="iconRow">
						<i class="iconfont icon-liebiaoxunhuan"></i>
						<div @click="prev">
							<icon-prev></icon-prev>
						</div>
						<div @click=" stopPlaying" v-show="playing">
							<icon-stop></icon-stop>
						</div>
						<div @click="startPlaying" v-show="!playing">
							<icon-video @click="startPlaying"></icon-video>
						</div>
						<div @click="next">
							<icon-next></icon-next>
						</div>
						<icon-list></icon-list>
					</div>
				</div>

			</div>
		</transition>

		<div @click="setFullscreen" class="miniPlay">
			<div class="lt"><img :src="currentSong.album.blurPicUrl" /></div>
			<div class="ct">
				<h3>{{currentSong.name}}</h3>
				<p>{{currentSong.artists[0].name}}</p>
			</div>
			<div class="rt1"><i></i></div>
			<div class="rt2"></div>
		</div>

	</div>
</template>

<script>
	var first_C = 0;
	document.onclick = () => {
		if(first_C == 0) {
			setTimeout(() => {
				if(document.getElementsByTagName("audio")[0]) {
					document.getElementsByTagName("audio")[0].play();
					document.getElementsByTagName("audio")[0].pause();
					first_C = 1;
				}
			}, 0)
		}

	}

	import { mapGetters, mapMutations } from 'vuex'
	import iconStop from 'common/svg/icon-stop'
	import iconVideo from 'common/svg/icon-video'
	import iconPrev from 'common/svg/icon-prev'
	import iconNext from 'common/svg/icon-next'
	import iconList from 'common/svg/icon-list'

	export default {
		components: {
			iconStop,
			iconVideo,
			iconPrev,
			iconNext,
			iconList
		},
		data() {
			return {
				songReady: false,
				playTransitionName: '',
				currentTime: 0, //当前时间
			}
		},
		computed: {
			...mapGetters([
				'song',
				'playing',
				'fullScreen',
				'currentSong',
				'currentIndex',
				'playList'

			]),
			percent(){
				return (100- parseInt(this.currentTime / (this.currentSong.hMusic.playTime / 1000) *100)) + '%';
			}
		},
		activated() {
			//						console.log(this.currentSong)
		},
		created() {
//			console.log(this.currentSong)
		},
		methods: {
			...mapMutations({
				setPlaying: 'SET_PLAYING_STATE',
				setFullScreen: 'SET_FULL_SCREEN',
				setCurrentIndex: 'SET_CURRENT_INDEX',

			}),
			setFullscreen() {
				this.setFullScreen(true)
			},
			setMiniScreen() {
				this.setFullScreen(false)
			},
			startPlaying() {
				this.setPlaying(true);
				const _audio = document.getElementsByTagName("audio")[0];
				_audio.play();
			},
			stopPlaying() {
				this.setPlaying(false)
			},
			next() {
				let index = this.currentIndex + 1
				if(index > this.playList.length - 1) {
					index = this.playList.length - 1;
				}
				this.setCurrentIndex(index)
				this.songReady = false;
			},
			prev() {
				let index = this.currentIndex - 1
				if(index < 0) {
					index = 0
				}
				this.setCurrentIndex(index)
				this.songReady = false;
			},
			ready() {
				this.songReady = true
			},
			error() {

			},
			updateTime(e) {
				this.currentTime = this.$refs.audio.currentTime;
				this.$refs.alreadyLine.style.transform = 'translateX( -'+this.percent +')';
				console.log(this.$refs.alreadyLine)
			},
		},
		watch: {
			'fullScreen' (e) {
				//e
				//true代表打开动画
				//否则是关闭
				this.playTransitionName = e ? 'slide-top' : 'slide-down';
			},
			'currentSong' () {
				let _this = this
				setTimeout(() => {
					_this.startPlaying()
				}, 0)
			},
			'playing' (playing) {
				const _audio = this.$refs.audio;
				this.$nextTick(() => {
					playing ? _audio.play() : _audio.pause()
				})

			},
			'$route' (to, from) { //返回缩小播放器
				let _from = from.fullPath
				if(this.fullScreen) {
					this.$router.push({
						path: _from
					});
					this.setFullScreen(false)
				}
			}
		},
		filters: {
			lineTime: function(value) {
				if(!value) {
					return ' 00:00'
				}
				var s = parseInt(value) % 60;
				var m = parseInt(value / 60);
				if(s < 10) {
					s = '0' + s;
				}
				if(m < 10) {
					m = '0' + m
				}
				return m + ':' + s;
			},
		},
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
					animation: cdTransition 10s linear infinite;
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
					animation-play-state: paused;
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
					align-items: center;
					width: calc(100% - 30px);
					margin: 0 auto;
					i {
						color: #fff;
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
			.timeLine {
				height: 20px;
				bottom: 80px;
				position: absolute;
				width: 100%;
				left: 0;
				.container {
					display: flex;
					height: 20px;
					align-items: center;
					.alreadyTime {
						width: 55px;
						text-align: center;
						font-size: 12px;
						color: #cecece;
					}
					.allTime {
						width: 55px;
						text-align: center;
						font-size: 12px;
						color: #cecece;
					}
					.line {
						height: 2px;
						background: #E3E3E3;
						width: 100%;
						overflow: hidden;
						.alreadyLine {
							transition: all .2s;
							width: 100%;
							background: #B130D2;
							height: 2px;
							transform: translateX(-100%);
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