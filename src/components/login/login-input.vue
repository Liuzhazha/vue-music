<template>
	<div class="login-row">
		<div class="input-row">
			<span>账号</span>
			<input type="text" v-model="userName" name="">
		</div>
		<div class="input-row">
			<span>密码</span>
			<input type="password" v-model="passWord" name="">
		</div>
		<div class="login-text">
			<div>注册</div>
			<div>忘记密码?</div>
		</div>
		<div class="btn" @click="login">登录</div>

	</div>

</template>

<script>
	import { setCookie, getCookie } from 'api/cookie.js';

	export default {
		data() {
			return {
				userName: "15890289382",
				passWord: "liufengyi",
				userId: "123", //用户id 用于获取用户详情
			}
		},
		mounted() {
			if(getCookie("userId")) {
				this.$router.push({ name: 'main' });
			}
		},
		methods: {
			login: function() {
				if(this.userName == "" || this.passWord == "") {
					alert("请输入正确");
				} else {
					var _this = this;
					this.axios.get("http://39.106.114.207:443/login/cellphone", {
						params: {
							phone: this.userName, //账号
							password: this.passWord //密码
						}
					}).then((response) => {
						if(response.data.code == 502) { //502 密码错误返回
							alert("密码错误")
						} else if(response.data.code == 400) { //400账号不存在返回
							alert("账号不存在");
						} else {
							setCookie("userId", response.data.account.id, 7);
							setTimeout(function() {
								_this.$router.push({ name: 'main' });
							}, 0)
						}

					})

				}

			}
		}

	}
</script>

<style lang="scss" scoped>
	.login-row {
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25px;
		.input-row {
			margin-bottom: 10px;
			border-bottom: 1px solid #FFFFFF;
			height: 25px;
			width: 56%;
			display: flex;
			flex-direction: row;
			input {
				background: none;
				border: none;
				outline: none;
				height: 25px;
				color: #FFFFFF;
				width: 1%;
				flex: 1;
			}
			span {
				margin-left: 10px;
				margin-right: 10px;
				color: #FFFFFF;
			}
		}
		.btn {
			box-shadow: 0px 0px 8px #b130d2;
			display: block;
			width: 100px;
			height: 45px;
			color: #b130d2;
			text-align: center;
			line-height: 45px;
			background: #ffffff;
			border-radius: 45px;
		}
		.login-text {
			display: flex;
			display: -webkit-flex;
			flex-direction: row;
			justify-content: space-between;
			width: 50%;
			color: #FFFFFF;
			margin-bottom: 20px;
			div {
				font-size: 13px;
			}
		}
	}
</style>