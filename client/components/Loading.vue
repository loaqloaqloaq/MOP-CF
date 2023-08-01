<template>
    <div v-if="loading" id="loading-wrapper" class="vw-100 vh-100 d-flex align-content-center justify-content-center">           
        <div id="loading-content"></div>
    </div>
</template>

<script>
export default {
    props: {
        loading:{
            type:Boolean
        }
    }
}
</script>

<style scoped>
   #loading-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
}

#loading-text {
  color: #000;
  text-align: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;
}

#loading-content {
  width: 100px;
  height: 100px;
  border: 5px solid transparent;
  border-top-color: #5694ff;
  border-bottom-color: #5694ff;
  border-radius: 50%;
  -webkit-animation: loader 6s ease infinite;
  -moz-animation: loader 6s ease infinite;
  -o-animation: loader 6s ease infinite;
  animation: loader 6s ease infinite;
}

#loading-content:after {
  content: "";
  position: absolute;
  border: 3px solid #0f0;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
  border: 5px solid transparent;
  border-top-color: #42c4f8;
  border-bottom-color: #42c4f8;
  border-radius: 50%;
  -webkit-animation: loader 3s ease infinite;
  animation: loader 3s ease infinite;
  -moz-animation: loader 3s ease infinite;
  -o-animation: loader 3s ease infinite;
}

#loading-content:before {
  content: "";
  position: absolute;
  border: 3px solid #00f;
  left: 5px;
  right: 5px;
  top: 5px;
  bottom: 5px;
  border: 5px solid transparent;
  border-top-color: #ff7ee7;
  border-bottom-color: #ff7ee7;
  border-radius: 50%;
  -webkit-animation: loader 2s ease infinite;
  -moz-animation: loader 2s ease infinite;
  -o-animation: loader 2s ease infinite;
  animation: loader 2s ease infinite;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>