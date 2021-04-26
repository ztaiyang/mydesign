<template>
    <div class='home-box'>
        <div class='search-box'>
            <el-input 
            class = 'search-input'
            v-model="searchInput" 
            placeholder="请输入内容"
            >
             </el-input>
            <el-button
            class='search-button' 
            @click="search()" 
            placeholder="请输入内容"
            >
            搜索
            </el-button>

        </div>
        <Swiper />  
        <h1>这里是首页</h1>
        <router-link to='Login'>我要去登录页</router-link>
        <router-link to='Register'>我要去注册页</router-link>
        <router-link to='Result'>我要去结果</router-link>
        <router-link to='Cart'>我要去详情</router-link>
        <hr>
        <router-link to='/addGood/:id'>去新增页面</router-link>
        <hr>
        <router-link to='ShoppingCart'>购物车</router-link>
        <router-link to='Me'>我的</router-link>
        <GoodStandard />
    </div>
</template>

<script>
import {GoodStandard,Swiper} from '../components/index'
    export default {
        components:{
            GoodStandard,
            Swiper
        },
      
        data(){
            return {
                searchInput:""

            }
        },
        methods:{
            search(){
                console.log(this.searchInput)
            }
        }
    }
</script>

<style lang="scss" scoped>
.home-box{
    width: 1440px;
    margin: 0 auto;
}
.search-box{
padding:20px;
width:1000px;
margin:0 auto;
.search-input{
width:700px;
margin-right:20px
}
.search-button{
width:60px;
height:40px;
padding: 0 5px;
}
}

</style>