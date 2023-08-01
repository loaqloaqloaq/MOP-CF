export default ({store,route,redirect,app})=>{
    const user = app.$cookies.get('uid')||'';
    const blocked = /\/admin\/*/g;
    const modList=['wSHs8cqXSMVFc0KvgHJ5la1JuIT2','TCi3OpYhvLV2AsUx6l0VlmRl28b2','mtaywF9ZN1gUNZdlOoe7ZO3JONA2']
    const isMod= modList.includes(user);
    if(!isMod && route.path.match(blocked)){
       return redirect('/login');
    }
    
}