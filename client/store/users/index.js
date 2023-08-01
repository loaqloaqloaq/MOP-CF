import Cookie from 'js-cookie';
import {auth} from '@/services/firebase';
export const state = ()=>({
    user:null
});

export const mutations = {
    SET_USER: (state,account)=>{
        state.user=account;
    }
}

export const actions={
    async login({commit},account){
        try{
            //Login firebase
            await auth.signInWithEmailAndPassword(account.email , account.pw);

            //get token and store to cookie
            const token = await auth.currentUser.getIdToken();            
            Cookie.set('access_token',token);
            
            //set local
            const {email,uid}=auth.currentUser;
            commit('SET_USER',{email,uid});
        }catch(error){
            throw error;
        }
               
    },
    async register({commit},account){
        try{
            //Login firebase
            await auth.createUserWithEmailAndPassword(account.email , account.pw);
            
            //get token and store to cookie
            const token = await auth.currentUser.getIdToken();            
            Cookie.set('access_token',token);
            
            //set local
            const {email,uid}=auth.currentUser;
            commit('SET_USER',{email,uid});
        }catch(error){
            throw error;
        }
               
    },
    async loginWithGoogle({commit}){
        var provider = await auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            throw error;
            // ...
        });
        const token = await auth.currentUser.getIdToken();
        console.log(auth.currentUser)
    }
}