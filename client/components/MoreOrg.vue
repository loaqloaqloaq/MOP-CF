<template>
    <div v-if="show!=''" class="overLay" >
      <div class="overLayBackDrop"  @click="$emit('update:show', '')"  />      
      <div class="orgContent px-lg-5 py-lg-4 p-4" :class="border(show)"> 

        <div class="closeBtn" @click="$emit('update:show', '')">
          <b-img src="~/assets/svg/Material v3.6_01_2-AboutV-VMore-POP-Close.svg" fluid />
        </div>     

        <b-row class="orgContentRow h-100 w-100 p-lg-3" align-h="between" no-gutters>
            <b-col cols=12 lg=8>
              <b-img :src="org[show].logo" fluid class="d-lg-none d-block orgMorelogo"/>
              <div v-if="show=='mop'" class="orgText">
                <div class="title">Mic On Project 是什麼？</div>
                Mic On Project 是一個於 2020 年 8 月 2 月成立的首個香港 VTuber 社團。<br>
                我們主張讓旗下 VTuber以「貼地」的方式進行直播，並與粉絲輕鬆的探討本地宅文化議題及活動。<br>
                <div class="br" />
                而我們的工作除了處理旗下 VTuber 的日常事務及為他們提供各種支援外，<br>
                我們更會著重於音樂元素，以提升 VTuber 的歌唱力及製作更多的原創和 Cover音樂作品，<br>
                務求讓 Mic On Project 的節目聽感更佳。<br>
                <div class="br" />
                <div class="title">Mic On Project 的名稱及 Logo 由來</div>
                我們把名稱定義為 Mic On Project，以及將 Logo 的形狀定為麥克風的原因，<br>
                是因為我們希望透過「開咪」作虛擬直播的形式，為大眾增添多一份的娛樂、促進本地的宅文化活動，<br>
                以及為這個城市和世界帶來一點歡樂色彩。<br>
                <div class="br" />
                而我們的 Logo 則選擇薄花櫻藍與淺紫為色調主題。薄花櫻藍除了能代表冷靜和智慧之外，<br>
                同時也象徵著我們團內百折不撓的信念；而與淺紫的混色，則喻意我們穩中求變，創出潮流的決心。<br>
                
              </div>
              <div v-else class="orgText">
                <div class="title">關於企劃組</div>                
                香港虛擬偶像應援企劃組 ( Hong Kong Virtual Idol Fanatics, HKVIDOLFANS )，<br>
                是一個致力於透過籌備虛擬偶像應援活動、協辦及參與和虛擬偶像有關的活動，<br>
                以達致推動虛擬偶像文化的普及流行，展現香港文化創意產業的一個本地非牟利社團。<br>
                企劃組前身為 2021年 12 月成立的「露西婭生日巴士企劃 / HK Vtuber Bus Production 」，<br>
                並於 2022 年 7 月改為現稱，以更好地彰顯本組的宗旨及活動目標。 <br>
                <div class="br" />
                本組至今已為香港、日本和外國的虛擬偶像舉辦過超過十個應援活動，<br>
                包括但不限於廣告、影片、網站和心意卡等，亦曾參與籌備本地及外國虛擬偶像的演出。<br>
                有關本企劃組的更多資料，可瀏覽本企劃組的社交媒體，或加入我們的Discord 群組交流！<br>

                
              </div>
            </b-col>
            <b-col cols=12 lg=4>
              <b-img :src="org[show].logo" fluid class="py-3 d-none d-lg-block"/>
              <b-row class="w-100 pt-lg-5 pt-3">

                <b-col cols=3 class="d-flex justify-content-end align-items-center py-2" @click="goto(org[show].dc)">
                  <div class="snsOrgBtn">
                      <ShowSvg name="Material v3.6_00-Header-Icon-DC.svg" class="snsOrgBtnSvg" />
                  </div>
                </b-col>
                <b-col cols=9 class="d-flex justify-content-start align-items-center py-2" @click="goto(org[show].dc)">
                  <div class="orgTag w-100 px-2 py-1">
                    {{org[show].dcT}}
                  </div>
                </b-col>

                <b-col cols=3 class="d-flex justify-content-end align-items-center py-2" @click="goto(org[show].tw)">
                  <div class="snsOrgBtn">
                      <ShowSvg name="Material v3.6_00-Header-Icon-TW.svg" class="snsOrgBtnSvg" />
                  </div>
                </b-col>
                <b-col cols=9 class="d-flex justify-content-start align-items-center py-2" @click="goto(org[show].tw)">
                  <div class="orgTag w-100 px-2 py-1">
                     {{org[show].twT}}
                  </div>
                </b-col>

                <b-col cols=3 class="d-flex justify-content-end align-items-center py-2" @click="goto(org[show].yt)">
                 <div class="snsOrgBtn">
                      <ShowSvg name="Material v3.6_00-Header-Icon-YT.svg" class="snsOrgBtnSvg" />
                  </div>
                </b-col>
                <b-col cols=9 class="d-flex justify-content-start align-items-center py-2" @click="goto(org[show].yt)">
                  <div class="orgTag w-100 px-2 py-1">
                    {{org[show].ytT}}
                  </div>
                </b-col>

                <b-col cols=3 class="d-flex justify-content-end align-items-center py-2" @click="goto(org[show].fb)">
                  <div class="snsOrgBtn">
                      <ShowSvg name="Material v3.6_00-Header-Icon-FB.svg" class="snsOrgBtnSvg" />
                  </div>
                </b-col>
                <b-col cols=9 class="d-flex justify-content-start align-items-center" @click="goto(org[show].fb)">
                  <div class="orgTag w-100 px-2 py-1">
                     {{org[show].fbT}}
                  </div>
                </b-col>

              </b-row>
            </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
