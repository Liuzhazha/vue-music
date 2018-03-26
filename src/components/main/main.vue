<!--登录成功主体页面-->
<template>
	<div>
		<p>登录成功</p>
		<div @click="unlogin">注销</div>
	</div>
</template>

<script>
	import { setCookie, getCookie, delCookie } from 'api/cookie.js';
	export default {
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

</style>