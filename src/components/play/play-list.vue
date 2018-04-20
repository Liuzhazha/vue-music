<template>
		<div class="playList">
			<ul>
				<scroller>
					<li v-for="(song,index) in sequenceList" :class="{ current : index == currentIndex   }" @click.stop="selectSong(index)"><i v-show="index == currentIndex" class="iconfont icon-laba"></i>
						<p>{{song.name}}</p> <span> - {{song.artists[0].name}}</span> <i  class="iconfont icon-close"></i></li>
				</scroller>
			</ul>
		</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'playList',
				'currentIndex',
				'sequenceList'
			])
		},
		created() {
			
		},
		methods: {
			selectSong(index) {
				this.setCurrentIndex(index)
			},
			...mapMutations({
				setCurrentIndex: 'SET_CURRENT_INDEX',
			}),
		}
	}
</script>

<style lang="scss" scoped>
	.playList {
		position: fixed;
		z-index: 160;
		height: 61.8%;
		width: 100%;
		background: #FFFFFF;
		bottom: 0;
		ul {
			height: 100%;
			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 52px;
				flex-wrap: wrap;
				i {
					font-size: 22px;
					color: #CECECE;
					margin-left: 15px;
					&:nth-of-type(2) {
						font-size: 16px;
						margin-left: auto;
						margin-right: 15px;
					}
				}
				p {
					font-size: 16px;
					margin-left: 15px;
				}
				span {
					font-size: 12px;
					color: #888888;
				}
				&:after {
					content: "";
					display: block;
					width: calc(100% - 30px);
					height: 1px;
					background: #CECECE;
					transform: scale(1, 0.5);
					margin: 0 auto;
				}
				&.current {
					i {
						&:nth-of-type(1) {
							color: #B130D2;
						}
					}
					p {
						color: #B130D2;
						margin-left: 6px;
					}
					span {
						color: #B130D2;
					}
				}
			}
		}
	}
</style>