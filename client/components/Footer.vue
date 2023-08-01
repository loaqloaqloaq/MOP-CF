<template>
  <div class="footer d-flex justify-content-center align-items-center" id='footer'>
      <b-row class="w-100 footerRow" no-gutters align-h="between">
        <b-col cols=auto class="d-flex justify-content-center align-items-center py-2">
          <img src="~/assets/svg/Material v3.6_00-Header-Logo.svg" class="logo">
        </b-col>
        <b-col cols=auto class="d-flex justify-content-center align-items-center py-2" style="">
          © 2020 Mic On Project<br>
          Website By 3s Design
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {    
  data(){    
    return {    
     
    } 
  }
}
</script>

<style scoped>
 .footer{
    width:100vw;
    height:100px;
    background-image: url('\assets\svg\Material v3.6_00-Header-BG.svg');    
    transition:  0.5s;  
    color:white;
    font-size:14px;
    background-color:#222222;  
  }  
  .footerRow{
    padding: 0 10%;
  }
  .logo{
    height:35px;
  }

  @media only screen and (max-width: 991px){
    .footer{
      height:150px;
      font-size:12px;
    }
  }
</style>


