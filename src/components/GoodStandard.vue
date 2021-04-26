// 商品标准格式 图片+价格+描述

<template>
    <div >
        <div>
              <el-col :span="24" class='gs-box' v-for = " item in dataList" :key='item._id' >
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="urlbase+item.img" class="image">
                  <div style="padding: 15px;">
                    <span>{{item.desc}}</span>
                    <div class="bottom clearfix">
                    <p>
                      <span v-text='yuan+item.price' class='price'></span>
                      <span v-text = yuan+item.oldPrice class='oldPrice'></span>
                    </p>
                      
                    </div>
                  </div>
                </el-card>
              </el-col> 
              </div>
    </div>
</template>

<script>

    export default {
    data() {
    return {
      currentDate: new Date(),
      dataList:[],
      urlbase:"http://localhost:3000",
      yuan:'￥'
    }
  },
    created(){
            this.$http.fetchGood({}).then(res=>{
                this.dataList = res.data
            })
        },
  mounted(){
    
  }
    }
</script>

<style lang="css" scoped>
  .gs-box{
      width: 240px;
      height: 405px;
      padding: 10px;
      border: 1px solid #999;
      box-sizing: border-box;
      margin-left: 40px;
      margin-bottom: 20px;
 }
 .gs-box:hover{
   border: 1px solid red;
   cursor: pointer;
 }
 .price{
   color: red;
   font-size: 18px;
   line-height: 24px;
 }
 .oldPrice{
   color: #9b9b9b;
   font-size: 14px;
   text-decoration: line-through;
   margin-left: 8px;
   line-height: 19px;
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