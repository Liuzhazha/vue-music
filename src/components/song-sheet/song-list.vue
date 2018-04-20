<template>
	<div>
		<ul>
			<li v-for="(song,index) in songList" @click="selectSong(index)" :class=" { current : index == currentIndex   } ">
				<div class="lt">{{index+1}}</div>
				<div class="ct">
					<h3>{{song.name}}</h3>
					<p>{{song.artists[0].name}} - {{song.album.name}}</p>
				</div>
				<div class="rt">
					<i class="iconfont icon-youcecaidan"></i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	export default {
		props: ['songList'],
		methods: {
			selectSong(index) {
				this.setPlayList(this.songList)
				this.setSequenceList(this.songList)
				this.setCurrentIndex(index)
			},
			...mapMutations({
				setPlayList: 'SET_PLAYLIST',
				setSequenceList: 'SET_SEQUENCE_LIST',
				setCurrentIndex: 'SET_CURRENT_INDEX',
			}),
		},
		computed: {
			...mapGetters([
				'currentIndex',
			])
		},
	}
</script>

<style lang="scss" scoped>
	ul {
		>li {
			&.current {
				.ct {
					h3 {
						color: #B130D2;
					}
					p {
						color: #B130D2;
					}
				}
			}
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.lt {
				width: 50px;
				text-align: center;
			}
			.ct {
				margin-right: auto;
				display: flex;
				flex-direction: column;
				width: 100%;
				justify-content: space-between;
				padding: 6px 0;
				border-bottom: 1px solid #ededed;
				h3 {
					font-size: 17px;
					font-weight: normal;
					text-align: left;
				}
				p {
					font-size: 12px;
					color: #888;
				}
			}
			.rt {
				i {
					padding: 0 15px;
				}
			}
		}
	}
</style>