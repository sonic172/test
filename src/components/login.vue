<template>
    <div class="login_class">
       <div class="login_box">
           <div class="login_png">
               <img src="../assets/logo.png" alt="">
           </div>
           <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="70px" class="login_from">
            <el-form-item  label="用户名" prop="username">
                <el-input  v-model="loginForm.username" prefix-icon="el-icon-search" ></el-input>
            </el-form-item>
            <el-form-item  label="密码" prop="password">
                 <el-input  v-model="loginForm.password" prefix-icon="el-icon-search"  type="password"></el-input>
            </el-form-item>
            <el-form-item class="login_btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item >
           </el-form>
       </div>

    </div>
</template>
<script>
export default {
    data() {
        return{
            loginForm:{
                username:'ss',
                password:'1234'
            },
            rules: {
                username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 16, message: '长度在 3 到 16个字符', trigger: 'blur' }
          ],
                password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }
          ]}
        }
    },
    methods:{
        resetLoginForm(){
            // console.log(this)
            this.$refs.loginFormRef.resetFields();
        },
        login(){
        this.$refs.loginFormRef.validate(valid => {
            if(!valid)return;})
        
        }
    }
    
}
</script>
<style lang="less" scoped>
.login_class{
    
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    position: absolute ;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 300px;
    width: 400px;
    border-radius: 0.025rem;
    background-color: #fff;

    .login_btns{
        display: flex;
        justify-content: flex-end;
    }
}
.login_png{
    position: absolute;
    left: 50%;
    transform: translate(-50% ,-50%);
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    
}
.login_from{
        position: absolute;
        bottom: 0;
        width: 90%;
       padding:0 20px;
       box-sizing: border-box;
    }
</style>