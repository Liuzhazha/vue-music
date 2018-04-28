<template>
	<div class="search">
		<div class="top">
			<i class="iconfont icon-fanhui "></i>
			<div class="inputRow"><input type="text" :value="searchVal" placeholder="123" /></div> 
		</div>
		<a href="weixin://dl/business/?ticket=t81c77f994794f31a4767ab5b1c3420ad" style="display: block; width: 500px; height: 500px;">11</a>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				searchVal:'',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		height: 100%;
		background: #FFFFFF;
	}
	
	.top {
		display: flex;
		width: 100%;
		height: 44px;
		background: #9680c4;
		flex-direction: row;
		align-items: center;
		
		i {
			display: block;
			font-size: 18px;
			width: 44px;
			text-align: center;
			color: #FFFFFF;
		}
		.inputRow {
			position: relative;
			width: calc( 100% - 74px);
			input {
				display: block;
				border: none;
				height: 30px;
				background: none;
				outline:none;
				font-size: 16px;
				font-weight: 200;
				color: #FFFFFF;
			&::-webkit-input-placeholder {
				color: #FFFFFF;
			}
			&::-webkit-input-placeholder {color: rgba(255,255,255,.6)}
			&::-moz-placeholder {color: rgba(255,255,255,.6)}
			&:-ms-input-placeholder {color: rgba(255,255,255,.6)}
			}
			
			&:after {
				position: absolute;
				content: "";
				display: table-cell;
				height: 1px;
				background: #FFFFFF;
				width: 100%;
				transform: scale(1, 0.5);
			}
		}
	}
</style>