<template>  
  <div class="width95 my-2">   
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/NavBar.vue'
export default {  
  components: {
    Navbar,   
  },
  data(){    
    return {      
    }
  },
}
</script>

<style> 
  .BG{
    position: fixed;
    top:0;
    left:0;
  }   
 .__layout{
   width: 100% !important; 
 }
 .container{
  min-height: 100vh;
  width: 95%; 
  padding:0; 
 }
 
</style>


