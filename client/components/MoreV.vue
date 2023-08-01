<template>
    <div v-if="show!=''" class="overLay" >
      <div class="overLayBackDrop"  @click="$emit('update:show', '')"  />      
      <div class="vContent px-lg-5 py-lg-4 p-3" :class="border(show)">
        <div class="closeBtn" @click="$emit('update:show', '')">
          <b-img src="~/assets/svg/Material v3.6_01_2-AboutV-VMore-POP-Close.svg" fluid />
        </div>

        <b-row align-h="between" class="vContentRow" no-gutters>
          <b-col cols=12 lg=6 class="d-flex flex-column h-lg-100">
            <div class="vDes">
              <b-img :src="v[show].logo" fluid class="vMoreLogo" />            
              <p class="vText">{{v[show].text}}</p>
            </div>
            
            <div class="vOther h-lg-100">
              <b-row class="w-100 h-lg-100" no-gutters align-h="between">
                <b-col cols=6 class="h-lg-100 ">
                  <b-img :src="v[show].qImg" fluid class="vMoreQ" /> 
                </b-col>
                <b-col cols=6 class="h-lg-100 my-auto">
                  <div class="mx-2">
                    <span style="font-size:12px;">Fans name :</span><br>
                    <span class="vFanName" :class="color(show)">{{v[show].fanName}}</span>
                    <div class="tags py-1">
                      <div class="tag my-2 px-2" :class="tagbg(show)" v-for="tag in v[show].tag" :key="tag">
                        #{{tag}}
                      </div>
                    </div>
                    <div class="d-flex snsBtns">
                      <div class="snsBtn mr-2" @mouseenter="ytOver=true" @mouseleave="ytOver=false" @click="goto(v[show].yt)">
                        <ShowSvg :name="ytOver?'Material v3.6_01_2-AboutV-VMore-POP-YT-MouseOver.svg':'Material v3.6_01_2-AboutV-VMore-POP-YT.svg'" :class="snsBtn(show,'yt')"  />
                      </div>
                      <div class="snsBtn mx-2" @mouseenter="twOver=true" @mouseleave="twOver=false" @click="goto(v[show].tw)">
                        <ShowSvg :name="twOver?'Material v3.6_01_2-AboutV-VMore-POP-TW-MouseOver.svg':'Material v3.6_01_2-AboutV-VMore-POP-TW.svg'" :class="snsBtn(show,'tw')" />
                      </div>
                      <div class="snsBtn mx-2" @mouseenter="fbOver=true" @mouseleave="fbOver=false" @click="goto(v[show].fb)">
                        <ShowSvg :name="fbOver?'Material v3.6_01_2-AboutV-VMore-POP-FB-MouseOver.svg':'Material v3.6_01_2-AboutV-VMore-POP-FB.svg'" :class="snsBtn(show,'fb')" />
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              
            </div>
          </b-col>
          <b-col cols=12 lg=5>
              <div class="vstand my-4 d-lg-block d-flex justify-content-center align-items-center" :class="bg(show)">
                <b-img :src="v[show].standImg" fluid class="vStandImg" />
                <div class="vMoreSign" :class="border(show)">
                  <b-img :src="v[show].sign" fluid  />
                </div>
                <div class="colorBox d-none d-lg-block">
                  <div class="vbox" :class="tagbg(show)" />
                  <div class="vbox" :class="bg(show)" />
                  <div class="vbox" :class="bg(show)" />
                  <div class="vbox" :class="bg(show)" />
                </div>
              </div>              
          </b-col>
        </b-row> 

      </div>
    </div>
</template>

<script>
import aisuLogo from '~/assets/vtuber/aisu/logo.png';
import aisuStand from '~/assets/vtuber/aisu/img.png';
import aisuSign from '~/assets/vtuber/aisu/sign.png';
import aisuQImg from '~/assets/vtuber/aisu/q.png';

