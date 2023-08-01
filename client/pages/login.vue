<template>
  <div class="container p-5 m-5">
    <h2>Login</h2>
    <b-button type="submit" class="btn btn-primary" variant="primary" @click="signInWithGoogle">login with google</b-button><br>    
    <div v-if="isErr">
      {{errMsg}}
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data(){    
    return { 
      acc:{
        email:'',
        pw:''
      },
      isErr:false,
      errMsg:''
    }
  },
  methods:{
    async signInWithGoogle() {
      var provider = new this.$fireModule.auth.GoogleAuthProvider();
      // You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      let authData = await this.$fire.auth.signInWithPopup(provider).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token)
        return user.uid        
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      }).catch(error=>console.log(error));      
      this.$cookies.set('uid', authData, {
        path: '/',
      })
      
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
