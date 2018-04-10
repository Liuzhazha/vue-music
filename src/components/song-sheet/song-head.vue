<template>
	<div class="songHead">
		<div>
			<div @click="returnPrev"  class="Goreturn"><i class="iconfont icon-fanhui"></i></div>
			<div class="dayComment"><h1>每日推荐</h1></div>
			<div class="commentFaq"><i class="iconfont icon-wenti"></i></div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			returnPrev:function(){
				this.$router.go(-1)
			}
		},
	}
</script>

<style lang="scss" scoped>
div.songHead{
	>div{
			display: flex; flex-direction: row; justify-content: space-between; background: #B130D2; height: 44px;  align-items: center; padding: 0 15px;
		div{
			display: flex; flex-direction: row; justify-content: space-between; background: #B130D2; height: 44px;  align-items: center; margin-right: 10px;
			h1{color: #FFFFFF; font-size: 16px; font-weight: normal;  }
			i{ font-size: 18px; color: #FFFFFF; }	
			&:nth-of-type(3){ margin-left: auto; margin-right: 0;}
		}
	}
}

</style>