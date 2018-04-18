<!--登录成功主体页面-->
<template>

	<div class="main">
		<main-head></main-head>
		<scroller ref="scroller" class="scroolerH" style="top: 44px;bottom: 44px;">
			<div v-if="banner.length" class="banner-wraper">
				<main-banner :bannerSrc="banner"></main-banner>
			</div>
			<div class="exclusive">
				<!--专属打造-->
				<h3>专属打造</h3>
				<main-exclusive></main-exclusive>
			</div>
			<div class="commentSong">
				<h3>推荐歌单</h3>
				<comment-song :commentSong="commentSong">
				</comment-song>
			</div>
		</scroller>
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
			commentSong,
		},
		data() {
			return {
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
		activated() {
			var _this = this;
			setTimeout(function() {
				_this.getScroll();
			}, 20)
		},
		watch: {
			'$route': function(to, from) {
				if(to.name == 'main') {
					return
				}
				sessionStorage.setItem('main-commentH', this.$refs.scroller.getPosition().top);
			}
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
				this.axios.get("http://39.106.114.207:443/personalized").then((res) => {
					_this.commentSong = res.data.result;
				})
			},
			unlogin: function() {
				delCookie("userId")
			},
			getScroll: function() {
				var _this = this;
				this.$nextTick(() => {
					_this.$refs.scroller.scrollTo(0, sessionStorage.getItem('main-commentH'), false);
				})
			},

		},

	}
</script>

<style lang="scss" scoped>
	.scroolerH {
		height: calc(100% - 88px) !important;
	}
	
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
	
	.bottom {
		height: 44px;
		width: 100%;
	}
	
	h3 {
		font-size: 17px;
		text-align: center;
		margin: 8px 0;
		font-weight: normal;
	}
</style>