import naoLogo from '~/assets/vtuber/nao/logo.png';
import naoStand from '~/assets/vtuber/nao/img.png';
import naoSign from '~/assets/vtuber/nao/sign.png';
import naoQImg from '~/assets/vtuber/nao/q.png';

import shizuLogo from '~/assets/vtuber/shizu/logo.png';
import shizuStand from '~/assets/vtuber/shizu/img.png';
import shizuSign from '~/assets/vtuber/shizu/sign.png';
import shizuQImg from '~/assets/vtuber/shizu/q.png';

export default {
    props: {
        show:{
            type:String
        },        
    },
    data(){
      return{
        ytOver:false,
        twOver:false,
        fbOver:false,
        v:{
          aisu:{
            logo:aisuLogo,
            qImg:aisuQImg,
            standImg:aisuStand,
            sign:aisuSign,
            name:'小林あいす',
            text:'小林あいす是來自冰之國的17歲良好女子高中生，當初因冰之國的氣候危機而誤成為了VTuber。除了廣東話以外，也會說日語和普通話。小林あいす的小伙伴名稱為雪米糍。現時主要的活動為唱歌、雜談、遊戲，以及ASMR主題。',
            tag:['17歲賢良淑德女子高中生','清楚系VTuber','唔講粗口'],
            fanName:'雪米糍',
            yt:'https://miconproject.com/yt/KobayashiAisu',
            tw:'https://twitter.com/kobayashi_aisu',
            fb:'https://www.facebook.com/KobayashiAisu'
          },
          nao:{
            logo:naoLogo,
            qImg:naoQImg,
            standImg:naoStand,
            sign:naoSign,
            name:'伊織なお',
            text:'伊織なお是來自桜之國的14歲少女，同時也是桜之列車公司旗下「夢幻號」列車的少女車長。當初因「夢幻號」的損毀而被迫留於地球，亦因經濟問題誤成為了VTuber。伊織なお的工作拍檔名稱為倉鼠櫻草餅。現時主要的活動為雜談和遊戲主題。',
            tag:['桜之國扮工車掌','雜談之鬼','神秘三角'],
            fanName:'櫻花瓣、乘客',
            yt:'https://miconproject.com/yt/IoriNao',
            tw:'https://twitter.com/Nya_Nya_Nao315',
            fb:'https://www.facebook.com/IoriNao'
          },
          shizu:{
            logo:shizuLogo,
            qImg:shizuQImg,
            standImg:shizuStand,
            sign:shizuSign,
            name:'暁月シズ',
            text:'暁月シズ是來自於曉月星的混血歌姬公主，當初因曉之國和月之國的戰亂巧遇上咒術師，而選擇了跟隨咒術師的指示來到地球當VTuber，以改寫自己的命運。暁月シズ的狼狗伙伴名稱為彗星。現時主要的活動為唱歌、雜談、日本旅遊，以及遊戲主題。',
            tag:['曉月星混血歌姬公主','建議純潔','OK'],
            fanName:'月光族',
            yt:'https://miconproject.com/yt/AkatsukiShizu',
            tw:'https://twitter.com/Akatsuki_shizuu',
            fb:'https://www.facebook.com/akatsukishizu0707'
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
      tagbg(show){
        if(show){
          switch(show){
            case 'aisu':
              return 'tagAisuBG';
              break;
            case 'nao':
              return 'tagNaoBG';
              break;
            case 'shizu':
              return 'tagShizuBG';
              break; 
            default:
              return ''
          }
        }
        return ''
      },
      bg(show){
        if(show){
          switch(show){
            case 'aisu':
              return 'vMoreAisuBG';
              break;
            case 'nao':
              return 'vMoreNaoBG';
              break;
            case 'shizu':
              return 'vMoreShizuBG';
              break; 
            default:
              return ''
          }
        }
        return ''
      },
      color(show){
        if(show){
          switch(show){
            case 'aisu':
              return 'vFanNameAisu';
              break;
            case 'nao':
              return 'vFanNameNao';
              break;
            case 'shizu':
              return 'vFanNameShizu';
              break; 
            default:
              return ''
          }
        }
        return ''
      },
      border(show){
        if(show){
          switch(show){
            case 'aisu':
              return 'vContentaisu';
              break;
            case 'nao':
              return 'vContentnao';
              break;
            case 'shizu':
              return 'vContentshizu';
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
  .overLay{
    position: fixed;
    top:0;
    left: 0;
    height:100vh;
    width:100vw;
    z-index:10;
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
  .vContent{
    position: relative;
    width:65vw;
    border-radius: 30px;
    border-style: solid;
    background: white; 
    z-index:11;
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
  
  .vContentaisu{    
    border-color: var(--aisuColor);      
  }
  .vContentnao{
    border-color: var(--naoColor); 
  }
  .vContentshizu{
    border-color: var(--shizuColor); 
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
  .vOther{
    height:40%;
    width: 100%;    
    line-height: 1rem;
    font-weight: 600;
  }
  .vMoreLogo{
    height:8vw;
    max-width: 100%;
    object-fit: scale-down;
  }
  .vText{
    font-size: 18px;
    font-weight: 500;
    line-height: 2em;
    margin:2em 0;
  }
  .vMoreQ{   
    height:100%;  
    max-height: 255px;
    object-fit: scale-down;
  }  
  .vFanName{
    font-size:20px;
  }
  .vFanNameAisu{
    color:var(--aisuColor);    
  }
  .vFanNameNao{
    color:var(--naoColor); 
  }
  .vFanNameShizu{
    color:var(--shizuColor); 
  }
  .tag{
    font-size:15px;
    border-radius: 80px ;
    color:white;
  }
  .tagAisuBG{
    background: var(--aisuColor);
  }
  .tagNaoBG{
    background: var(--naoColor);
  }
  .tagShizuBG{
    background: var(--shizuColor);
  }

  .vMoreAisuBG{
    background: var(--aisuBG);
  }
  .vMoreNaoBG{
    background: var(--naoBG);
  }
  .vMoreShizuBG{
    background: var(--shizuBG);
  }
  .snsBtn{
    width: 50px;
    border-radius:50%;
    cursor:pointer;
  }
  .snsBtnAisu > svg .st9{
    fill:var(--aisuColor) !important;
  }
  .snsBtnNao > svg .st9{
    fill:var(--naoColor) !important;
  }
  .snsBtnShizu > svg .st9{
    fill:var(--shizuColor) !important;
  }
  .snsBtnAisu > svg .st19{
    stroke:var(--aisuColor) !important;
  }
  .snsBtnNao > svg .st19{
    stroke:var(--naoColor) !important;
  }
  .snsBtnShizu > svg .st19{
    stroke:var(--shizuColor) !important;
  }
  .vstand{    
    border-radius: 30px;
    position: relative;
    margin-right: 2rem;
    margin-bottom: 2rem;
    max-height: 80vh;
  }
  .vStandImg{
    max-height: 80vh;
  }
  .vMoreSign{
     border-radius: 30px;
     width:12vw;
     background:white;
     border-style: solid;
     padding: 20px;
     position: absolute;
     right: 0;
     bottom:0;
     transform: translate(25%,20%);
     filter: drop-shadow(5px 5px 3px rgb(0 0 0 / 0.2));
  }
  .colorBox{
    width:10px;
     position: absolute;
     right: -35px;
     top:0;
  }
  .vbox{
    width:30px;
    height:30px;
    border-radius: 40%;
    margin:25px ;
  } 
  @media only screen and (max-width: 991px){
    .vContent{
      width:85vw;
      height:85vh;      
    }
    .vContentRow{
      width:100%;
      height:100%; 
      overflow-y: scroll;
      overflow-x:visible ;
    }
    .vMoreLogo{
      height: 100px;
    }
    .vText{
      font-size:12px;
    }
    .tag{
      font-size:12px;
    }
    .vstand{
      width:100%;
    }
    .vMoreSign{
      width:45%;
      transform: translate(0,0);
      filter: none;
    }
  }
</style>