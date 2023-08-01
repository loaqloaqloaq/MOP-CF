<template>
    <div v-if="show!=''" class="overLay" >
      <div class="overLayBackDrop"  @click="$emit('update:show', '')"  />      
      <div class="newsContent px-lg-5 py-lg-4 p-4"> 
         <div class="closeBtn" @click="$emit('update:show', '')">
          <b-img src="~/assets/svg/Material v3.6_01_2-AboutV-VMore-POP-Close.svg" fluid />
        </div>
        <div class="title">最新消息</div>
        updated @20221028：<br>
        綜合各位的寶貴意見後，我們已對是次的眾籌目標以及眾籌紀念品作出重大調整，包括：<br>
        <ol>
          <li>
            由原有的Mic On Project 官方巴士及官方巴士燈箱廣告目標 更改為 Mic On Project 兩周年紀念實體演唱會的目標
          </li>
          <li>
            增設及改善有關是次眾籌紀念品的安排
          </li>
        </ol>        
        *詳情請留意下方的細節描述及我們的最新消息<br>
        **底線為已更新或增設事項
        <div class="br" />
        另外對於此重大調整，我們亦會提供全數退款的選項。<br>
        若已支持是次眾籌者希望全數退款，可以Discord聯絡 桜井芳樹P#0538 以作安排。<br>
        <div class="br" />
        感謝你對Mic On Project的支持 
      </div>
    </div>
</template>

<script>
export default {
    props: {
        show:{
            type:String
        },        
    },
    data(){
      return{  
      }
    },
    methods:{
      goto(url){
        if(process.browser){
          window.open(url, '_blank').focus();
        }
      },      
    },
    watch:{      
    }
}
</script>

<style>
  .br{
    height: 1rem;
    line-height: 1rem;
  }
  .overLay{
    position: fixed;
    top:0;
    left: 0;
    height:100vh;
    width:100vw;
    z-index:99;
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
  .newsContent{
    position: relative;
    width:65vw; 
    font-size:16px;
    line-height: 1.5rem;
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
  .title{
    font-size: 25px;
    font-weight: 600;
    color:#6380BD;
    margin-bottom:10px;
  }
  @media only screen and (max-width: 991px){
    .newsContent{
      width:85vw; 
      max-height:85vh;     
      font-size:12px;
      line-height: 1.5rem;
    } 
    .title{
      font-size: 14px;
      font-weight: 600;
      color:#6380BD;
      margin-bottom:10px;
    }   
  }
</style>