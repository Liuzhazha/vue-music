<template>
	<div>
		<ul>
			<router-link tag='li' to="/main/exclusiveBody">
				<img src="../../assets/privateFM.png"/>
				<p>私人FM</p>
				<div class="mask"></div>
			</router-link>
			
			<router-link tag='li' to="/main/exclusiveBody">
				<img src="../../assets/recommend.png"/>
				<p>每日推荐</p>
				<div class="mask"></div>
			</router-link>
			
			<router-link tag='li' to="/main/exclusiveBody">
				<img src="../../assets/privateFM.png"/>
				<p>歌单</p>
				<div class="mask"></div>
			</router-link>
			
			<router-link tag='li' to="/main/exclusiveBody">
				<img src="../../assets/privateFM.png"/>
				<p>排行榜</p>
				<div class="mask"></div>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	div>ul{
 		border-bottom: 1px solid #e3e3e3; padding-bottom: 10px;
		padding-left: 15px; padding-right: 15px;
		display: flex; flex-direction: row; justify-content: space-between;
		li{
			position: relative;
			width: 68px;background: #FFFFFF;border-radius: 5px;  
			img{ display: block; width: 100%;}
			p{
				position: relative; font-size: 11px;
				 display: block; height: 23px; line-height: 23px; text-align: center; color:#333333; z-index:2; background: #FFFFFF; z-index: 2;
			}
			.mask{
					content: ""; display: block; height: 2px; margin-top: -3px; width: calc(100% - 12px);margin-left: 6px; box-shadow:   0px 3px  10px rgba(124,45,206,.6);  z-index: 1; position: absolute;
				}
		}
	}
</style>