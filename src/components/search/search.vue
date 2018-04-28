<template>
	<div class="search">
		<div class="top">
			<i class="iconfont icon-fanhui "></i>
			<div class="inputRow"><form><input type="search" v-model="searchVal" placeholder="123" /> <i @click="searchVal = ''" v-show="searchVal.length>0" class="iconfont icon-close"> </i></form></div> 
		</div>
		<div>
			<search-hint :hintRes = "hintRes"></search-hint>
		</div>
		
	</div>
</template>

<script>
	import searchHint from 'components/search/search-hint' 
	import { getHintVal } from 'api/requst';
	export default{
		components:{
		searchHint,	
		},
		data(){
			return{
				searchVal:'',
				hintRes:'',
			}
		},
		watch:{
			'searchVal'(val){
				console.log(val,getHintVal)
				getHintVal(val)
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
			form{
				display: flex;
				align-items: center;
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
			&::-webkit-search-cancel-button{
				  display: none;
				}
			}
			i{
				font-size: 12px;
			}
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