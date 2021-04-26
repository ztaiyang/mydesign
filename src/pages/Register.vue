<template>
    <div class='register-con' >
        <div class='register-box '> 
             <!-- <router-link to='Login'>我要去登录页</router-link> -->
            <el-form  
            status-icon
            label-width="80px"  
            :label-position="labelPosition" 
            :model="ruleForm" :rules="rules" 
            ref="ruleForm" >
                <el-form-item label="手机号" prop='phoneNumber'>
                    <el-input v-model="ruleForm.phoneNumber" clearable placeholder="+86"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop='password'>
                    <el-input v-model="ruleForm.password" type='password' clearable show-password placeholder="6-18位大小写字母和数字的组合,无特殊字符 "></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop='passwordAgain'>
                    <el-input v-model="ruleForm.passwordAgain" type='password' clearable show-password placeholder="6-18位大小写字母和数字的组合,无特殊字符 "></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="submitForm('ruleForm')" >注册</el-button>
                    <el-button @click="resetForm('ruleForm')" >重置</el-button>
                    <el-button @click="gotoLogin()" size='mini'>已有帐号,立即登录</el-button>
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
          password: '',
          passwordAgain: ''
        },
         rules: {
            //  /^1[3456789]d{9}$/
          phoneNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' },
            {pattern :/^1[345789]\d{9}$/, message:'请输入正确手机号',trigger:'blur'}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {pattern :/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/,message:'请输入正确格式的密码',trigger:'blur'}
          ],
          passwordAgain: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            // { min: 6, max: 18, message: '请输入6-18位的密码', trigger: 'blur' },
            {pattern :/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/,message:'请输入正确格式的密码',trigger:'blur'}
          ],
         }
      };
    },
    methods:{
        submitForm(formName){
             this.$refs[formName].validate((valid) => {
          if (valid) {
           let password = this.ruleForm.password
           let passwordAgain = this.ruleForm.passwordAgain
           if(password == passwordAgain){
             //发送请求:注册
             this.$http.fetchRegister(this.ruleForm).then(res=>{
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
               this.$router.replace('/Login')
             })
           }else{                   
             this.$msgbox({
               message:"两次密码不一样",
               type:'warning',
             })
           }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
        resetForm(formName){
             this.$refs[formName].resetFields();
        },
        gotoLogin(){
            this.$router.replace('/Login')
        }
    }
  }
    
</script>

<style lang="css" scoped>
register-con{
    position: relative;
}
.register-box{
    height: 400px;
    width: 500px;
    position: fixed;
    left:50%;
    top: 50%;
    margin-left:-250px;
    margin-top: -200px;
}
 .el-message-box__message p{
   /* color: red; */
   font-size: 18px;
 }


</style>