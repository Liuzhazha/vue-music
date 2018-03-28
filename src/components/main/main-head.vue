<template>
	<div class="headContainer">
		 <div class="search"><i class="iconfont icon-search"></i></div>
		 <div  class="recommend active">推荐  </div>
		 <div class="special">专题  </div>
		 <div class="music"><i class="iconfont icon-youyinpin"></i></div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.headContainer{
		>*{ font-family: 'PingFang SC';}
		display: flex; display: -webkit-flex; flex-direction: row; margin-left: 15px;margin-right: 15px; justify-content: space-between; height: 44px; align-items: center;
		.search{
			i{font-size: 18px;color: #FFFFFF }
		}
		.recommend{
			color: #FFFFFF;font-size: 18px;
		}
		.special{
			color: #FFFFFF;font-size: 18px;
		}
		.music{
			i{font-size: 18px; color: #FFFFFF }
		}
		>div.active{
			 color: #ffeb00; align-self:flex-end ;
			 &::after{
			 	content:' '; display: block; width: 100%; height: 3px; background: #ffeb00; margin-top: 7px;
			 }
		}
	}
</style>