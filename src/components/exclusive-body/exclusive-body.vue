<template>
	<div class="exclusiveBody">
		<svg width="300" height="300">
			<rect x="3" y="3" width="80" height="60"></rect>
			<line x1="43" y1="3" x2="43" y2="63"></line>
		</svg>
		<div  @click="showAnimate">点我</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	methods:{
		showAnimate(){
			
		}
	},
	}
</script>

<style lang="scss" scoped>
	.exclusiveBody {
		height: 100%;
		background: #333;
		svg {
			stroke: #f00;
			stroke-width: 5;
			stroke-linecap: round;
			stroke-linejoin: round;
			fill: none;
		}
	}
</style>