<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view class="Router" />
    </transition>
  	</div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		transitionName:'',
  	}
  },
  watch:{
  	'$route' (to,from){
  			if(from.name == "login"){ this.transitionName = '';  return }
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				
				this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-top';
				console.log(this.transitionName)
  	}
  }
}
</script>

<style>
@import "//at.alicdn.com/t/font_555616_iurjeooba2md9529.css";
body,html,#app{

  height: 100%;  font-family: "robot";
}
*{ margin: 0; padding: 0;   list-style:none;}

.Router {
 position: absolute;
 width: 100%;
}

.slide-left-enter,
 .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);                
}
 .slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
 
 
 
.slide-top-enter-active {
  animation: slideInUp .3s;
}
.slide-top-leave-active {
  animation: leave .3s reverse;
}
@-webkit-keyframes slideInUp {
	0% {
		opacity: 0;
		-webkit-transform: translateY(100px);
		transform: translateY(100px)
	}
 	50%{
		opacity: 0.8;
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

@keyframes slideInUp {
	0% {
		opacity: 0.5;
		-webkit-transform: translateY(100px);
		-ms-transform: translateY(100px);
		transform: translateY(100px)
	}
	50%{
		opacity: 0.9;
	}
 
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0)
	}
}
@keyframes leave{
	0%{opacity: 1;}
	100{opacity: 0;}
}


 
 
 .slide-down-enter-active {
  animation: inDown .3s ;
}
.slide-down-leave-active {
  animation: slideOutDown .3s ;
}
@-webkit-keyframes slideOutDown {
	0% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
	50%{
		opacity: 1;
	}
	100% {
		opacity: 0;
		-webkit-transform: translateY(100px);
		transform: translateY(100px)
	}
}


@keyframes inDown{
	0%{opacity:0;}
	100{opacity: 1;}
}
 


 

</style>
