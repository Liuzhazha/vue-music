<template>
	<div class="main">
		<song-head></song-head>
		<scroller class="scroolerH" style="top: 44px;bottom: 44px;">
			<loader v-show="isLoading"></loader>
			<song-list-temp v-if="!isLoading" :songList="songList"></song-list-temp>
		</scroller>

	</div>
</template>

<script>
	import songHead from 'components/song-sheet/song-head'
	import songListTemp from 'components/song-sheet/song-list'
	import loader from 'components/public-temp/loader'

	export default {
		components: {
			songHead,
			songListTemp,
			loader
		},
		data() {
			return {
				isLoading: true,
				songList: [],
			}
		},
		mounted() {
			this.getSong()
		},
		activated() {
			this.getSong();
		},
		methods: {
			getSong: function() {
				this.isLoading = true;
				var _this = this;
				this.axios.get('http://39.106.114.207:443/playlist/detail', {
					params: {
						id: _this.$route.params.id
					}
				}).then((res) => {
					_this.songList = res.data.result.tracks
					_this.isLoading = false;
				})
			},
		},
	}
</script>

<style scoped>
	.scroolerH {
		height: calc(100% - 88px) !important;
	}
	
	.main {
		height: 100%;
		background: #FFFFFF;
	}
</style>