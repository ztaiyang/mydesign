// 商品标准格式 图片+价格+描述

<template>
    <div >
        <p>--------------------------------------------------</p>
        <div class='gs-box'>
            <el-row>
  <el-col :span="24" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 15px;">
        <span>{{description}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

        </div>
        <p>-------------------------------</p>
        
    </div>
</template>

<script>
// description:封装组件中的描述信息,关于商品的描述的
// descript:父组件向子组件传递描述信息的自定义属性
    export default {
    props:{
        descript:String
    },
    data() {
    return {
      currentDate: new Date(),
      description:this.descript
    }
  },
  mounted(){
    // console.log('------------')
    // this.$http.fetchHome()
  }
    }
</script>

<style lang="css" scoped>
  
  .gs-box{
      width: 240px;
      height: 360px;
      padding: 10px;
      border: 1px solid #999;
      box-sizing: border-box;
 }
 .gs-box:hover{
   border: 1px solid red;
 }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>