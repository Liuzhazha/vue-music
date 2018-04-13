<template>
	<div class="mainPlay">
		<div class="fullPlay">
			<div class="bgImg"><img :src="song.album.blurPicUrl" alt="" /></div>
			<div class="cdWraper">
				<div class="cd startMove">
					<div></div>
					<img :src="song.album.blurPicUrl" alt="" />
				</div>
			</div>
		</div>

		<div class="miniPlay">
			<div class="lt"><img :src="song.album.blurPicUrl" /></div>
			<div class="ct">
				<h3>{{song.name}}</h3>
				<p>{{song.artists[0].name}}</p>
			</div>
			<div class="rt1"><i></i></div>
			<div class="rt2"></div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'song'
			])
		},
		activated() {
			console.log(this.$store)
		}
	}
</script>

<style lang="scss" scoped>
	@-moz-keyframes cdTransition{
		from{transform: rotate(0deg);transform-origin: center bottom;}
		to{transform: rotate(360deg);transform-origin: center bottom;}
	}
@keyframes cdTransition{
		from{transform: rotate(0deg);transform-origin: center bottom;}
		to{transform: rotate(360deg);transform-origin: center bottom;}
}

	div.mainPlay {
		.fullPlay {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 150;
			background: #333333;
			>div.bgImg {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
				opacity: .6;
				-webkit-filter: blur(20px);
				filter: blur(20px);
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			>div.cdWraper {
				position: relative;
				left: 10%;
				width: 80%;
				top: 0;
				.cd {
					>div {
						transform-origin: center bottom;
						-webkit-transform-origin: center bottom;
						position: absolute;
						background: url(../../assets/cdWraper.png);
						width: 100%;
						height: 200%;
						border-radius: 50%;
						background-size: 100% 100%;
					}
					img {
						display: block;
						width: 50%;
						transform: translate3d(50%, 50%, 0);
						border-radius: 50%; 
					}
				}
				.cd.startMove{
					animation: cdTransition 10s linear infinite ;
				}
			}
		}
		
		div.miniPlay {
			height: 44px;
			background: #f6f2ff;
			padding: 0 5px;
			display: flex;
			align-items: center;
			div {
				&:nth-of-type(1) {
					width: 34px;
					img {
						display: block;
						width: 100%;
					}
				}
				&:nth-of-type(2) {
					margin-left: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 34px;
					h3 {
						font-size: 13px;
						line-height: 1.5;
						font-weight: normal;
					}
					p {
						font-size: 12px;
						line-height: 1;
						color: #888888;
					}
				}
				&:nth-of-type(2) {}
			}
		}
	}
</style>