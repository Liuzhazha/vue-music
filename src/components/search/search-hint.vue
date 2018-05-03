<template>
	<div class="row">
		<ul >
			<li class="search">搜索"{{searchVal}}"</li>
			<li v-for="list in hintRes.songs"  @click="choseValue(list.name)" ><i class="iconfont icon-search"></i>{{list.name}}</li>
			<li v-show="isShow">无搜索建议</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['hintRes','searchVal'],
		computed:{
			isShow(){
				return Object.keys(this.hintRes).length == 0;
			}
		},
		methods:{
			choseValue(e){
					this.$emit('choseValue',e)
			},
		}
	}
</script>

<style lang="scss" scoped>
		.row{
			position:fixed; width: 100%;  
			ul{
				width: 96%; background: #FFFFFF; margin: 0 auto;
				li{
					&.search{
						font-size: 14px; color: #007AFF; text-indent: 15px;
					}
					i{
						font-size:14px; margin: 0 10px;
					}
					height: 50px; line-height: 50px; font-size: 12px; color: #2a2a2a;
					&:after{
					 content: ""; display: block;  width: 100%; height: 1px; background: #CECECE; transform: scale(1,0.5);
					}
				}
			}
		}
</style>