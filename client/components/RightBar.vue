<template>
  <div class="rightBar" id='rightBar'>
    <div class="dots" @mouseenter="hover=true" @mouseleave="hover=false">

      <div id="index01" class="dotC d-flex justify-content-end align-items-center active" @click="scrollTop()">
        <transition><div v-if="hover" class="dotText pr-3">概略</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

      <div id="index02" class="dotC d-flex justify-content-end align-items-center" @click="scrollTo('aboutEvent')">
        <transition><div v-if="hover" class="dotText pr-3">關於眾籌活動</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

      <div id="index03" class="dotC d-flex justify-content-end align-items-center" @click="scrollTo('target')">
        <transition><div v-if="hover" class="dotText pr-3">眾籌目標</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

      <div id="index04" class="dotC d-flex justify-content-end align-items-center" @click="scrollTo('process')" >
        <transition><div v-if="hover" class="dotText pr-3">眾籌進度</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

      <div id="index05" class="dotC d-flex justify-content-end align-items-center" @click="scrollTo('souvenirs')">
        <transition><div v-if="hover" class="dotText pr-3">眾籌紀念品</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

      <div id="index06" class="dotC d-flex justify-content-end align-items-center" @click="scrollTo('about')">
        <transition><div v-if="hover" class="dotText pr-3">關於企劃組</div></transition>
        <div class="dot d-flex justify-content-center align-items-center">
          ・
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {    
  data(){    
    return {    
      hover:false,
    } 
  },
  methods:{
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
    checkVisible(){      
      if(process.browser){
        var parts=['header','aboutEvent','target','process','souvenirs','about']
        parts.forEach((part,index)=>{
          var element = document.getElementById(part)
          var elementTop;
          if(element) elementTop = element.getBoundingClientRect().top;
          var windowHeight = window.innerHeight; 
          var elementVisible = 10;
          if (elementTop < windowHeight - elementVisible) {
            document.querySelectorAll("[id^='index']").forEach(el=>{
              if(el.id!='index0'+(index+1)) el.classList.remove("active")
            });
            document.getElementById('index0'+(index+1)).classList.add("active");    
          }
        })        
      }
    }
  },
  beforeDestroy() {    
    window.removeEventListener('scroll', this.checkVisible);   
  },
  mounted(){     
    if(process.browser){
      window.addEventListener('scroll', this.checkVisible);  
      this.checkVisible();      
    }       
  },
}
</script>

<style scoped>
  .rightBar{
    position: fixed;
    top:50%;
    right:60px;
    transform: translateY(-50%);
    z-index:3;      
  }
  .dot{
    font-size: 40px;
    width:50px;
    height:50px;    
    margin: 2vh 0;
    color:#444444;
    border-radius: 50%;    
    transition: 0.2s; 
  } 
  .dotText{    
    font-size:16px;
    color:#444444;
  } 
  .active .dotText{
    color:#222222;
  }
  .active>.dot{    
    color:#222222;
    border-style:solid;
    border-color:#222222;
  }  
  .dot:hover{
    color:#444444;
  }
  .active>.dot:hover{
    color:#222222;    
    border-color:#222222;
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>


