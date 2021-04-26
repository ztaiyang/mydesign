<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in list" :key="item._id">
       <img :src= "baseurl+item.src" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
// import $ from 'jquery'

    export default {
        data(){
            return{
                list:[],
                baseurl:"http://localhost:3000" //服务器地址前缀 + upload/swiper-1.png
            }
        },
        created(){
            this.$http.fetchSwiper().then(res=>{
                    this.list = res.data
                console.log("created",this.list)
            })
            
        },
        beforeMount(){
        },
        mounted(){
        },
        methods:{
        }
    }
</script>
<style>
img{
    height: 100%;
    width: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>