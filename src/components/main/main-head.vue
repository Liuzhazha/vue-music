<template>
	<div class="headContainer">
		 <div class="search"><i class="iconfont icon-search"></i></div>
		 <div  class="recommend active">推荐 <div class="triangle"></div></div>
		 <div class="special">推荐 <div class="triangle"></div></div>
		 <div class="music"><i class="iconfont icon-youyinpin"></i></div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.headContainer{
		display: flex; display: -webkit-flex; flex-direction: row; margin-left: 15px;margin-right: 15px; justify-content: space-between;
		.search{
			i{font-size: 18px;}
		}
		.recommend{
			color: #FFFFFF;font-size: 18px;
			>div.triangle{
				
			}
		}
		.special{
			/*color: #FFFFFF;*/font-size: 18px;
			>div.triangle{
				
			}
		}
		.music{
			i{font-size: 18px;}
		}
		>div.active{
			 color: #B130D2;
		}
	}
</style>