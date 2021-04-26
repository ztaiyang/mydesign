<template>
    <div class='addGood'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品品牌" prop="cate" >
                <el-select v-model="ruleForm.cate" placeholder="请选择商品品牌">
                <el-option label="361" value="361"></el-option>
                <el-option label="七匹狼" value="qpl"></el-option>
                <el-option label="安踏" value="anta"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品现价￥" prop="price" >
                <el-input-number v-model="ruleForm.price" :min="1"  ></el-input-number>
            </el-form-item>
             <el-form-item label="商品原价￥" prop="oldPrice" >
                <el-input-number v-model="ruleForm.oldPrice" :min="1"  ></el-input-number>
            </el-form-item>
            <el-form-item label="商品图片" prop="img">
              <el-upload
              action="/api/upload/img"
              list-type="picture-card"
              :limit=1
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="changeload"
              >
              <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="适合人群" prop="gender">
                <el-radio-group v-model="ruleForm.gender" @change="changeAttr">
                <el-radio label="man" checked>男性</el-radio>
                <el-radio label="woman" >女性</el-radio>
                </el-radio-group>
            </el-form-item>
           
             <el-form-item label="商品特点" prop="shoesAttr" v-if="isMan">
                <el-checkbox-group v-model="ruleForm.shoesAttr">
                    <el-checkbox :label="item.val" name="shoesAttr" v-for="item in shoesAttrMan" :key='item._id' >
                    {{item.val_zh}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
             <el-form-item label="商品特点" prop="shoesAttr" v-else>
                <el-checkbox-group v-model="ruleForm.shoesAttr" >
                    <el-checkbox :label="item.val" name="shoesAttr" v-for="item in shoesAttrWoman" :key='item._id' >
                    {{item.val_zh}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
             <el-form-item label="是否热销" prop="isHot">
                <el-switch v-model="ruleForm.isHot"></el-switch>
            </el-form-item>
            <el-form-item label="添加数量(件)" prop="number">
                <el-input-number v-model="ruleForm.num" :min="1"  label="数量"></el-input-number>
            </el-form-item>
             <el-form-item label="商品描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加商品</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="goHome">去首页</el-button>
                
            </el-form-item> 
          
        </el-form>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
         data() {
      return {
        ruleForm: {
          cate: '',
          isHot:false,
          desc: '',
          gender: 'man',
          shoesAttr: [],
          num:'',
          img:'',
          price:1,
          oldPrice:1,
        },
        shoesAttrMan:[],
        shoesAttrWoman:[],
        isMan:true,
        rules: {
          cate: [
            { required: true, message: '请选择商品品牌', trigger: 'change' }
          ],
          price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' }
          ],
          shoesAttr: [
            { type: 'array', required: true, message: '请至少选择一个鞋子特点', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选适合的人群', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.$http.fetchManShoesAttr({}).then(res=>{
        this.shoesAttrMan = res.data
      })
      this.$http.fetchWomanShoesAttr({}).then(res=>{
        this.shoesAttrWoman = res.data
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.$http.fetchAddGood(this.ruleForm).then(res=>{
                if(res.err == 0){
                this.$msgbox({
                   message:'添加成功',
                   type:'success'
                 })
                 this.$refs['ruleForm'].resetFields()
                 this.$router.go(0)
              }else{
                this.$msgbox({
                   message:"添加失败",
                   type:'warning'
                 })
              }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        console.log(formName)
        this.$refs[formName].resetFields();
      },
      changeAttr(){
        this.isMan = !this.isMan
          console.log(this.ruleForm)
      },
      handleRemove() {
        $('.el-upload--picture-card').css({"display":"block"})
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      changeload(res){
        //图片上传成功时的操作
        $('.el-upload--picture-card').css({"display":"none"})
        //将图片在服务器的地址赋值给ruleForm.img
        this.ruleForm.img = res.data.url
    },

    goHome(){
      this.$router.push('/')
    }
  }
    }
</script>

<style lang="scss" scoped>
.addGood{
    width: 1440px;
    margin: 0 auto;
    padding: 50px 0;
    // background: #ccc;
}
</style>