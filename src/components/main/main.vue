<!--登录成功主体页面-->
<template>
	<div class="main">
		<main-head></main-head>
	</div>
</template>

<script>
	import { setCookie, getCookie, delCookie } from 'api/cookie.js';
	import mainHead from 'components/main/main-head'
	export default {
		components: {
			mainHead
		},
		data() {
			return {
				userName: "", //用户名
				userFace: "", //用户头像
				userId: "", //用户id 用于读取用户信息
				userDescription: "", //用户签名
				userJson: "", //用户信息json字符串  需转换				
			}
		},
		mounted(){
			this.userId = getCookie("userId");
		},
		methods: {
			unlogin: function() {
				delCookie("userId")
			}
		},

	}
</script>

<style>
.main{ height: 100%; background: #9680c4;}
</style>