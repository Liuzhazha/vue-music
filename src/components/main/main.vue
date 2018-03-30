<!--登录成功主体页面-->
<template>
	<div class="main">
		<main-head></main-head>
		<div v-if="banner.length" class="banner-wraper">
			<main-banner>
				<li v-for="img in banner"><img :src="img.pic" alt="" /></li>
			</main-banner>
		</div>
	</div>
</template>

<script>
	import { setCookie, getCookie, delCookie } from 'api/cookie.js';
	import mainHead from 'components/main/main-head';
	import mainBanner from 'components/main/main-banner';
	
	export default {
		components: {
			mainHead,mainBanner
		},
		data() {
			return {
				userName: "", //用户名
				userFace: "", //用户头像
				userId: "", //用户id 用于读取用户信息
				userDescription: "", //用户签名
				userJson: "", //用户信息json字符串  需转换	
				banner:[],//banner数据
			}
		},
		created(){
			this.userId = getCookie("userId");
			this.getBanner();
		},
		mounted(){
			
		},
		methods: {
			getBanner:function(){
				var _this = this;
				this.axios.get("http://39.106.114.207:443/banner").then((res)=>{
				_this.banner = res.data.banners;
				console.log(res.data.banners)
				})
			},
			unlogin: function() {
				delCookie("userId")
			}
		},

	}
</script>

<style>
.main{ height: 100%; background: #9680c4;}
</style>