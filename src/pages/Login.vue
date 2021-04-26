<template>
    <div class='login-con'>
       <div class='login-box'> 
             <!-- <router-link to='Login'>我要去登录页</router-link> -->
            <el-form  
            status-icon
            label-width="80px"  
            :label-position="labelPosition" 
            :model="ruleForm" :rules="rules" 
            ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="手机号" prop='phoneNumber'>
                    <el-input v-model="ruleForm.phoneNumber" clearable ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop='password'>
                    <el-input v-model="ruleForm.password" type='password' clearable show-password ></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
                    <el-button @click="resetForm('ruleForm')" >重置</el-button>
                    <el-button @click="gotoRegister()" size='mini'>还没帐号,立即注册</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        labelPosition: 'right',
        ruleForm: {
          phoneNumber: '',
          password: ''
        },
         rules: {
          phoneNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {pattern :/^1[345789]\d{9}$/, message:'请输入正确手机号',trigger:'blur'}
          ],
         password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
         }
      };
    },
    methods:{
        submitForm(formName){
             this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.fetchLogin(this.ruleForm).then(res=>{
              if(res.err == 0){
                this.$msgbox({
                   message:res.msg,
                   type:'success'
                 })
              }
              if(res.err == 1){
                 this.$msgbox({
                   message:res.msg,
                   type:'warning'
                 })
               }
               localStorage.setItem('token',res.data.token)
               this.$router.replace('/')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
        resetForm(formName){
             this.$refs[formName].resetFields();
             console.log(this.$http)
        },
        gotoRegister(){
            this.$router.replace('/Register')
        }
    }
    }
</script>

<style lang="css" scoped>
.login-con{
    position: relative;
}
.login-box{
    height: 400px;
    width: 500px;
    position: fixed;
    left:50%;
    top: 50%;
    margin-left:-250px;
    margin-top: -200px;
}
 
</style>