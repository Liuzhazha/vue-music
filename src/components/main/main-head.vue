<template>
	<div class="headContainer">
		  
		 <router-link tag="li" to="/main/search"><div  class="search"><i class="iconfont icon-search"></i></div></router-link>
		 <div  class="recommend active">推荐  </div>
		 <div class="special">我的 </div>
		 <div class="music"><i class="iconfont icon-youyinpin"></i></div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.headContainer{
		background: #9680c4;
		>*{ font-family: 'PingFang SC';}
		display: flex; display: -webkit-flex; flex-direction: row; padding-left: 15px;padding-right: 15px; justify-content: space-between; height: 44px; align-items: center;
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