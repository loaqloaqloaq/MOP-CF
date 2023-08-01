<template>
<div>  
  <div class="container"> 
    
    <div class="headerPage py-3" id="header">
      <client-only>
        <template v-if="scrollAnimation()" />
        <News :show.sync="showNews" />
      </client-only>
       
      <div class="smNav d-flex justify-content-center align-items-center">         
        <div class="smNavPills">
          <b-row class="py-2" align-h="center">
            <b-col cols=auto class="text-center mx-lg-3">
              <a href="#aboutEvent">EVENT</a>
            </b-col>
            <b-col cols=auto class="text-center mx-lg-3">
              <a href="#eventTime">CROWDFUNDING</a>
            </b-col>
            <b-col cols=auto class="text-center mx-lg-3">
              <a href="#about">ABOUT</a>
            </b-col>
          </b-row>
        </div>
      </div>     

      <div class="centerLogo d-flex flex-column justify-content-center align-items-center">
        <ShowSvg name="Material_v3.6_01-0-Event-Logo_v3.1.svg" class="blacklogo" />  
      </div>     

    </div>

    
   

    <div id="aboutEvent" style="height:80px;" />
    <div class="aboutEvent py-lg-5 d-flex justify-content-center align-items-start cell" >
      <div class="shadow box d-flex justify-content-center align-items-center slide-in" >
        <b-row class="w-100 mx-lg-5 px-lg-5 mt-lg-3 mb-lg-5 pt-lg-3 pb-lg-3 m-3 py-2">
          <b-col cols=12 lg=6 style="font-size:22px;color:rgb(90,121,186);">
            <span class="heading-eng">01 / ABOUT EVENT</span><br>
            <p class="heading">關於眾籌活動</p>
          </b-col>
          <b-col cols=12 lg=6 />          
          <b-col cols=12 class="aboutText d-flex justify-content-center align-items-center pt-lg-3 slide-in text-slide-in">
            <div>
              為慶祝 Mic On Project 成立兩周年和宣傳 Mic On Project 的未來活動發展，<br>
              我們特意聯同「香港虛擬偶像應援企劃組」舉辦了是次眾籌活動，<br>
              望請各位能多多支持！<br>              
            </div>
          </b-col>
        </b-row>        
      </div>
    </div>

    <div id="eventTime" style="height:100px;" />
    <div class="eventTime py-lg-3 py-2 d-flex flex-column justify-content-center align-items-center w-100 cell" id="eventTime">
      <ShowSvg name="Material v3.6_01_2-EventTime-BG.svg" class="EventTimeBG slide-in" /> 
      <div class="EventTimeText text-center pt-lg-5 slide-in" style="color:rgb(90,121,186);">
        <span class="heading-eng">02 / EVENT TIME </span><br>
        <p class="heading">眾籌時段</p><br class="d-none d-lg-block" />
        <b-row class="w-100" align-h="between" no-gutters>
          <b-col cols=12 md=4 lg=4 class="d-flex justify-content-center align-items-center">
            <div>
              <span class="EventDate">2022<span style="color:rgb(239,165,175);">.</span> 10<span style="color:rgb(239,165,175);">.</span> 22</span> 
              <span class="EventWeekDay DateStart">&nbsp;星期六</span>
            </div>
          </b-col>
          <b-col cols=12 md=4 lg=4 class="d-flex justify-content-center align-items-center">            
            <ShowSvg name="Material v3.6_01_2-Bar.svg" class="EventTimeBar d-none d-lg-flex" />
            <div style="font-size:24px; margin:-10px 0;" class="d-flex d-lg-none">
              ~   
            </div>         
          </b-col>
          <b-col cols=12 md=4 lg=4 class="d-flex justify-content-center align-items-center">
            <div>
            <span class="EventDate">2022<span style="color:rgb(239,165,175);">.</span> 12<span style="color:rgb(239,165,175);">.</span> 31</span>
            <span class="EventWeekDay DateEnd">&nbsp;星期六</span>
            </div>
          </b-col>
        </b-row> 
      </div>      
      <div class="AboutV text-center p-lg-4 p-3">
        <img src="~/assets/logo/logo_black.png" style="height:50px;" /> &nbsp;<span class="AboutVHeader">有關MOP演唱會及發展眾籌企劃的 VTuber 包括</span> &nbsp;<i style="color:rgb(90,121,186);" class="fa-solid fa-caret-left"></i>
        <b-row class="w-100 px-lg-5 pt-lg-5 pt-3" align-h="around" no-gutters>
          <b-col cols=6 lg=4 class="aisu px-lg-4 pt-2 px-1 slide-in mx-auto">
            <div class="card" >
              <b-img-lazy src="~/assets/vtuber/aisu/img.png" fluid  class="img" />
              <b-img-lazy src="~/assets/vtuber/aisu/sign.png" fluid  class="sign" />
            </div>
            <div class="card cardlogo mt-3 px-lg-3 d-flex justify-content-center align-items-center">
              <b-img-lazy src="~/assets/vtuber/aisu/logo.png" fluid class="vlogo" />
            </div>
            <b-row no-gutters class="w-100 px-2 pt-3 nameCard" align-h="between" >
              <b-col cols=auto class="Vname"> 
                小林あいす
              </b-col>
              <b-col cols=auto class="VmoreBG"> 
                <div class="Vmore" @click="vMore='aisu'" />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols=6 lg=4 class="nao px-lg-4 pt-2 px-1 slide-in">
            <div class="card" >
              <b-img-lazy src="~/assets/vtuber/nao/img.png"  fluid class="img" />
              <b-img-lazy src="~/assets/vtuber/nao/sign.png" fluid class="sign" />
            </div>
            <div class="card cardlogo mt-3 px-3 d-flex justify-content-center align-items-center">
              <b-img-lazy src="~/assets/vtuber/nao/logo.png" fluid class="vlogo" />
            </div>
            <b-row no-gutters class="w-100 px-2 pt-3 nameCard" align-h="between" >
              <b-col cols=auto class="Vname"> 
                伊織なお
              </b-col>
              <b-col cols=auto class="VmoreBG"> 
                <div class="Vmore" @click="vMore='nao'" />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols=6 lg=4 class="shizu px-lg-4 pt-2 px-1 slide-in">
            <div class="card" >
              <b-img-lazy src="~/assets/vtuber/shizu/img.png" fluid  class="img" />
              <b-img-lazy src="~/assets/vtuber/shizu/sign.png" fluid class="sign" />
            </div>
            <div class="card cardlogo mt-3 px-3 d-flex justify-content-center align-items-center">
              <b-img-lazy src="~/assets/vtuber/shizu/logo.png" fluid class="vlogo" />
            </div>
            <b-row no-gutters class="w-100 px-2 pt-3 nameCard" align-h="between" >
              <b-col cols=auto class="Vname"> 
                暁月シズ
              </b-col>
              <b-col cols=auto class="VmoreBG"> 
                <div class="Vmore" @click="vMore='shizu'"  />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    
    </div>

    <MoreV :show.sync="vMore" />

    <div id="shuP" style="height:100px;" />
    <div class="shuP pt-lg-5 mt-5 d-flex flex-column justify-content-center align-items-center slide-in">
      <div class="shuPHeader">
        <ShowSvg name="Material v3.6_02_1-PW-BG-2.svg" class="shuPHeaderBG"/>
        <div class="shuPHeaderText text-center py-lg-5 py-3 slide-in">
          <span class="heading-eng">03 / PRESIDENT'S WORDS </span><br>
          <p class="heading">社長的話</p>
        </div>             
      </div>          
    
      <div class="shuPContent d-flex flex-column flex-lg-row py-lg-5 py-2">
        <div class="shuPContentLeft p-lg-5 p-3">
          <div class="shuPSpeach slide-in px-lg-3 px-1">
            大家好，我是 Mic On Project 的社長及負責人⸺ 桜井芳樹P。
            <br><br>
            不知不覺間 Mic On Project 已經成立兩年多了。 回想當初，我們只是懷著一股幼嫰的熱誠和衝勁成立了這個社團， 
            卻沒有想過兩年後 Mic On Project 竟會成為擁有三位VTuber，且有一定粉絲數量和影響力的團體。 
            雖然路途崎嶇，也有著了不少的挑戰，但每一幕粉絲們的讚嘆、感動，亦都化成了我們逆流而上的動力。 
            我 桜井芳樹P 深信，香港VTuber總有一天，都能成為香港人主要消遣和娛樂的一部份。
            <br><br>
            同時也希望我們作為是次香港首個本地VTuber的大型實體演唱會舉辦，能使同業和粉絲間有更多動力和勇氣， 
            促成更多的香港VTuber實體活動，讓更多人認識香港VTuber，望此希望大家能多多支持是次 Mic On Project 的大型眾籌活動。
            <br><br>
            再一次感謝所有粉絲一直以來對我們不離不棄，無限的陪伴，以及支持。
          </div>
        </div>
        <div class="shuPContentRight d-flex flex-column justify-content-center align-items-center">  
            <div class="shuPImg slide-in" @click="onClickShuP()">        
              <b-img src="~/assets/vtuber/shupHead.png" fluid />    
            </div>      
        </div>
      </div> 
    </div> 

     <div id="slider" style="height:1px;" />  

    <div class="sliderContainer d-flex justify-content-center align-items-center my-5 slide-in"> 
      <div class="slider d-flex flex-column justify-content-center align-items-center ">
        <div class="py-3 w-100 px-lg-5 pl-4 memText" >Mic On Project的回憶</div>
        <div class="sliderSwiper pb-lg-5 pb-4">
          <swiper  :options="swiperOption">
            <swiper-slide v-for="image in images" :key="image">
              <div>
                <img  :key="image" :src="image" :alt="image" class="sliderImage" /> 
              </div>
              </swiper-slide>      
          </swiper>
        </div>
      </div>
    </div>
       
    <div id="target" style="height:50px;" />

    <div class="target d-flex flex-column justify-content-center align-items-center slide-in">
      <div class="targetHeader">
        <ShowSvg name="Material v3.6_02-2-Target-BG-1.svg" class="targetHeaderBG"/>
        <div class="targetHeaderText text-lg-center py-lg-5 py-3 mx-lg-4 mx-5 slide-in">
          <span class="heading-eng">04 / EVENT TARGET </span><br>
          <p class="heading">眾籌目標</p>
        </div>             
      </div>       
      <div class="targetContent d-flex py-lg-5 ">
        <div class="targetContentLeft px-lg-3 py-lg-5 py-2 d-flex flex-column justify-content-center align-items-center ">
          <div class="targetContentText px-lg-5 px-3">
            <span class="targetTextBig slide-in">我們這次活動的眾籌目標金額為<span class="targetTextBigMoney">$80,000</span>，其中:</span>
            <div class="d-flex flex-column justify-content-center align-items-center w-100 py-lg-5 py-2">

              <b-row class="targetRow px-lg-2 py-2 slide-in">
                <b-col cols=3 xl=2 class=" d-flex justify-content-center align-items-center">
                  <span style="color:#5A79BA;font-weight: 700;">$15,000</span>
                </b-col>
                <b-col cols=2 class="d-flex justify-content-center align-items-center">
                  <div style="width: 100%; border-bottom: 2px solid #3C3C3C; text-align: center;" class="d-none d-xl-block" />
                </b-col>
                <b-col cols=12 xl=7 class="d-flex flex-column justify-content-center align-items-center">
                  <span class="w-100 targetTextBig">將投放於 Mic On Project 官方網頁架構及營運用途</span>
                  <span class="targetTextSmall w-100">網頁將會有旗下 VTuber 的詳細資訊及節目時間表分頁，以吸納更多觀眾及更方便粉絲們追台</span>
                </b-col>
              </b-row>              

              <b-row class="targetRow py-2 px-lg-2 slide-in">
                <b-col cols=3 xl=2 class="d-flex justify-content-center align-items-center">
                  <span style="color:#EFA5AF;font-weight: 700;" >$<span class="updated">38,000</span></span>
                </b-col>
                <b-col cols=2 class="d-flex justify-content-center align-items-center">
                  <div style="width: 100%; border-bottom: 2px solid #3C3C3C; text-align: center;" class="d-none d-xl-block" />
                </b-col>
                <b-col cols=12 xl=7 class="d-flex flex-column justify-content-center align-items-center2">
                  <span class="w-100 targetTextBig">將投放於有關 Mic On Project<span class="updated"> 兩周年紀念實體演唱會</span> 用途</span>
                  <span class="targetTextSmall w-100">我們將預定於2023年內租借場地並舉辦官方實體演唱會活動，詳情請留意MOP官方的最新資訊。</span>
                </b-col>
              </b-row>

              <b-row class="targetRow px-lg-2 py-2 slide-in h-100">
                <b-col cols=3 xl=2 class="d-flex justify-content-center align-items-center">
                  <span style="color:#5A79BA;font-weight: 700;" >$<span class="updated">7,000</span></span>
                </b-col>
                <b-col cols=2 class="d-flex justify-content-center align-items-center">
                  <div style="width: 100%; border-bottom: 2px solid #3C3C3C; text-align: center;" class="d-none d-xl-block" />
                </b-col>
                <b-col cols=12 xl=7 class="d-flex flex-column justify-content-center align-items-center">
                  <span class="w-100 targetTextBig">將投放於有關 Mic On Project <span class="updated">官方地鐵廣告</span><br>及未來<span class="updated">兩周年紀念實體演唱會</span>上的宣傳用途</span>
                  <span class="targetTextSmall w-100">地鐵廣告將會於油麻地地鐵站上架，為期七天</span>
                </b-col>
              </b-row>

              <b-row class="targetRow　py-2 px-lg-2 slide-in">
                <b-col cols=3 xl=2 class="d-flex justify-content-center align-items-center">
                  <span style="color:#FFE14D;font-weight: 700;" >$<span class="updated">20,000</span> </span>
                </b-col>
                <b-col cols=2 class="d-flex justify-content-center align-items-center">
                  <div style="width: 100%; border-bottom: 2px solid #3C3C3C; text-align: center;" class="d-none d-xl-block" />
                </b-col>
                <b-col cols=12 xl=7 class="d-flex　flex-column justify-content-center align-items-center">
                  <span class="w-100 targetTextBig">將投放於是次的其他活動及有關<span class="updated">原創曲</span>的開支上</span>
                  <span class="targetTextSmall w-100">包括畫作委托、精品製作及工作人員的一切費用</span>
                </b-col>
              </b-row>

            </div>

            <span class="targetTextBig slide-in">*超過 $80,000 的金額，我們將會用作繼續推動 Mic On Project，並會於未來有以下計劃及目標</span>
            <b-row class="w-100 pt-lg-3 pt-0 pb-2 slide-in" align-h="between">
              <b-col cols=12 xl=6 class="targetTextOther py-1">- 完成旗下VTuber的3D化工作</b-col>
              <b-col cols=12 xl=6 class="targetTextOther py-1">- 舉辦更多實體活動及與後援會合作</b-col>
              <b-col cols=12 xl=6 class="targetTextOther py-1">- 推出原創曲CD </b-col>
              <b-col cols=12 xl=6 class="targetTextOther py-1">- 完成現有及製作更多的原創曲及原創曲MV</b-col>
              <b-col cols=12 xl=6 class="targetTextOther pt-1">- 為旗下VTuber提供更多支援<br>（如技術支援及提供有關課程）</b-col>
              <b-col cols=12 xl=6 class="targetTextOther pt-1">- 升級VTuber的電腦硬件設備</b-col>
            </b-row>
          </div>
        </div>
      </div>  
    
    </div> 


    <div id="process" style="height:50px;" />
    
    <div class="process py-lg-3 py-2 d-flex flex-column justify-content-start align-items-center w-100 cell" > 
      <ShowSvg name="Material v3.6_03-1-Progress-BG-1.svg" class="processBG1 slide-in" />    
      <ShowSvg name="Material v3.6_03-1-Progress-BG-3.svg" class="processBG3" />
      <ShowSvg name="Material v3.6_01_2-EventTime-BG.svg" class="EventTimeBG slide-in" /> 
      <div class="EventTimeText text-center pt-lg-5 slide-in" style="color:#CF8DDC;">
        <span class="heading-eng">05 / EVENT PROGRESS </span><br>
        <p class="heading">眾籌進度</p>
        <span class="leftDayText" v-if="leftDate>0">剩餘… <span class="leftDayNumber">{{leftDate}}</span> 天</span>
        <span class="leftDayText" v-else>活動已經結束</span>
        
          <br>
        <span class="nowText">目前已籌得: <span class="nowNumber">${{now.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>&nbsp;&nbsp;({{processPresent}}%)</span>
      </div>
      <!-- PC process -->
      <div class="text-center slide-in d-none d-xl-block">
        <div class="processBarContainer p-4 d-flex flex-column justify-content-start align-items-center">
          <b-row class="w-100 h-100 p-0 m-0" no-gutters>
            <b-col >
              <div class="text22000 text-right">
                <span class="processSmText" :class="now>=53000?`active`:``">$<span class="updatedSm">53,000</span> 里程碑&nbsp;&nbsp;</span><br>
                <span class="processLgText" :class="now>=53000?`active`:``">
                  Mic On Project <span class="updatedLg">兩周年紀念實體演唱會</span>實行！
                </span>
              </div>
              <div class="text80000 text-right">
                <span class="processSmText" :class="now>=80000?`active`:``">$80,000 里程碑&nbsp;&nbsp;</span><br>
                <span class="processLgText" :class="now>=80000?`active`:``">將會有小驚喜！？</span>
              </div>
            </b-col>
            <b-col style="width:146px;">
              <div>
                <div class="processBar d-flex justify-content-center align-items-center">
                  <ShowSvg name="Material v3.6_03-1-Progress-Tree-No.svg" class="processBarNo" />              
                </div>
                <div class="processBar d-flex justify-content-center align-items-start" :style="`height:${processBar}%;overflow: hidden;`">
                  <ShowSvg name="Material v3.6_03-1-Progress-Tree-Yes.svg" class="processBarYes" />              
                </div>    
              </div> 
            </b-col>
            <b-col>
              <div class="text15000 text-left">
                <span class="processSmText" :class="now>=15000?`active`:``">$15,000 里程碑&nbsp;&nbsp;</span><br>
                <span class="processLgText" :class="now>=15000?`active`:``">Mic On Project 官方網頁成立！</span>
              </div>
              <div class="text60000 text-left">
                <span class="processSmText" :class="now>=60000?`active`:``">$<span class="updatedSm">60,000</span> 里程碑&nbsp;&nbsp;</span><br>
                <span class="processLgText" :class="now>=60000?`active`:``">
                  Mic On Project 官方<span class="updatedLg">地鐵廣告</span>實行！<br>
                  及未來<span class="updatedLg">兩周年紀念實體演唱會</span>的預備金                  
                </span>
              </div>                
            </b-col>
          </b-row>
          <div class="over80000 d-flex flex-column justify-content-start align-items-center">
            若超過$80000的金額，我們將會用作繼續推動Mic On Project，<br>
            並會於未來有更多的計劃及目標。
            <ShowSvg v-if="processBar!=100" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />
          </div>
        </div>        
      </div>
      <!-- mobile process -->
      <div class="processBarContainer d-block d-xl-none">
          <div class="mProcessBarC w-100 d-flex py-3 flex-column justify-content-start align-items-center">          
            
            <ShowSvg v-if="now<15000" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />

            <span class="processSmText" :class="now>=15000?`active`:``">$15,000 里程碑&nbsp;&nbsp;</span>
            <span class="processLgText" :class="now>=15000?`active`:``">Mic On Project 官方網頁成立！</span>

            <ShowSvg v-if="now<22000" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />

            <span class="processSmText" :class="now>=22000?`active`:``">$<span class="updatedSm">53,000</span> 里程碑&nbsp;&nbsp;</span>
            <span class="processLgText" :class="now>=22000?`active`:``">Mic On Project <span class="updatedSm">兩周年紀念實體演唱會</span>實行！</span>

            <ShowSvg v-if="now<60000" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />

            <span class="processSmText" :class="now>=60000?`active`:``">$<span class="updatedSm">60,000</span> 里程碑&nbsp;&nbsp;</span>
            <span class="processLgText" :class="now>=60000?`active`:``">Mic On Project <span class="updatedSm">官方地鐵廣告</span>實行！<br>及未來<span class="updatedSm">兩周年紀念實體演唱會</span>的預備金</span>

            <ShowSvg v-if="now<80000" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />

            <span class="processSmText" :class="now>=80000?`active`:``">$80,000 里程碑&nbsp;&nbsp;</span>
                <span class="processLgText" :class="now>=80000?`active`:``">將會有小驚喜！？</span>

            <ShowSvg v-if="now<80000" name="Material v3.6_03-1-Progress-Tree-No-Over80.svg" class="Over80Bar py-2 mt-1" />
            <ShowSvg v-else name="Material v3.6_03-1-Progress-Tree-Yes-Over80.svg" class="Over80Bar py-2 mt-1" />          

            <span class="processLgText active">若超過$80000的金額，</span>
            <span class="processLgText active">我們將會用作繼續推動Mic On Project，</span>
            <span class="processLgText active">並會於未來有更多的計劃及目標。</span>

          </div>

      </div>
      
    </div>

    <div id="method" style="height:200px;" />

    <div class="method my-3 slide-in d-none d-xl-block">
      <ShowSvg name="Material v3.6_03-2-Method-BG-2.svg" class="methodBG" />
      <b-row class="methodText">
        <b-col cols=4 class="slide-in">
        <span class="heading-eng">06 / SPONSOR METHOD</span><br>
        <p class="heading">贊助方法</p><br>
        </b-col>        
        <b-col cols=8 class="methodList">
          <div>
            <ul>
              <li class="py-2 px-5 slide-in">
                <span class="methodListSm">FPS：</span><br>
                <span class="methodListLg">169640026</span>
              </li>
              <li class="py-2 px-5 slide-in">
                <span class="methodListSm">恆生銀行：</span><br>
                <span class="methodListLg">771-768413-888 Fung C** Y****</span>
              </li>
              <li class="py-2 px-5 slide-in cursor-pointer" @click="goto('https://paypal.me/miconproject')">
                <span class="methodListSm">PayPal：</span><br>
                <span class="methodListLg">miconproject@gmail.com</span>
              </li>
            </ul>
            <div class="methodListText slide-in d-flex">
              <div class="align-top">
                *&nbsp;
              </div>
              <div>
                完成贊助者請<a class="gogoForm" href="https://docs.google.com/forms/d/e/1FAIpQLScRJx3GA1xuYKC_PxF1hiwmwIj_I3v3GHBsGxb06gmymzEdcQ/viewform" target="_blank"><span class="updated">按此</span></a>以提供贊助證明，<br>               
                及到<a class="gogoForm" href="https://discord.com/invite/4AFXAWBjWw" target="_blank"><span class="updated">MOP官方Discord server</span></a>查看眾籌最新消息<br>
                我們將於稍後向大家公佈寄收紀念品的詳情。
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
     
    <div class="target d-flex flex-column justify-content-center align-items-center slide-in d-xl-none">
      <div class="targetHeader">
        <ShowSvg name="Material v3.6_04-Souvenirs-BG-1.svg" class="targetHeaderBG"/>
        <div class="targetHeaderText text-lg-center py-lg-5 py-3 mx-lg-4 mx-5 slide-in">
          <span class="heading-eng">06 / SPONSOR METHOD</span><br>
          <p class="heading">贊助方法</p>
        </div>             
      </div> 
      <div class="methodContainer d-flex py-lg-5 slide-in">
        <div class="methodMobileContent px-5 py-5 slide-in">
          <span class="methodListSm">FPS：</span><br>
          <span class="methodListLg">169640026</span><br>

          <span class="methodListSm">恆生銀行：</span><br>
          <span class="methodListLg">771-768413-888 <br> Fung C** Y****</span><br>

          <span class="methodListSm cursor-pointer" @click="goto('https://paypal.me/miconproject')">PayPal：</span><br>
          <span class="methodListLg cursor-pointer" @click="goto('https://paypal.me/miconproject')">miconproject@gmail.com</span><br><br>

          <div class="methodListText slide-in d-flex align-items-start">
          <p class="align-top">
            *&nbsp;
          </p>
          <div>
             完成贊助者請<a class="gogoForm" href="https://docs.google.com/forms/d/e/1FAIpQLScRJx3GA1xuYKC_PxF1hiwmwIj_I3v3GHBsGxb06gmymzEdcQ/viewform" target="_blank"><span class="updatedSm">按此</span></a>以提供贊助證明，<br>               
              及到<a class="gogoForm" href="https://discord.com/invite/4AFXAWBjWw" target="_blank"><span class="updatedSm">MOP官方Discord server</span></a>查看眾籌最新消息<br>
              我們將於稍後向大家公佈寄收紀念品的詳情。
          </div>
          </div>

        </div>
      </div>
    </div>        

    <div id="souvenirs" style="height:100px;" />

     <div class="target d-flex flex-column justify-content-center align-items-center slide-in">
      <div class="targetHeader">
        <ShowSvg name="Material v3.6_04-Souvenirs-BG-1.svg" class="targetHeaderBG"/>
        <div class="targetHeaderText text-lg-center py-lg-5 py-3 mx-lg-4 mx-5 slide-in" style="z-index:3">
          <span class="heading-eng">07 / CROWDFUNDING SOUVENIRS</span><br>
          <p class="heading">眾籌紀念品</p>
        </div>             
      </div> 
      <div class="souvenirsContainer">

        <div class="souvenirsContentRight px-lg-5 pt-lg-5 pt-2">
          <p class="souvenirsIntro px-lg-5 px-5 ml-5 pt-3">
            為答謝是次參與眾籌者的支持，凡達到指定支援金額的參與眾籌者，將會獲得以下的對應紀念品！
          </p>
        </div>
        <div class="souvenirsContentLeft souvenirsCard my-lg-5 my-3">          
          <div class="souvenirsCardContent">
            <div class="sContent py-5">
              <h2>凡參與眾籌滿$50者</h2>
              <div class="sMidText slide-in ">
                即獲贈隨機<span class="updated">官方眾籌記念明信片</span>&nbsp;乙款！<br>
                <span class="sSmText">>&nbsp;&nbsp;&nbsp;滿$182者則自動升級為兩款款式全齊</span><br><br>
              </div>
              <b-row class="w-100" align-h="between">
                <b-col cols=12 lg=6 class="py-2 slide-in">
                  <div class="busImg d-flex justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/眾籌明信片B_rgb.jpg" fluid alt="眾籌明信片B" />
                  </div>
                </b-col>
                <b-col cols=12 lg=6 class="py-2 slide-in">
                  <div class="busImg d-flex justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/眾籌明信片C_rgb.jpg" fluid alt="眾籌明信片C" />
                  </div>
                </b-col>
              </b-row>       
              <br>
              <table style="font-size:16px;">
                <tr>
                  <td style="vertical-align: top;" class="px-lg-2 px-1">
                  <div class="slide-in">*</div>
                  </td>
                  <td>
                    <div class="slide-in">
                      參與眾籌 $50 或以上者即可於 MOP official Discord server 中獲得特殊身份組及有關是次活動的優先情報，詳情請到 MOP official Discord server 中查詢。
                    </div>
                  </td>
                </tr>
              </table>                                
            </div>
          </div>
        </div>

        <div class="souvenirsContentRight souvenirsCard my-5">          
          <div class="souvenirsCardContent slide-in">
            <div style="color:#CF8DDC;" class="sContent py-5 slide-in">
              <h2 class="slide-in ">凡參與眾籌滿$<span class="updatedLg">182</span>者</h2>
              <div class="sMidText slide-in ">
                即獲贈<span class="updated">官方眾籌記念書籤</span>&nbsp;三款！            
              </div>
              <br>
              <b-row class="w-100" align-h="around" no-gutters>
                <b-col cols=12 md=6 xl=4 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="aisuM d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/書籤A.jpg" fluid alt="小林あいす書籤" />                    
                  </div>
                  <center class="aisuQText my-3">小林あいす書籤</center>
                </b-col>
                <b-col cols=12 md=6 xl=4 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="naoM d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/書籤C.jpg" fluid alt="伊織なお書籤" />                    
                  </div>
                  <center class="naoQText my-3">伊織なお書籤</center>
                </b-col>
                <b-col cols=12 md=6 xl=4 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="shizuM d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/書籤B.jpg" fluid alt="暁月シズ書籤" />                   
                  </div>
                   <center class="shizuQText my-3">暁月シズ書籤</center>
                </b-col>
              </b-row>                         
            </div>
          </div>

        </div>

        <div class="souvenirsContentLeft souvenirsCard my-5">          
          <div class="souvenirsCardContent slide-in">
            <div class="sContent py-5 slide-in">
              <h2 class="slide-in">凡參與眾籌滿$382者</h2>
              <div class="sMidText slide-in">
                即可自選一位 VTuber Q版掛件&nbsp;及&nbsp;<span class="updated">IG出遊風掛件</span>&nbsp;套裝&nbsp;乙款！<br>
                <p class="sSmText">
                  >&nbsp;&nbsp;&nbsp; 滿$682者則自動升級為<span class="updated">自選兩份套裝</span><br>
                  >&nbsp;&nbsp;&nbsp; 滿$982者則自動升級為<span class="updated">三份套裝全齊</span>
                </p>
              </div>
              <br>
              <b-row class="w-100" align-h="around" no-gutters>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="aisuQ d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/掛件_aisu.webp" fluid alt="小林あいすQ版掛件" />                    
                  </div>
                  <center class="aisuQText my-3">小林あいすQ版掛件</center>
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="aisuIg d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/出遊風掛件_aisu.jpg" fluid alt="小林あいすIG出遊風掛件" />                    
                  </div>
                  <center class="aisuQText my-3 updated">小林あいすIG出遊風掛件</center>
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="naoQ d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/掛件_nao.webp" fluid alt="伊織なおQ版掛件" />                    
                  </div>
                  <center class="naoQText my-3">伊織なおQ版掛件</center>
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="naoIg d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/出遊風掛件_nao.jpg" fluid alt="伊織なおIG出遊風掛件" />                    
                  </div>
                  <center class="naoQText my-3 updated">伊織なおIG出遊風掛件</center>
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="shizuQ d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/掛件_shizu.webp" fluid alt="暁月シズQ版掛件" />                   
                  </div>
                   <center class="shizuQText my-3">暁月シズQ版掛件</center>
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="shizuIg d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/出遊風掛件_shizu.jpg" fluid alt="暁月シズIG出遊風掛件" />                   
                  </div>
                   <center class="shizuQText my-3 updated">暁月シズIG出遊風掛件</center>
                </b-col>
              </b-row>                         
            </div>
          </div>
        </div>

        <div class="souvenirsContentRight souvenirsCard my-5 slide-in">          
          <div class="souvenirsCardContent slide-in">
            <div style="color:#CF8DDC;" class="sContent py-5 ">
              <h2>凡參與眾籌滿$1,682者</h2>
              <div class="sMidText">即獲贈MOP全員舞台服裝Q版組裝立牌&nbsp;+&nbsp;感謝明信片&nbsp;+&nbsp;<span class="updated">演唱會紀念門票</span>&nbsp;乙款！</div> 
              <div class="sSmText">
                *該演唱會紀念門票將能用作 Mic On Project 兩周年紀念實體演唱會門票之用<br>
                **演唱會紀念門票持有人將能於Mic On Project 兩周年紀念實體演唱會優先進場<br>
                ***詳情請留意MOP官方的最新資訊<br>
              </div><br>
         
              <b-row style="width:100%;" align-h="between">
                <b-col cols=12 lg=4 class="py-2 slide-in  sImgc">
                  <div class="sImgs slide-in">
                    <a :href="require('~/assets/goods/眾籌背景板_預想圖.webp')" target="_blank">
                      <b-img-lazy center src="~/assets/goods/眾籌背景板_預想圖.webp" fluid alt="MOP全員舞台服裝Q版組裝立牌" />
                    </a>
                  </div>
                </b-col>
                <b-col cols=12 lg=4 class="py-2 slide-in sImgc">
                  <div class="sImgs ">
                    <a :href="require('~/assets/goods/眾籌明信片A_rgb.jpg')" target="_blank">
                      <b-img-lazy center src="~/assets/goods/眾籌明信片A_rgb.jpg" fluid alt="感謝明信片" />
                    </a>
                  </div>
                </b-col>
                <b-col cols=12 lg=4 class="py-2 slide-in sImgc">
                  <div class="sImgs">
                    <a :href="require('~/assets/goods/門票.webp')" target="_blank">
                      <b-img-lazy center src="~/assets/goods/門票.webp" fluid alt="演唱會紀念門票" />
                    </a>
                  </div>
                </b-col>
              </b-row>                      
            </div>
          </div>
        </div>  

        <div class="souvenirsContentLeft souvenirsCard my-5">          
          <div class="souvenirsCardContent slide-in">
            <div class="sContent py-5 slide-in">
              <h2>凡參與眾籌滿$2,582者</h2>
              <div class="sMidText">
                即可自選一位VTuber親簽色紙&nbsp;及&nbsp;全身立牌 套裝&nbsp;乙份！<br>
                <p class="sSmText">
                  >&nbsp;&nbsp;&nbsp;滿$4582者則自動升級為自選兩份套裝<br>
                  >&nbsp;&nbsp;&nbsp;滿$6582者則自動升級為三份套裝全齊
                </p>
              </div>
              <br>
              <b-row class="w-100" align-h="around" no-gutters>
                
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="scard aisub d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/色紙_aisu.jpg" fluid alt="小林あいす色紙" />
                  </div>                 
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="scard aisu aisub d-flex flex-column justify-content-center align-items-center">
                        <b-img-lazy center src="~/assets/goods/眾籌立牌底座_rgb_aisu.png" fluid alt="小林あいす立牌底座" class="standImg" />
                        <b-img-lazy center src="~/assets/goods/立牌_aisu.webp" style="z-index:2;" fluid alt="小林あいす立牌" />                        
                      </div>                   
                </b-col>

                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="scard naob d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/色紙_nao.jpg" fluid alt="伊織なお色紙" />
                  </div>                   
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="scard nao naob d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/眾籌立牌底座_rgb_nao.png" fluid alt="伊織なお立牌底座" class="standImg" />
                    <b-img-lazy center src="~/assets/goods/立牌_nao.webp" style="z-index:2;" fluid alt="伊織なお立牌" />
                  </div>                  
                </b-col>

                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                  <div class="scard shizub d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/色紙_shizu.jpg" fluid alt="暁月シズ色紙" />
                  </div>  
                </b-col>
                <b-col cols=12 md=6 class="py-2 px-lg-2 px-1 slide-in">
                 <div class="scard shizu shizub d-flex flex-column justify-content-center align-items-center">
                    <b-img-lazy center src="~/assets/goods/眾籌立牌底座_rgb-shizu.png" fluid alt="暁月シズ立牌底座" class="standImg" />
                    <b-img-lazy center src="~/assets/goods/立牌_shizu.webp" style="z-index:2;" fluid alt="暁月シズ立牌" />
                  </div>                    
                </b-col>

              </b-row>                         
            </div>
          </div>
        </div>

        <div class="souvenirsContentRight souvenirsCard my-5">          
          <div class="souvenirsCardContent slide-in">
            <div  style="line-height:1.5em;width:80%;color:#CF8DDC;" class="py-5"> 
              <b-row style="width:100%;">
                <b-col cols=12 class="d-flex flex-column justify-content-center align-items-start slide-in mb-lg-4">
                  <div>
                    <h2>凡參與眾籌滿$<span class="updatedLg">3,682</span>者</h2>
                    <span class="sMidText slide-in">即獲贈<span class="updated">MOP眾籌紀念全員法袍（一款）</span> 及&nbsp;&nbsp;<span class="updated text-nowrap">全員發光可充電式應援手環（三款）</span>&nbsp;乙份！</span><br>
                  </div>
                </b-col>
                <b-col cols=12 class="d-flex flex-column justify-content-center align-items-start slide-in py-2 my-lg-2 p-lg-0">
                  <b-row align-h="around">
                    <b-col cols=12 xl=6>
                      <div class="goods3682 d-flex flex-column justify-content-center align-items-center my-2">
                        <b-img-lazy center src="~/assets/goods/手環.webp"  fluid alt="全員發光可充電式應援手環" />
                      </div>
                    </b-col>  
                    <b-col cols=12 xl=6>
                      <div class="goods3682 d-flex flex-column justify-content-center align-items-center my-2">
                        <b-img-lazy center src="~/assets/goods/法袍.webp"  fluid alt="MOP眾籌紀念全員法袍" />
                      </div>
                    </b-col>                   
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>

        
        <div class="souvenirsContentLeft souvenirsCard my-5">          
          <div class="souvenirsCardContent slide-in">
            <div class="sContent py-5 slide-in">
              <b-row class="slide-in">    
                <b-col cols=12 xl=6 class="d-flex flex-column justify-content-center align-items-center my-2">
                  <div class="slide-in">
                  <h2>凡參與眾籌滿$8,282者</h2>
                  <span class="sMidText slide-in">即獲贈社長桜井芳樹P親簽色紙&nbsp;乙張！</span>
                  </div>
                </b-col>
                <b-col cols=12 xl=6>
                  <div class="shuPGoods d-flex flex-column justify-content-center align-items-center my-2 slide-in">
                    <b-img-lazy center src="~/assets/goods/色紙_yoshiki.jpg"  fluid alt="桜井芳樹P親簽色紙" />
                  </div>
                </b-col>
              </b-row>                 
            </div>
          </div>
        </div>

      </div>
    </div>  

    <div id="goodsList" style="height:0;" />

    <div class="goodsList slide-in">
      <div class="goodsListContent">
      <ShowSvg name="Material v3.6_04-Souvenirs-All-BG-1.svg" class="goodsListLTBG"/>
      <ShowSvg name="Material v3.6_04-Souvenirs-All-BG-3.svg" class="goodsListRBBG"/>
      <div class="goodsListImg mx-auto">
        <h4 class="px-5 pt-3">Goods一覽表</h4>
        <a :href="require('~/assets/goods/Goods List v2.4 Highres_1.png')" target="_blank">
          <b-img-lazy center src="~/assets/goods/Goods List v2.4 Lowres_1.webp"  fluid alt="Goods一覽表"/>
        </a>
      </div>   
      </div>
    </div>

    <div id="more" style="height:3rem;" class="d-none d-lg-block" />
    <div id="more" style="height:3rem;" />
    <div class="more py-3 d-flex flex-column justify-content-start align-items-center w-100 cell slide-in" @click="goto('https://discord.gg/4AFXAWBjWw')">
      <ShowSvg name="Material v3.6_01_2-EventTime-BG.svg" class="moreBG slide-in" />      
      <div class="EventTimeText text-center pt-lg-5 pt-md-5 slide-in" style="margin-bottom:500px;">
        <h1 style="color:#EFA5AF;" class="slide-in">更多關於眾籌活動</h1><br>
        <div class="moreSmText slide-in pb-md-5" style="margin-top:-30px;">加入MOP官方Discord server 以關注更多</div><br>
        <b-img-lazy src="~/assets/sns/discord.png" class="discordLogo pt-lg-5 pt-md-5 slide-in"  /><br>
        <div class="moreSmText slide-in">@MOP official</div><br>
      </div>
    </div>

    <div id="about" style="height:100px;margin-top:-100px;" />

    <div class="about d-flex flex-column justify-content-center align-items-center w-100">
      <div class="aboutHeader">
      08 / ABOUT
      <h1>關於企劃組</h1>
      </div>
    </div>   
    
    <div class="w-100 d-flex flex-column justify-content-center align-items-center py-5">
      <ShowSvg name="Material_v3.6_01-0-Event-Logo_v3.1.svg" class="aboutCenterLogo" /> 
    </div>    
    <b-row class="w-100" no-gutters>
      <b-col cols=12 lg=6 class="p-5 d-flex justify-content-end align-items-center">
        <div class="moreMOP slide-in" style="cursor: pointer;" @mouseenter="mopMore=true" @mouseleave="mopMore=false" @click="orgMore='mop'">
          <div class="moreContent">
            <div class="h-100 d-flex flex-column justify-content-center align-items-center slide-in">
              <div style="margin-top:10%;margin-bottom:10%;">
                <b-img-lazy src="~/assets/logo/logo_original.png" class="mopLogo"  /><br>
                Mic On Project
              </div>
              <div class="w-50" style="color:#EFA5AF;font-weight:700;">
                查看更多
                <div class="d-flex justify-content-center align-items-center pt-2" >
                  <ShowSvg :name="mopMore?'Material v3.6_05-About-MicOn-VMore-MouseOver.svg':'Material v3.6_05-About-MicOn-VMore.svg'" class="moreButton" :class="mopMore?'btnAct':''" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols=12 lg=6 class="p-5 d-flex justify-content-start align-items-center">
        <div class="moreHKVIF slide-in" style="cursor: pointer;" @mouseenter="hkvifMore=true" @mouseleave="hkvifMore=false" @click="orgMore='hkvif'">
          <div class="moreContent">
            <div class="h-100 d-flex flex-column justify-content-center align-items-center slide-in">
              <div style="margin-top:10%;margin-bottom:10%;">
                <b-img-lazy src="~/assets/HKVidolLogo/1logo1.png" class="mopLogo pb-2"  /><br>
                香港虛擬偶像應援企劃組
              </div>
              <div class="w-50" style="color:#5A79BA;font-weight:700;">
                查看更多
                <div class="d-flex justify-content-center align-items-center pt-2" >
                  <ShowSvg :name="hkvifMore?'Material v3.6_05-About-HKVIF-VMore-MouseOver.svg':'Material v3.6_05-About-HKVIF-VMore.svg'" class="moreButton" :class="hkvifMore?'btnAct':''" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <MoreOrg :show.sync="orgMore" />
    <div class="w-100 d-flex flex-column justify-content-center align-items-center">
      <div style="width:75px;border-ridus:50%;" @mouseenter="toTop=true" @mouseleave="toTop=false" @click="scrollTop">
        <ShowSvg :name="toTop?'Material v3.6_99-BackToTop-MouseOver.svg':'Material v3.6_99-BackToTop.svg'" :class="toTop?'btnAct':''" />        
      </div>
      <div class="py-3"><h2>回到頂部</h2></div>
    </div>
   
  </div>
</div>
</template>

<script>
import ShowSvg from '~/components/ShowSvg.vue' 
import MoreV from '~/components/MoreV.vue' 
import MoreOrg from '~/components/MoreOrg.vue'
import News from '~/components/News.vue'
import{ db } from '@/services/firebase'
let cfRef=db.ref('cf')
export default {  
  name:'app',firebase:{
        cf:cfRef
  },  
  components:{
    ShowSvg,    
    MoreV,
    MoreOrg,  
    News  
  },
  data () {
    return {       
      pressCount:0,
      orgMore:'',
      showNews:'a',
      vMore:'',
      toTop:false,
      mopMore:false,
      hkvifMore:false,
      target:80000,
      now:0,      
      endDate:0,
      swiperOption: {
        speed: 3000,//スライドの切り替わりスピード
        centeredSlides: true,//スライダーを真ん中に
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true, //無限ループ
        autoplay: { //スライドの自動切り替え
          delay: 1000,//スライドの自動切り替えの秒数
          disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
        },
        breakpoints: {          
          1500:{
            slidesPerView: 3.5
          },
          800: {
            slidesPerView: 3,     
          },
          768: {
            slidesPerView: 1.5,     
          }
        }
      }, 
      images:[
        require('~/assets/memories/01.jpg'),
        require('~/assets/memories/02.jpg'),
        require('~/assets/memories/03.jpg'),
        require('~/assets/memories/04.jpg'),
        require('~/assets/memories/05.jpg'),
        require('~/assets/memories/06.jpg'),
        require('~/assets/memories/07.jpg'),
        require('~/assets/memories/08.jpg'),
        require('~/assets/memories/09.jpg'),
      ],
    }      
  },  
  async created(){
    const result = await cfRef.get('value').then( async (snapshot) => { 
      if (snapshot.exists()) 
        return snapshot.val() ;
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 
    if(result?.now)
      this.now=result.now;
  },
  methods: { 
    onClickShuP(){
      this.pressCount++;
      console.log(this.pressCount);
      if(this.pressCount%10==0){
         var audio = new Audio(require('~/assets/mp3/v.mp3').default); 
         audio.play()
      }
    },
    log(msg){
      console.log(msg)
    },
    goto(url){      
      if(process.browser){
        window.open(url, '_blank').focus();
      }
    },
    resize(url,width){
      if(process.browser){
        var img=require(url)
        var host='https://cf.miconproject.com'
        var fullPath=host+img
        return `https://cdn.statically.io/img/${fullPath}?w=${width}`
      }
      return
    },
    scrollTop(){
      if(process.browser){ 
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
        }
    },
    scrollTo(el){
        if(process.browser){
          var element = document.getElementById(el);
          var headerOffset = 45;
          var elementPosition = element.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
        }
    },
    scrollAnimation(){      
      if(process.browser){        
        var cellContents = document.querySelectorAll(".slide-in");
        for (var i = 0; i < cellContents.length; i++) {
          var windowHeight = window.innerHeight;       
          var elementTop = cellContents[i].getBoundingClientRect().top;
          var elementVisible = 10;
          if (elementTop < windowHeight - elementVisible) {
            cellContents[i].classList.add("active");    
          }
        }
        if(window.pageXOffset>0.1){
          window.pageXOffset=0;
        }
      }
      
      return false;
    },
  }, 
  watch:{   
    vMore(newVal){
      if(newVal&&process.browser){
        document.body.classList.add("stop-scrolling");
      }
    }
  }, 
  computed: {   
    leftDate(){
      var m = this.$moment("20230101", "YYYYMMDD");  // or whatever start date you have
      var today = this.$moment().startOf('day');
      var days = Math.round(this.$moment.duration(m - today).asDays());     
      return days;
    },
    processPresent(){
      return Math.floor(this.now/this.target*100*100)/100
    },
    processBar(){         
      var result=0;
      if(this.now<=15000){
        result= Math.floor(9/15000*this.now);
      }
      else if(this.now<=53000){
        var maxPre=27-9;
        var left=53000-15000;
        var nowLeft=this.now-15000;
        result = 9+Math.floor(maxPre/left*nowLeft);
      }
      else if(this.now<=60000){
        var maxPre=45-27;
        var left=60000-30000;
        var nowLeft=this.now-30000;
        result = 27+Math.floor(maxPre/left*nowLeft);        
      }
      else if(this.now<80000){
        var maxPre=63-45;
        var left=80000-60000;
        var nowLeft=this.now-60000;
        result = 45+Math.floor(maxPre/left*nowLeft);        
      }
      else result = 100;

      if(result==24) result=23;
      else if(result==57) result=58; 
      
      return result;
    }
  },   
  beforeDestroy() {    
    window.removeEventListener('scroll', this.scrollAnimation);   
  },
  mounted(){     
    if(process.browser){
      window.addEventListener('scroll', this.scrollAnimation);  
      this.scrollAnimation();   
      document.addEventListener('contextmenu', event => event.preventDefault());   
      document.addEventListener("keydown", e => {
        if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          e.preventDefault();          
        }
      }, false);
    }       
  },
  head() {
    return {
      title: "Mic On Project × 香港虛擬偶像應援企劃組",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid:'description',name:'description',content:'為慶祝 Mic On Project 成立兩周年和宣傳 Mic On Project 的未來活動發展，\n我們特意聯同「香港虛擬偶像應援企劃組」舉辦了是次眾籌活動，\n 望請各位能多多支持！'},         
      { hid:'keywords',name:'keywords',content:'mop,mic on project,Mic On Project,香港虛擬偶像應援企劃組,香港,vtuber,HKVtuber,眾籌,crowdfunding,crowd funding'},
      { hid:'apple-mobile-web-app-capable',name:'apple-mobile-web-app-capable',content:'yes'},  
      ]
    }
  }
}
</script>
<style> 
.updated{
  text-decoration-line: underline;
  text-underline-offset: 4px; 
  text-decoration-color: currentcolor;
  text-decoration-thickness: 2px;
}
.updatedLg{
  text-decoration-line: underline;
  text-underline-offset: 6px; 
  text-decoration-color: currentcolor;
  text-decoration-thickness: 2px;
}
.updatedSm{
  text-decoration-line: underline;
  text-underline-offset: 4px; 
  text-decoration-color: currentcolor;
  text-decoration-thickness: 1.5px;
}
.cell{
    position: relative;     
    width:100vw;  
  }
  .slide-in{
    position: relative;    
    -webkit-transform: translateY(150px);    
        -ms-transform: translateY(150px);    
            transform: translateY(150px);        
    filter: blur(4px);
    -webkit-filter: blur(4px);
    opacity: 0;
    -webkit-transition: 1s all ease;
    -o-transition: 1s all ease;
    transition: 1s all ease;
  }
  .slide-in.active{   
    filter: blur(0px);
    -webkit-filter: blur(0px);
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);    
    opacity: 1;
  }
  .text-slide-in{    
    -webkit-transform: translateY(50px);    
        -ms-transform: translateY(50px);    
            transform: translateY(50px); 
  }  
  .heading-eng{
    font-size:22px;
    white-space: nowrap;
  }
  .heading{
    font-size:70px;
    font-weight: 700;
    margin-top:-20px;
    white-space: nowrap;
  }
  /*header*/
  .smNav{
    width:100%;
  }
  .smNavPills{
    width:800px;
    max-width: 90%;
    font-size:20px;    
    background: white;
    font-weight: bold;
    border-style: solid;
    border-radius: 80px ;
    border-color: rgb(98,117,176);
    opacity: 0;
    -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
            transform: translateY(50px); 
    filter: blur(4px); 
    -webkit-filter:blur(4px);
    -webkit-animation-name: fade;
            animation-name: fade;  
    -webkit-animation-duration: 2s;  
            animation-duration: 2s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards; 
  }  

  .headerPage{
    min-height: 100vh;        
  }
  .centerLogo{
    min-height:60vh;
    width:100%;
    opacity: 0;
    -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
            transform: translateY(50px); 
    filter: blur(4px); 
    -webkit-filter:blur(4px); 
    -webkit-animation-name: fade; 
            animation-name: fade;  
    -webkit-animation-duration: 2s;  
            animation-duration: 2s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;  
    -webkit-animation-delay: 0.5s;  
            animation-delay: 0.5s;  
  }   
  @-webkit-keyframes fade {
    from {
        filter: blur(4px);
        -webkit-filter:blur(4px);
        opacity: 0;
        -webkit-transform: translateY(150px);
                transform: translateY(150px); 
      }
    to {
        filter: blur(0px);
        -webkit-filter: blur(0px);
        opacity: 1;
        -webkit-transform: translateY(0);
                transform: translateY(0);        
      }
  }   
  @keyframes fade {
    from {
        filter: blur(4px);
        -webkit-filter:blur(4px);
        opacity: 0;
        -webkit-transform: translateY(150px);
                transform: translateY(150px); 
      }
    to {
        filter: blur(0px);
        -webkit-filter: blur(0px);
        opacity: 1;
        -webkit-transform: translateY(0);
                transform: translateY(0);        
      }
  }
  .blacklogo{
    width:50%;    
  }
  /*end header*/
  /*about event*/
  
  .aboutText{
    line-height: 2em;
    font-weight: 500;
  }
  .box{
    width:90vw;
    min-height: 300px;
    background: white;
    border-radius: 15px;
  }
  .box {
   transform: translateZ(0);
  filter: drop-shadow(15px 15px 5px rgb(0 0 0 / 0.2));
    -webkit-filter:drop-shadow(15px 15px 5px rgb(0 0 0 / 0.2));
    -webkit-box-shadow: 15px 15px 5px rgb(0 0 0 / 0.0);
            box-shadow: 15px 15px 5px rgb(0 0 0 / 0.0);
  }  
  /*end about event*/

  /*event time*/
  .eventTime{
    position: relative;
  }
  .EventTimeBG{
    position: absolute;
    top:0;    
    width:80%;    
  }  
  .EventTimeBG > svg{
   transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.2));
    -webkit-filter:drop-shadow(10px 10px 5px rgb(0 0 0 / 0.2));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }

  .EventTimeText{
    z-index:2;
    width:60%;
  }
  .leftDayText{
    color:black;
  }
  .leftDayNumber{
    font-size:40px;
    font-weight:700;
  }
  .nowText{
    color:#5A79BA;
    font-weight:800;
  }
  .nowNumber{
    font-size:40px;
    font-weight:800;
  }
  .EventTimeBar{
    width:100%;
    height:50px;
  }
  .EventDate{
    color:black;
    font-weight: 800;
    font-size:45px;
  }
  .EventWeekDay{    
    font-weight: 800;
    font-size:24px;
  }
  .DateStart{
    color:rgb(90,121,186);
  }
  .DateEnd{
    color:#EFA5AF;
  }
  .AboutV{
    width:90vw;
    min-height: 300px;
    background: white;
    border-radius: 15px;
    position: relative;
    top:100px;
    filter:drop-shadow(0px 0px 5px rgb(0 0 0 / 0.2));    
    -webkit-filter:drop-shadow(0px 0px 5px rgb(0 0 0 / 0.2));    
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .AboutVHeader{
    font-weight: 800;
  }
  .card{
    border-radius: 30px !important;
    position: relative;
   transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.2));
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.2));
  }
  .card > .img{    
    -webkit-filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.3));
   transform: translateZ(0);
 filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 5px 5px 5px rgb(0 0 0 / 0.0);
            box-shadow: 5px 5px 5px rgb(0 0 0 / 0.0);
  }
  .sign{    
    width:30%; 
    position: absolute;
    bottom:30px;
    right:30px;
  }
  .aisu{
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    -webkit-transition-delay:0s;
         -o-transition-delay:0s;
            transition-delay:0s;
  }
  .nao{
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    -webkit-transition-delay:0.3s;
         -o-transition-delay:0.3s;
            transition-delay:0.3s;
  }
  .shizu{
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    -webkit-transition-delay:0.6s;
         -o-transition-delay:0.6s;
            transition-delay:0.6s;
  }
  .aisu > .card{
    background:rgb(193,231,255);
  }
  .nao > .card{
    background:rgb(247,212,217);
  }
  .shizu > .card{
    background:rgb(255,251,184);
  }
  .cardlogo{
    background: white !important;    
    height:130px;    
  }  
  .vlogo{
    padding:5px;
    -o-object-fit: scale-down;
       object-fit: scale-down;
    max-width:100%;
    max-height:100%;
  }
  .VmoreBG{
    height:50px;
    width:50px;
    border-radius: 50px;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
  }
  .Vmore{    
    height:50px;
    width:50px; 
    -webkit-mask-image: url("\assets\svg\Material v3.6_01_2-AboutV-VMore.svg");
    mask-image: url("\assets\svg\Material v3.6_01_2-AboutV-VMore.svg");
    mask-mode: match-source;
    -webkit-mask-mode: match-source;
    -webkit-mask-size: 50px;
    mask-size: 50px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat; 
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;  
  }    
  .Vmore:hover{
    -webkit-mask-size: 51px;
    mask-size: 51px;
  }
  .Vname{
    font-weight: 800;
  }
  .aisu .Vname{
    color:rgb(90,121,186);
  }
  .aisu .Vmore{
    background:rgb(90,121,186);
  }
  .aisu .VmoreBG:hover{
    background: rgb(90,121,186);
  }
  .aisu .Vmore:hover{    
    background:white;
  }

  .nao .Vname{
    color:rgb(239,165,175);
  }
  .nao .Vmore{
    background:rgb(239,165,175);
  }
  .nao .VmoreBG:hover{
    background:rgb(239,165,175);
  }
  .nao .Vmore:hover{
    background:white;
  }

  .shizu .Vname{
    color:rgb(255,225,77);
  }
  .shizu .Vmore{
    background:rgb(255,225,77);
  }
  .shizu .VmoreBG:hover{
    background:rgb(255,225,77);
  }
  .shizu .Vmore:hover{
    background:white;
  }
  /*end event time*/
  /*shu p word*/
  .shuP{    
    min-height:300px;    
  }
  .shuPHeader{
    width:90vw;     
  }
  .shuPHeaderBG{
    position:absolute;
    top:0;   
    right:4.5vw; 
    width:800px;
    max-width:90%;
  }
  .shuPHeaderBG > svg{
   transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .shuPHeaderText{
    position:absolute;
    top:0;
    right:4.5vw;    
    width:650px;
    color:white;
  }
  .shuPContent{
    width:90vw;    
    margin-top:5em;    
    z-index:2;
  }
  .shuPSpeach{
    font-weight: 700;
    line-height: 2.5em;
    width:90%; 
    font-size:18px;
  }
  .shuPContentLeft{
    width:75vw;        
    background:white;
    border-style: solid;
    border-radius: 30px ;
    border-color: rgb(90,121,186);    
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.3);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.3);
  }
  .shuPImg{
    margin-left:-200px;
    height:400px;
    width:400px;
    overflow: hidden;
    background:white;
    border-style: solid;
    border-radius: 100% ;
    border-color: rgb(193,231,255);
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  /*end shu p word*/
  /*slider*/
  .memText{
    font-size:46px;
    font-weight: 700;
    color:rgb(90,121,186);
  }
  .slider{   
    width:90vw;
    background:white;
    border-style: solid;
    border-radius: 30px ;
    border-color: rgb(90,121,186);
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
  }
  .slider:before{
    -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 0.3) inset;
            box-shadow: 0px 0px 10px rgb(0 0 0 / 0.3) inset;
  }
  .sliderContainer{
    width:100%;   
  }
  .sliderImage{
    max-height:100%;  
    max-width:100%;
  } 
  .sliderSwiper{    
    width:100%;
  } 
  /* end slider */
  /*target*/
  .target{    
    position: relative;      
  }
  .targetHeader{
    width:90vw;     
  }
  .targetHeaderBG{
    position:absolute;
    top:0;   
    left:4.5vw; 
    width:800px;
    max-width:90%;
  }
  .targetHeaderBG > svg{
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .targetHeaderText{
    position:absolute;
    top:0;
    left:4.5vw;    
    width:30%;
    color:white;
  }
  .targetContent{    
    width:90vw;    
    margin-top:8em;    
    z-index:2;
  }
  .targetContentLeft{       
    margin-left: auto;  
    margin-right: 0;
    width:75vw;        
    background:white;
    border-style: solid;
    border-radius: 30px ;
    border-color: rgb(90,121,186);
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
    
  }
  .targetRow{
    width:100%;
    padding-left: 20%;
  }
  .targetContentText{
    width:88%
  }
  .targetTextBig{
    font-weight: 700;
  }
  .targetTextBigMoney{
    font-size:32px;
  }
  .targetTextSmall{
    font-size:14px;
  }
  .targetTextOther{
    font-size:18px;
    white-space: nowrap;
  }
  /*end target*/
  /*process*/
  .process{
    position: relative;
  }
  .processBG1{
    position: absolute;
    top: 150px;
    right:0;
    width:90vw;
    height:100%;
  }
  .processBG1 > svg{
    -webkit-filter: drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 0px 0px 5px rgb(0 0 0 / 0.0);
            box-shadow: 0px 0px 5px rgb(0 0 0 / 0.0);
  }
  .processBG3{
    position: absolute;
    bottom: -100px;
    right:0;
    width:800px;
    max-width:100%;
  }
  .processBG3 > svg{
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .processBarContainer{
    width:90vw;    
    background: white;
    border-radius: 15px;
    position: relative;
    top:100px;
    -webkit-filter:drop-shadow(0px 0px 5px rgb(0 0 0 / 0.2));
            filter:drop-shadow(0px 0px 5px rgb(0 0 0 / 0.2));    
    margin-bottom:10% ;
  }
  .mProcessBarC *{
    line-height: 1.7rem;
  }
  .processBar{
    position: absolute;
    top:100px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .processBarNo{   
    width:150px;    
  }
  .processBarYes{    
    width:150px; 
    z-index:2;   
    -webkit-transition: 0.2s;   
    -o-transition: 0.2s;   
    transition: 0.2s;
  }
  .processSmText{
    color:#F7D4D9;
    font-size:20PX;
  }
  .processLgText{
    font-size:30PX;
    font-weight: 800;
    color:#C1E7FF;
  }
  .processSmText.active{
    color:#EFA5AF;    
  }
  .processLgText.active{      
    color:#5A79BA;
  }
  .text15000{
    position:absolute;
    top:12%;
    left:-25%;
  }  
  .text22000{
    position:absolute;
    top:31%;
    right:-25%;
  }
  .text60000{
    position:absolute;
    top:49%;
    left:-25%;
  }
  .text80000{
    position:absolute;
    top:67%;
    right:-25%;
  }  
  .over80000{
    z-index:3;
    font-size:30PX;
    font-weight: 800;
    text-align: center;
    color:#5A79BA;
    margin-top: -5%;
  }
  .Over80Bar{
    width:20px;
  }
  /*end process*/
  /*method */
  .method{
    width:100%;
    min-height:300px;
    position: relative;
  }
  .methodContainer{
    width:90vw;   
    margin-top:5em;
    z-index:2;
  }
  .methodMobileContent{
    width:85vw;
    border-radius: 30px;
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.3);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.3);
    background: white;
    margin-right: 0;
    margin-left:auto;
  }
  .methodHeaderBG{
    position:absolute;
    top:0;   
    left:4.5vw; 
    width:600px;
    max-width:50%;
  }
  .methodBG{
    margin-right:0;
    margin-left:auto;
    width:95vw;
  }
  .methodBG > svg{    
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));    
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .methodText{
    margin-top:5%;    
    width:88vw;
    position:absolute;
    top:0;
    right:0;
    color:white;
  }
  .methodList{
    margin-top:10%;
  }
  .methodListSm{
    font-size:24px;
  }
  .methodListLg{
    font-size:40px;
  }
  .methodListText{
    margin-top:2rem;
    margin-left:5rem;
    font-weight: 700;
  }
  .gogoForm{
    color:white;
  }
  .gogoForm:hover{
    color:grey;
  }
  /*end method*/
  /*souvenirs*/
  .souvenirs{
    position: relative; 
  }
  .souvenirsContainer{
    width:100%;
    margin-top: 15%;
    z-index:2;
    padding-bottom: 10%;
    margin-bottom: 15%;    
    background-image: url('\assets\svg\Material v3.6_04-Souvenirs-BG-2.svg');        
    background-position: right;
    background-size: 90vw 100%;
    background-repeat: no-repeat;
  }
  .souvenirsContentRight{
    width:95vw;
    margin-right: 0;
    margin-left: auto; 
    color:white;
    border-top-left-radius: 30px ;
    border-bottom-left-radius: 30px ;    
  }
  .souvenirsContentLeft{
    width:95vw;
    margin-right: auto;
    margin-left: 0; 
    color:white;
    border-top-right-radius: 30px ;
    border-bottom-right-radius: 30px ;    
  }
  .souvenirsCard{
    background: white;
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
    min-height: 100px;
    
  }
  .souvenirsCardContent{ 
    display: flex;
    flex-direction: column;  
    justify-content: center; 
    align-items: center;    
    color:#5A79BA;
    width:100vw;
  }
  .souvenirsContentRight>.souvenirsCardContent{
    margin-left:-5vw ;
  }
  .souvenirsContentLeft>.souvenirsCardContent{
    margin-right:-5vw ; 
  }
  .sContent{
    line-height:1.5em;
    width:70%;
  }
  .sMidText{
    font-size:20px;
  }
  .sSmText{
    font-size:16px;
  }
  .busImg{
    background:white;
    border-radius: 30px ; 
    border-style: solid;    
    border-color: #C3E5FF;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
-webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
        box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    padding: 10px;
  }   
  .aisuQ{    
    height:90%;
    border-radius: 30px ;     
    background:#C1E7FF;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    padding: 25% 5px;
  } 
  .aisuM{
     height:90%;
    border-radius: 30px ;     
    background:#C1E7FF;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;    
  }
  .aisuIg{    
    border-radius: 30px ;     
    background:#C1E7FF;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;   
    height:90%; 
    padding:10px;
  } 
  .aisuQText{
    color:#5A79BA;
    font-weight: 800;
  }
  .naoQ{    
    border-radius: 30px ;        
    background:#F7D4D9;  
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));  
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    height:90%;
   padding: 25% 5px;
  } 
  .naoM{
    border-radius: 30px ;        
    background:#F7D4D9;  
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));  
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    height:90%;   
  }
  .naoIg{    
    border-radius: 30px ;     
    background:#F7D4D9;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;   
    height:90%; 
    padding:10px;
  } 
  .naoQText{
    color:#EFA5AF;
    font-weight: 800;
  }    
  .shizuQ{    
    border-radius: 30px ;         
    background:#FFFAA1;  
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));  
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    height:90%; 
    padding: 25% 5px;
  }   
  .shizuM{
    border-radius: 30px ;         
    background:#FFFAA1;  
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));  
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    height:90%;     
  }
  .shizuIg{    
    border-radius: 30px ;     
    background:#FFFAA1;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;   
    height:90%; 
    padding:10px;
  } 
  .shizuQText{
    color:#FFE14D;
    font-weight: 800;
  }
  .aisuM,.naoM,.shizuM{
    padding:10%;
  }
  .sImg{    
    background: white;
    border-radius: 30px ; 
    border-style: solid;    
    border-color: #C3E5FF;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;    
  }
  .sImgc{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .s2582{
    line-height:1.5em;
    width:80%;    
  }
  .sRow{
    width:100%;
  }
  .scard{
    width:100%;
    height:100%;
    border-radius: 30px ; 
    border-style: solid;  
    padding:20px;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));  
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);  
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
    overflow: hidden;
    background: white;
  }
  .aisub{    
    border-color: #C3E5FF;      
  }
  .naob{
    border-color: #EDB7E3; 
  }
  .shizub{
    border-color: #FFFFB9; 
  }
  .scard.aisu{
    background: #C1E7FF;
  }
  .scard.nao{
    background: #F7D4D9;
  }
  .scard.shizu{
    background: #FFFAA1;
  }
  .standImg{
    position: absolute;
    bottom:20px;
    right:20px;
    height:32%;
  }
  .goods3682{
    border-radius: 30px ; 
    border-style: solid;  
    padding:100px;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    background: white;
  }
  .shuPGoods{   
    border-radius: 30px ; 
    border-style: solid;  
    padding:5%;   
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
           transform: translateZ(0);
    filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
    overflow: hidden;
    background: white;
  }
  .goodsList{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-top: -23%;
  }
  .goodsListContent{
    width:90vw;
    min-height: 500px;    
    position: relative;
  }
  .goodsListLTBG{
    position:absolute;
    top:0;
    left:0;
    width:40%;
    z-index:-1;
  }
  .goodsListRBBG{
    position:absolute;
    bottom:0;
    right:0;
    width:40%;
    z-index:-1;
  }
  .goodsListImg{
    width:80vw;
    z-index:2;
    margin: 5% 1%;
    padding-bottom: 2em;
    background: white;
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);  
    border-radius: 30px ; 
    border-style: solid; 
    border-color:#5A79BA;
    color:#5A79BA;
    overflow: hidden;
  }
  .more{   
    position: relative;
    margin-top: -2%;
    cursor: pointer;
  }
  .moreSmText{
    color:black;
    font-size: 18px;
    font-weight: 800;
  }
  .moreBG{
    position: absolute;
    top:0;
    width:1000px; 
    max-width: 80%;
  }
  .moreBG >svg{
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
  }
  .discordLogo{
    width:300px;
    max-width: 50%;
  }
  .sLeftTextContainer{
    display: block;
    height:100%;
    position: relative;
  }
  .sLeftText{
    display: block;
    position: sticky;
    position: -webkit-sticky;
    top:50%;
    transform: translate(-50%);
  }
  /*end souvenirs*/
  /*about*/
  .aboutHeader{
    text-align: center;
    color:#5A79BA;
  }  
  .aboutCenterLogo{
    height: auto;
    width: 40%;   
  } 
  .moreMOP{
    width:70%;
    padding-top:70%;
    border-radius:50%;
    border-color:#EFA5AF;
    border-style: solid;
    background: white;
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
    position: relative;
  }
  .moreHKVIF{
    width:70%;
    padding-top:70%;
    border-radius:50%;
    border-color:#6380BD;
    border-style: solid;
    background: white;
    -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
           transform: translateZ(0);
 filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
    -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
            box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
    position: relative;
  }
  .moreContent{
    width: 100%;
    position:  absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    text-align: center;
  }
  .mopLogo{
    width:80%;
  }
  .moreButton{
    width:20%;
  }
  .seeMore{
    margin-top:10%;    
  }
  .btnAct{
    opacity: 0;
    -webkit-animation-name: btn;
            animation-name: btn;  
    -webkit-animation-duration: 0.2s;  
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards; 
  }
  @-webkit-keyframes btn {
    from {        
        opacity: 0;        
      }
    to {        
        opacity: 1;                
      }
  }
  @keyframes btn {
    from {        
        opacity: 0;        
      }
    to {        
        opacity: 1;                
      }
  }
  @media only screen and (max-width: 991px){
    .moreHKVIF, .moreMOP{
      width:100%;
      padding-top:100%;
    }
  }
  /*end about*/
  @media only screen and (min-width: 1200px){
    .processBarContainer{
      top:40px;
      height:1530px;
    }  
    
  }
  @media only screen and (max-width: 1200px){
   .gogoForm{
      color:black;
    }     
  }   
  
  @media only screen and (max-width: 1510px){
    .EventDate{     
      white-space: nowrap; 
      font-size:32px;
    }
    .EventWeekDay{  
      white-space: nowrap;
      font-size:20px;
    }    
    .EventTimeBG{      
      width:90%;    
    } 
  }
  @media only screen and (max-width: 991px){
    .sImgs{  
      background: white;
      border-radius: 30px ; 
      border-style: solid;    
      border-color: #C3E5FF;   
      -webkit-filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));   
            transform: translateZ(0);
      filter: drop-shadow(10px 10px 5px rgb(0 0 0 / 0.3));
      -webkit-box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);
              box-shadow: 10px 10px 5px rgb(0 0 0 / 0.0);    
      overflow: hidden;       
    }
    .sImgc{
      display: initial;
    }
    .updated{     
      text-underline-offset: 2px;   
      text-decoration-thickness: 1.5px;   
    }
    .updatedLg{      
      text-underline-offset: 4px;           
    }
    .souvenirsContentRight>.souvenirsCardContent{
      margin-left:0 ;
    }
    .souvenirsContentLeft>.souvenirsCardContent{
      margin-right:0 ; 
    }
    .souvenirsCardContent{
      width:90vw;
    }
      .mopLogo{
      width:70%;
    }
    .aboutCenterLogo{
      width:90%;
    }
    .headerPage{
      min-height: 50vh;        
    }
    .smNavPills{
      font-size: 16px;
    }    
    .blacklogo{
      width:80%;    
    }
    .heading-eng{
      font-size:12px;
    }
    .heading{
      font-size:32px;
      font-weight: 700;
      margin-top:-10px;
    }
    .aboutText{
       font-size:14px;
    }
    .EventDate{      
      font-size:20px;
    }
    .EventWeekDay{  
      font-size:12px;
    }
    .shuPHeaderText{
      width:300px;
    }
    .shuPContentLeft{
      width:85vw;
    }
    .shuPSpeach{
      font-size:14px;
      width:100%;
      padding-bottom:150px;
    }
    .shuPImg{
      width:250px;
      height:250px;
      margin-right:0;
      margin-left:auto;
      margin-top:-150px;
    }
    .memText{
      font-size:30px;
    }
    .targetContent{
      margin-top:5em;
    }
    .targetContentLeft{
      width:85vw;
    }
    .targetTextBig{
      font-size:15px;
    }
    .targetTextBigMoney{
      font-size:15px;      
    }
    .targetRow{
      padding-left:0rem;
    }
    .targetTextOther{
      font-size:14px;
    }
    .leftDayText{
      font-size:16px;
    }
    .leftDayNumber{
      font-size:20px;
    }
    .nowText{
      font-size:16px;
    }
    .nowNumber{
      font-size:20px;
    }    
    .processSmText{
      font-size:14px;
    }
    .processLgText{
      font-size:16px;
      font-weight: 600;
    }
    .Over80Bar{
      width:14px;
    }    
    .methodListSm{
      color:#EFA5AF;
      font-size:16px;
      font-weight: 700;
    }
    .methodListLg{
      font-size:20px;
      font-weight: 700;
    }
    .methodListText{
      margin-top:0;
      margin-left:-30px;
      margin-right:-30px;
      font-size:16px;
    }
    .targetHeaderText{
      width:40%;
    }
    .souvenirsContainer{
      margin-top:5rem;
    }
    .souvenirsIntro{
      font-size: 16px;
    }
    h2 , h4{
      font-size:24px;
    }
    h1{
      font-size:30px;
    }
    .sContent{
      line-height:1.5em;
      width:90%;
    }
    .busImg{
      width:85vw;
    }
    .sImg , .sImgs{
      width:85vw;
    }
    .sMidText{
      font-size:16px;     
    }
    .sSmText{
      font-size:14px;
    }
    .aisuQ{
      padding:10px;
    }
    .naoQ{
      padding:10px;
    }
    .shizuQ{
      padding:10px;
    }
    .s2582{
      width:100%
    }
    .sRow{
      width:100%;      
    }
    .scard{
      padding: 10px;
    }
    .shuPGoods{
      padding: 20px;
      width:80vw;
    }
    .goods3682{
      padding: 20px;
      width:80vw;
    }
    .goodsListContent{
      min-height:auto
    }
    .moreSmText{
      font-size:12px;
    }
  }
  @media only screen and (max-width: 768px){
    .EventTimeText{
      width: 100%;
    }
    .AboutV{
      margin:-12%;
    }
    .AboutVHeader{
      font-size:14px;
    }
    .Vname{
      font-size:16px;
    }
    .vlogo{
      padding:1px;
    }
    .VmoreBG{
      height:30px;
      width:30px;
    }
    .Vmore{
      height:30px;
      width:30px;   
      -webkit-mask-size: 30px;
      mask-size: 30px;   
    }
    .Vmore:hover{
      -webkit-mask-size: 31px;
      mask-size: 31px;  
    }
    .memText{
      font-size:28px;
    }
    .moreBG{
      max-width:100%;
    }
  }
</style>
