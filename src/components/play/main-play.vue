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
						<img class="cdBg" src="../../assets/cdWraper.png" />
						<span>
							<img :src="currentSong.album.blurPicUrl" alt="" />
						</span>
					</div>
				</div>

				<audio ref="audio" :src="'http://music.163.com/song/media/outer/url?id='+currentSong.id+'.mp3'" @canplay="ready" @ended="hasEnd" @error="error" @timeupdate="updateTime"></audio>
				<div class="timeLine">
					<div class="container">
						<div class="alreadyTime">{{ currentTime | lineTime}}</div>
						<div class="line" @click="changePlayTime">
							<div ref="alreadyLine" class="alreadyLine"></div>
						</div>
						<div class="allTime">{{currentSong.hMusic.playTime / 1000 | lineTime }}</div>
					</div>
				</div>
				<div class="btIcon">
					<div class="iconRow">
						<i class="iconfont" @click="changePlayState" :class="playModeIcon"></i>
						<div @click="prev">
							<icon-prev></icon-prev>
						</div>
						<div @click=" stopPlaying" v-show="playing">
							<icon-stop></icon-stop>
						</div>
						<div @click="startPlaying" v-show="!playing">
							<icon-video></icon-video>
						</div>
						<div @click="next">
							<icon-next></icon-next>
						</div>
						<div @click.stop="listShowTrigger">
							<icon-list></icon-list>
						</div>
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
			<div @click.stop=" stopPlaying" v-show="playing">
				<icon-stop-m></icon-stop-m>
			</div>
			<div @click.stop="startPlaying" v-show="!playing">
				<icon-video-m></icon-video-m>
			</div>
			<div @click.stop="listShowTrigger">
				<icon-list-m></icon-list-m>
			</div>
		</div>

		<div @click.stop="listShowTrigger" v-show="listShow" class="mask"></div>

		<transition :name="playListTransition">
			<play-list-panel v-show="listShow"></play-list-panel>
		</transition>

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
	import iconStopM from 'common/svg/icon-stop-m'
	import iconVideo from 'common/svg/icon-video'
	import iconVideoM from 'common/svg/icon-video-m'
	import iconPrev from 'common/svg/icon-prev'
	import iconNext from 'common/svg/icon-next'
	import iconList from 'common/svg/icon-list'
	import iconListM from 'common/svg/icon-list-m'
	import playListPanel from 'components/play/play-list'
	import { playMode } from 'common/js/config'
	import { shuffle, copyAry } from 'api/util'

	export default {
		components: {
			iconStop,
			iconVideo,
			iconPrev,
			iconNext,
			iconList,
			iconVideoM,
			iconStopM,
			iconListM,
			playListPanel
		},
		data() {
			return {
				songReady: false,
				playTransitionName: '',
				currentTime: 0, //当前时间
				playListTransition: 'slide', //底部列表动画

			}
		},
		computed: {
			...mapGetters([
				'song',
				'playing',
				'fullScreen',
				'currentSong',
				'currentIndex',
				'playList',
				'listShow',
				'mode',
				'sequenceList',
			]),
			percent() {
				return(100 - parseInt(this.currentTime / (this.currentSong.hMusic.playTime / 1000) * 100)) + '%';
			},
			playModeIcon() {
				return this.mode == playMode.sequence ? 'icon-liebiaoxunhuan' : this.mode == playMode.loop ? ' icon-danquxunhuan' : 'icon-icon--'
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
				setListShow: 'SET_LIST_SHOW',
				setPlayMode: 'SET_PLAY_MODE',
				setSequenceList: 'SET_SEQUENCE_LIST',
				setPlayList: 'SET_PLAYLIST',

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
			hasEnd() {
				this.next()
			},
			updateTime(e) {
				this.currentTime = this.$refs.audio.currentTime;
				this.$refs.alreadyLine.style.transform = 'translateX( -' + this.percent + ')';
			},
			listShowTrigger() {
				this.setListShow(!this.listShow)
			},
			changePlayState() {
				const currentPlayMode = this.mode + 1;
				this.setPlayMode(currentPlayMode % 3)
				if(this.mode == playMode.random) {
					let currentId = this.currentSong.id; //之前歌曲的id
					let defaultList = copyAry(this.sequenceList) //深克隆数组
					this.setPlayList(shuffle(defaultList)); //設置新的播放順序
					let currentIndex = this.playList.findIndex( //查找之前播放歌曲id在新列表位置
						(e) => {
							return e.id == currentId
						}
					)
					this.setCurrentIndex(currentIndex)
				} else {
					let currentId = this.currentSong.id; //之前歌曲的id
					this.setPlayList(this.sequenceList) //改回正确的列表
					let currentIndex = this.playList.findIndex( //查找之前播放歌曲id在新列表位置
						(e) => {
							return e.id == currentId
						}
					)
					this.setCurrentIndex(currentIndex)
				}
			},
			changePlayTime(e){
					//时间轴总宽度
					let timeLineWidth = e.target.clientWidth;
					//点击的位置
					let moveTo = e.layerX;
					//点击位置占歌曲的百分比
					let percent = moveTo  / timeLineWidth; 
					//获取歌曲总时长
					let currentSongTime = this.currentSong.hMusic.playTime / 1000;
					//获取更改的时长
					let beforeTime = currentSongTime * percent;
					
					this.$refs.audio.currentTime = beforeTime ;
			},
		},
		watch: {
			'fullScreen' (e) {
				//e
				//true代表打开动画
				//否则是关闭
				this.playTransitionName = e ? 'slide-top' : 'slide-down';
			},
			'currentSong' (newSong, oldSong) {
				if(newSong.id == oldSong.id) {
					return
				}
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
			},
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
	@keyframes cdTransition {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
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
					position: absolute;
					>div {
						background: url(../../assets/cdWraper.png);
						width: 100%;
						height: 200%;
						border-radius: 50%;
						background-size: 100% 100%;
					}
					img.cdBg {
						display: block;
						width: 100%;
						position: relative;
					}
					span {
						position: absolute;
						display: block;
						width: 100%;
						top: 0;
						display: flex;
						height: 100%;
						align-items: center;
						justify-content: center;
						img {
							width: 50%;
							display: block;
							background: none;
							border-radius: 50%;
							height: 50%;
						}
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
				&:nth-of-type(3) {
					margin-left: auto;
				}
				&:nth-of-type(4) {
					margin-left: auto;
				}
				&:nth-of-type(5) {
					margin-left: 10px;
					margin-right: 10px;
				}
			}
		}
	}
	
	.slide-enter-active {
		animation: slideIn .3s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	
	.slide-leave-active {
		animation: slideOut .3s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	
	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateY(100%)
		}
		50% {
			opacity: 0.7;
		}
		100% {
			opacity: 1;
			transform: translateY(0)
		}
	}
	
	@keyframes slideOut {
		0% {
			opacity: 1;
			transform: translateY(0)
		}
		50% {
			opacity: 0.7;
		}
		100% {
			opacity: 0;
			transform: translateY(100%)
		}
	}
	
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .3);
		top: 0;
		left: 0;
		z-index: 159;
	}
</style>