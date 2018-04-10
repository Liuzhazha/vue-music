<!--登录成功主体页面-->
<template>

		<div class="main">
			<main-head></main-head>
	<scroller  :height="'82%'"     style="top: 44px;bottom: 44px;">
			<div    v-if="banner.length" class="banner-wraper" >
				<main-banner :bannerSrc="banner"></main-banner>
			</div>
			<div   class="exclusive">
				<!--专属打造-->
				<h3>专属打造</h3>
				<main-exclusive></main-exclusive>
			</div>
			
			<div  class="commentSong">
				<h3>推荐歌单</h3>
				<comment-song :commentSong="commentSong">
				</comment-song>
			</div>
	</scroller>
			
		<div style="position: fixed; width: 100%; bottom: 0;">
			<main-head></main-head>
		</div>
		</div>

</template>

<script>
	import { setCookie, getCookie, delCookie } from 'api/cookie.js';
	import mainHead from 'components/main/main-head';
	import mainBanner from 'components/main/main-banner';
	import mainExclusive from 'components/main/main-exclusive';
	import commentSong from 'components/main/comment-song';

	export default {
		components: {
			mainHead,
			mainBanner,
			mainExclusive,
			commentSong
		},
		data() {
			return {
				userName: "", //用户名
				userFace: "", //用户头像
				userId: "", //用户id 用于读取用户信息
				userDescription: "", //用户签名
				userJson: "", //用户信息json字符串  需转换	
				banner: [], //banner数据,
				commentSong: [], //推荐歌单
			}
		},
		created() {
			this.userId = getCookie("userId");
			this.getBanner();
			this.getCommentSong();
		},
		mounted() {
			
		},
		methods: {
			getBanner: function() {
				if(!this.banner) {
					return
				}
				var _this = this;
				this.axios.get("http://39.106.114.207:443/banner").then((res) => {
					_this.banner = res.data.banners;
				})
			},
			getCommentSong: function() {
				if(!this.commentSong) {
					return
				}
				var _this = this;
				this.axios.get("http://39.106.114.207:443/top/playlist/highquality", {
					params: {
						limit: 10
					}
				}).then((res) => {
					_this.commentSong = res.data.playlists;
				})
			},
			unlogin: function() {
				delCookie("userId")
			},

			refresh: function(done) {
				var self = this
				setTimeout(function() {
					var start = self.top - 1
					for(var i = start; i > start - 10; i--) {
						self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
					}
					self.top = self.top - 10;
					done();
				}, 1500)
			},

			infinite: function(done) {
				var self = this
				setTimeout(function() {
					var start = self.bottom + 1;
					for(var i = start; i < start + 10; i++) {
						self.items.push(i + ' - keep walking, be 2 with you.');
					}
					self.bottom = self.bottom + 10;
					done();
				}, 1500)
			}

		},

	}
</script>

<style lang="scss">
	.main {
		height: 100%;
		background: #FFFFFF;
		overflow: hidden;
	}
	
	.banner-wraper {
		padding: 15px;
		margin: 0 auto;
		overflow: hidden;
	}
	.bottom{ height: 44px; width: 100%;}
	h3 {
		font-size: 17px;
		text-align: center;
		margin: 8px 0;
		font-weight: normal;
	}
</style>