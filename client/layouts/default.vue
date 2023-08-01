<template>  
  <div>
    <RightBar class="d-none d-lg-block" />
    <Navbar />      
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/NavBar.vue'
import RightBar from '~/components/RightBar.vue'
import Footer from '~/components/Footer.vue'
export default {  
  components: {
    Navbar,
    Footer,
    RightBar 
  },
  data(){    
    return {      
    }
  },
}
</script>

<style>  
  body{    
    background-image: url('\assets\Background\Background_WBG.png');    
    background-color: white; /* Used if the image is unavailable */    
    background-position: center; /* Center the image */
    background-repeat: repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
      
  }   
  body *{
    font-family: 'Noto Sans TC','Noto Sans JP',sans-serif;      
  } 
  img{
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
  }
  .__layout{
    width: 100% !important; 
  }
  .container{
    min-height: 100vh;
    min-width: 100%; 
    padding:0; 
    padding-top:60px ;
    
  }
 
</style>


