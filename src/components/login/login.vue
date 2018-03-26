<template>
	<!-- <img src="@/assets/logo.png"> -->
	<div class="login-container">
		<div class="login-top">
			<div class="imgrow">
				<i class="iconfont icon-music"></i>
			</div>
			<p>MUSIC</p>
		</div>
		<div class="login-center">
			<login-input></login-input>
		</div>

	</div>
</template>

<script>
	import loginInput from 'components/login/login-input'

	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				qqmusic: [],
			}
		},
		components: {
			loginInput
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.login-container {
		height: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: flex-start;
		background: url(./../../assets/login-bg.png) #4d20b9;
		background-size: 100%;
		.login-top {
			height: 45%;
			display: flex;
			display: -webkit-flex;
			flex-wrap: nowrap;
			align-items: center;
			flex-direction: column;
			justify-content: flex-end;
			.imgrow {
				margin-bottom: 22px;
				flex-shrink: 0;
				flex-grow: 0;
				width: 100%;
				text-align: center;
				i {
					font-size: 135px;
					line-height: 1;
					color: #fff;
					flex-shrink: 0;
					flex-grow: 0;
				}
			}
			p {
				font-size: 40px;
				line-height: 1;
				font-weight: 300;
				color: #fff;
			}
		}
	}
</style>
/