import mopLogo from '~/assets/logo/logo_original.png';
import hkviflogo from '~/assets/HKVidolLogo/1logo1.png';
export default {
    props: {
        show:{
            type:String
        },        
    },
    data(){
      return{        
        org:{
          mop:{
            logo:mopLogo,
            dc:'https://discord.gg/4AFXAWBjWw',
            tw:'https://twitter.com/miconproject',
            yt:'https://www.youtube.com/channel/UCz1HT4pcoYorlvOZ22Q1yew',
            fb:this.$device.isDesktop?'https://www.facebook.com/Miconproject':'fb://profile/100063723505795',
            dcT:'Mic On Project 官方 Server',
            twT:'@miconproject',
            ytT:'Mic On Project【Official】',
            fbT:'Mic On Project'
          },
          hkvif:{
            logo:hkviflogo,
            dc:'https://discord.gg/VSWWmwrZyP',
            tw:'https://twitter.com/hkvidolfans',
            yt:'https://www.youtube.com/channel/UCJoFbgg352JFNbGueSuUeIA',
            fb:this.$device.isDesktop?'https://www.facebook.com/hkvidolfans':'fb://profile/100078475689179',
            dcT:'香港虛擬偶像應援企劃組',
            twT:'@hkvidolfans',
            ytT:'香港虛擬偶像應援企劃組',
            fbT:'香港虛擬偶像應援企劃組 \n#hkvidolfans'
          }
        }
        
      }
    },
    methods:{
      goto(url){
        if(process.browser){
          window.open(url, '_blank').focus();
        }
      },
      snsBtn(show,sns){
        var classList=''
        if(show){
          switch(show){
            case 'aisu':
              classList+= 'snsBtnAisu';
              break;
            case 'nao':
              classList+= 'snsBtnNao';
              break;
            case 'shizu':
              classList+= 'snsBtnShizu';
              break; 
            default:
              classList= ''
          }
          switch(sns){
            case 'yt':
              if(this.ytOver) classList+= ' btnAct';
              break;
            case 'tw':
              if(this.twOver) classList+= ' btnAct';
              break;
            case 'fb':
              if(this.fbOver) classList+= ' btnAct';
              break; 
            default:
              classList= ''
          }
        }
        return classList
      },      
      border(show){
        if(show){
          switch(show){
            case 'hkvif':
              return 'hkvifBorder';
              break;
            case 'mop':
              return 'mopBorder';
              break;            
            default:
              return ''
          }
        }
        return ''
      }
    },
    watch:{      
    }
}
</script>

<style>
  .orgText>.br{
    height: 1rem;
    line-height: 1rem;
  }
  .overLay{
    position: fixed;
    top:0;
    left: 0;
    height:100vh;
    width:100vw;
    z-index:999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: fadein;  
    animation-duration: 0.5s;
    animation-fill-mode: forwards; 
  }  
  .overLayBackDrop{
    position: fixed;
    top:0;
    left: 0;
    height:100vh;
    width:100vw;
    background:#00000055;   
  }
  .orgContent{
    position: relative;
    width:65vw; 
    border-radius: 30px;
    border-style: solid;
    background: white; 
    z-index:999;
    animation-name: fadein;  
    animation-duration: 0.5s;
    animation-fill-mode: forwards; 
  }
   @keyframes fadein {
    from {
        filter: blur(4px);
        opacity: 0;       
      }
    to {
        filter: blur(0px);
        opacity: 1;              
      }
  }
  .closeBtn{
    position: absolute;
    top:0;
    right: 0;
    width:50px;
    transform: translate(50%,-50%);
    border-radius: 50%;
    cursor:pointer;
  } 
  .mopBorder{
    border-color:#EFA5AF;
  }
  .hkvifBorder{
    border-color:#6380BD;
  }
  .orgText{
    font-size:16px;
    line-height: 1.5rem;
  }
  .orgText > .title{
    font-size: 25px;
    font-weight: 600;
    color:#6380BD;
    margin-bottom:10px;
  }
  .snsOrgBtn{
    width: 50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
    background: #5A79BA;  
    display: flex;
    justify-content: center;
    align-items: center;
  }  
  .snsOrgBtnSvg{   
    width: 30px;
    height:30px;
    position: relative;    
  }
  .snsOrgBtnSvg>svg{
    position: absolute;
    top:0;
    left:0;
  }
  .orgTag{    
    font-size:15px;
    border-radius: 80px ;
    color:white; 
    background:#C4A3BF; 
  }
  @media only screen and (max-width: 991px){
    .orgContent{
      width:85vw;
      height:85vh; 
    }
    .orgContentRow{
      width:100%;
      height:100%; 
      overflow-y: scroll;
      overflow-x:visible ;
    }
    .orgText{
      font-size:12px;
      line-height: 1.5rem;
    }
    .orgText > .title{
      font-size: 14px;
      font-weight: 600;
      color:#6380BD;
      margin-bottom:10px;
    }
    .orgMorelogo{
      height:100px;
      margin-bottom:1rem;
    }
    .orgTag{
      font-size:12px;
    }
    .snsOrgBtn{
      width:25px;
      height:25px;
    }
    .snsOrgBtnSvg{
      width:20px;
      height:20px;
    }
  }
</style>