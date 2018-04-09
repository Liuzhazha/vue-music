<template>
	<div class="commetSong">
		<ul>
			 <router-link v-for="song in commentSong" tag='li'   :to="'/main/song-sheet/'+song.id" >
				<img :src="song.coverImgUrl" alt="" /><div class="btrow"><h4>{{song.name}}</h4></div> 
				</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['commentSong'],
		
	}
</script>

<style lang="scss" scoped>
div{
	ul{
		display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap; padding: 0 15px;
		li{
			width:calc(50% - 10px); margin-top: 10px;
			img{
				display: block; width: 100%; border-radius: 5px; 
			}
				div{
					margin-top: 10px;
				h4{ font-size: 12px;font-weight: normal; }
			}
		}
	}
}
</style>