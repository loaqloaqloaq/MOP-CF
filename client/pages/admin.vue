<template>
  <div class="p-5 m-5">
    Total:
    <b-form-input v-model.number="now" />
    <b-button @click="save()" variant="success" class="my-2">儲存</b-button><b-button @click="logout()" class="my-2 mx-2">Logout</b-button>
  </div>
</template>

<script>
import{ db } from '@/services/firebase'
let cfRef=db.ref('cf')
export default {
  name:'app',firebase:{
        cf:cfRef
  },
  data(){
    return{
      now:0,
    }
  },
  methods:{
    save(){
      cfRef.set({now:this.now});
      this.$toast.success("已存儲")
    },
     async logout() {
      await this.$fire.auth.signOut()
      this.$cookies.remove('uid')
      this.$router.push('/login')      
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
    else{
      cfRef.set({now:0});
    }
  }
}
</script>

<style>

</style>