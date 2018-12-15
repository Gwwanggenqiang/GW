<template>
    <div class="app-login">
        <h1>登录</h1>    
        <form action="#">
            用户名：<input type="text" id="uname" v-model="unameval"><br>
            密码：<input type="password" id="upwd" v-model="upwdval"><br>
            <input type="button" id="btn" value="登录" @click="btnSubmit"><br>
        </form>
    </div> 
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                unameval:"",
                upwdval:""
            }
        },
        methods:{
            btnSubmit(){
                var u=this.unameval;
                var p=this.upwdval;
                this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
                    if(result.body.code == 1){
                        Toast(result.body.msg);
                        this.$router.push("/");
                    }else{
                        Toast(result.body.msg); 
                    }
                })
                //console.log(11)
            }
        }
    }
</script>
<style>
    
</style>