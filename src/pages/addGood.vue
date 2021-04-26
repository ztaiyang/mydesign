<template>
    <div class='addGood'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!-- <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item> -->
            <el-form-item label="品牌" prop="cate" >
                <el-select v-model="ruleForm.cate" placeholder="请选择商品品牌">
                <el-option label="361" value="361"></el-option>
                <el-option label="七匹狼" value="qpl"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否热销" prop="isHot">
                <el-switch v-model="ruleForm.isHot"></el-switch>
            </el-form-item>
             <el-form-item label="商品特点" prop="type"  v-if ="isMan">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox :label="item.val" name="type" v-for="item in shoesAttrMan" :key='item.id' >
                    {{item.val_zh}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
             <!-- <el-form-item label="商品特点" prop="type"  v-else>
                <el-checkbox-group v-model="ruleForm.type" >
                    <el-checkbox :label="item.val" name="type" v-for="item in shoesAttrWoman" :key='item.id+1' >
                    {{item.val_zh}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item> -->
             <!-- <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="适合人群" prop="gender">
                <el-radio-group v-model="ruleForm.gender" @change=changeAttr()>
                <el-radio label="man" >男性</el-radio>
                <el-radio label="woman" >女性</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="商品描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="添加数量" prop="number">
                <el-input-number v-model="ruleForm.num" :min="1"  label="数量"></el-input-number>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item> 
        </el-form>
    </div>
</template>

<script>
    export default {
         data() {
      return {
        ruleForm: {
          cate: '',
          isHot:'',
          desc: '',
          type: [],
          gender: '',
          shoesAttr: '',
          num:''
        },
        shoesAttrMan:[{id:1,val:'tuoxie',val_zh:'拖鞋'},{id:2,val_zh:"跑鞋",val:'paoxie'}],
        // shoesAttrWoman :[{id:5,val_zh:'高跟鞋',val:'gaogenxie',id:6,val_zh:'靴子',val:'xuezi'}],
        isMan:'',
        // shoesAttr:[],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeAttr(){
          console.log(this.ruleForm)
          if(this.ruleForm.gender == 'man'){
              this.isMan = true
          }else{
              this.isMan = false
          }
      }
    }
  }
    
</script>

<style lang="scss" scoped>
.addGood{
    width: 1440px;
    margin: 0 auto;
}
</style>