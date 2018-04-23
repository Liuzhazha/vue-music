<template>
	<ul>
	<li v-for="(line,index) in layrics.lines" v-if="index "  :class="{current : index === currentNum }">{{line.txt}}</li>
	</ul>
</template>

<script>
	export default{
		props:['layrics','currentNum'],
	}
</script>


<style lang="scss" scoped>
	ul{
		li{
			text-align: center; color: #888888; font-size: 14px;
			&.current{
				color: #FFFFFF;
			}
		}
	}
	
</style>