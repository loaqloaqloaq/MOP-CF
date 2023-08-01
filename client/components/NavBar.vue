<template>
  <div class="navbar" id='nav'>
      <b-row class="w-100 h-100 px-lg-5 px-3" no-gutters align-h="between">
        <b-col cols=auto class="h-100 d-flex justify-content-center align-items-center">
          <img src="~/assets/svg/Material v3.6_00-Header-Logo.svg" class="logo">
        </b-col>
        <b-col cols=auto class="h-100 d-flex justify-content-center align-items-center">
          <b-row class="h-100 d-none d-lg-flex" no-gutters>
            <b-col cols=3 class="h-100 d-flex justify-content-center align-items-center px-3 logoC" @click="goto('fb')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-FB.svg" class="logo" >
            </b-col>
            <b-col cols=3 class="h-100 d-flex justify-content-center align-items-center px-3 logoC" @click="goto('yt')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-YT.svg" class="logo" >
            </b-col>
            <b-col cols=3 class="h-100 d-flex justify-content-center align-items-center px-3 logoC" @click="goto('tw')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-TW.svg" class="logo" >
            </b-col>
            <b-col cols=3 class="h-100 d-flex justify-content-center align-items-center px-3 logoC" @click="goto('dc')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-DC.svg" class="logo" >
            </b-col>
          </b-row>
          <i class="fa-solid fa-bars d-block d-lg-none text-center pr-2" style="color:white;" @click="showMenu=!showMenu"></i>
        </b-col>
      </b-row>
      <div class="sidebar-backdrop" @click="showMenu=false;" v-if="showMenu"></div>
      <transition name="slide">
        <div v-if="showMenu"  class="sidebar-panel pl-4">
          <b-row class="w-100" no-gutters>
            <b-col cols=12 class="h-100 d-flex justify-content-start align-items-center py-4 smLogoC" @click="goto('fb')" >
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-FB.svg" class="smLogo mr-3" >Mic On Project
            </b-col>
            <b-col cols=12 class="h-100 d-flex justify-content-start align-items-center py-4 smLogoC" @click="goto('yt')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-YT.svg" class="smLogo mr-3" >Mic On Project【Official】
            </b-col>
            <b-col cols=12 class="h-100 d-flex justify-content-start align-items-center py-4 smLogoC" @click="goto('tw')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-TW.svg" class="smLogo mr-3" >@miconproject
            </b-col>
            <b-col cols=12 class="h-100 d-flex justify-content-start align-items-center py-4 smLogoC" @click="goto('dc')">
              <img src="~/assets/svg/Material v3.6_00-Header-Icon-DC.svg" class="smLogo mr-3" >Mic On Project 官方 Server
            </b-col>         
          </b-row> 
        </div>
      </transition>
  </div>
</template>

<script>
export default {    
  data(){    
    return {    
     showMenu:false,
    hover:{
      yt:false,
      fb:false,
      tw:false,
      dc:false
    }
    } 
  },
  methods:{
    goto(sns){
      var links={
        dc:'https://discord.gg/4AFXAWBjWw',
        tw:'https://twitter.com/miconproject',
        yt:'https://www.youtube.com/channel/UCz1HT4pcoYorlvOZ22Q1yew',
        fb:this.$device.isDesktop?'https://www.facebook.com/Miconproject':'fb://profile/100063723505795',
      }
      if(process.browser){
        window.open(links[sns], '_blank').focus();
      }
    },
  }
}
</script>

<style scoped>
 .navbar{
    width:100vw;
    height:60px;
    background-image: url('\assets\svg\Material v3.6_00-Header-BG.svg');
    position: sticky;
    top: 0;
    z-index: 10;
    transition:  0.5s;
    background:#222222;
 } 
 .logo{
  height:65%;
 }
 .smLogo{
  width:40px;
 }
 .logoC,.smLogoC{
  transition: 0.2s;
  cursor:pointer;
 }
 .logoC:hover , .smLogoC:hover{
  transform: scale(1.2);
 }
.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
}
.sidebar-panel {
  overflow-y: auto;
  color:white;
  background-color: #222222;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
 .slide-enter-active,
  .slide-leave-active
  {
      transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
      transform: translateX(100%);
      transition: all 150ms ease-in 0s
  }
</style>


