<template>
	<div class="loader-inner line-scale-pulse-out">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        
</template>

<script>
</script>

<style>
	@-webkit-keyframes line-scale-pulse-out {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

@keyframes line-scale-pulse-out {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

.line-scale-pulse-out {
		margin: 40px auto; width: 40px;
}
.line-scale-pulse-out > div {
  background-color: #B130D2;
  width: 3px;
  height: 20px;
  border-radius: 2px;
  margin:0 auto;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
          animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); }
          
  .line-scale-pulse-out > div:nth-child(2), .line-scale-pulse-out > div:nth-child(4) {
    -webkit-animation-delay: -0.4s !important;
            animation-delay: -0.4s !important; }
  .line-scale-pulse-out > div:nth-child(1), .line-scale-pulse-out > div:nth-child(5) {
    -webkit-animation-delay: -0.2s !important;
            animation-delay: -0.2s !important; }

	
</style>