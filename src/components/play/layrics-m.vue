<template>
	<scroller ref="layricsSroller" height="126">
		<ul>
			<li ref="layricsLine" v-for="(line,index) in layrics.lines" :class="{current : index === currentNum }">{{line.txt}}</li>
		</ul>
	</scroller>
</template>

<script>
	export default {
		props: ['layrics', 'currentNum'],
		watch: {
			'currentNum' (num) {
				let LiHeight = this.$refs.layricsLine[0].clientHeight == 0 ? 42 : this.$refs.layricsLine[0].clientHeight;
				let moveHeight = LiHeight * (num - 1);
				this.$refs.layricsSroller.scrollTo(0, moveHeight, true);
			}
		},
	}
</script>

<style lang="scss" scoped>
	li {
		text-align: center;
		color: #888888;
		font-size: 14px;
		line-height: 3;
		&.current {
			color: #FFFFFF;
		}
	}
</style>