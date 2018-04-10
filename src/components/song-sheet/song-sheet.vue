<template>
	<div class="main">
		<song-head></song-head>
		<scroller :height="'82%'" style="top: 44px;bottom: 44px;">
			<loader v-show="isLoading"></loader>
			<song-list v-if="songList" :songList = "songList"></song-list>
		</scroller>

	</div>
</template>

<script>
	import songHead from 'components/song-sheet/song-head'
	import songList from 'components/song-sheet/song-list'
	import loader from 'components/public-temp/loader'

	export default {
		components: {
			songHead,songList,loader
		},
		data() {
			return {
				isLoading: true,
				songList : [],
			}
		},
		mounted() {
		var _this = this
		setTimeout(function(){_this.getSong()},0 )
		},
		methods: {
//			fetchData: function() {
//			  	this.$route.params.id
//			},
			getSong :function(){
//				if(!this.songList == []){ console.log(this.songList);return}
				var _this = this;
				this.axios.get('http://39.106.114.207:443/playlist/detail',{
					params:{
						id:_this.$route.params.id
					}
				}).then((res)=>{
					_this.songList = res.data.result.tracks
					_this.isLoading =!_this.isLoading;
				})
			}
		},
	}
</script>

<style>
	.main {
		height: 100%;
	}
</style>