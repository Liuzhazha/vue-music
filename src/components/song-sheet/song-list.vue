<template>
	<div>
		<ul>
			<li  v-for="(song,index) in songList" @click="selectSong(index)" >
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
	import { mapMutations } from 'vuex'

	export default {
		props: ['songList'],
		methods: {
			selectSong(index) {
				this.setPlayList(this.songList)
				this.setCurrentIndex(index)
			},
			...mapMutations({
				setPlayList:'SET_PLAYLIST',
				setCurrentIndex:'SET_CURRENT_INDEX',
			}),
		},
	}
</script>

<style lang="scss" scoped>
	ul {
		>li {
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