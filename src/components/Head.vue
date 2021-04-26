<template>
    <div id="menu_wrap">
          <div id="menu_logo">
              <router-link to="/"><img style="width:45px;height:45px" src="/img/logo.png"></router-link>
              <img class="img-top-ad" src="/img/top.gif">
          </div>
          <div id="menu_nav">
              <ul>
                  <li>----------------</li>
                  <!-- <li v-for="(item,index) in topSecondLink" :key="index" class="menu_li"><router-link :to="item.url">{{item.name}}</router-link></li> -->
              </ul>
          </div>
          <div id="find_wrap">
              <div id="find_bar">
                  <input type="text">
                  <!-- <input v-model="key" type="text" id="find_input"> -->
              </div>
              <div id="find_but" @click="search">GO</div>
          </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
  body{
    margin: 0;
  }
</style>
<style scoped lang="scss">
    a.shop-link {
        display: flex;
    }
    .shop-title{
        line-height: 20px;
        color: #424242;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px;
        width: 87px;
    }
    .shop-name:hover{
        color: #FF6700;
    }
    /*购物车浮动效果*/
    .head_box #head_wrap #head_right #head_car #car_content{
        display: none;
    }
    .head_box #head_wrap #head_right #head_car:hover #car_content{
        display: block;
    }
    .head_box #head_wrap #head_right #head_car:hover{
        background: #ffffff;
    }
    .head_box #head_wrap #head_right #head_car:hover a{
        color: #FF6700!important;
    }
    .login-name{
        position: relative;
        .login-nickname {
            margin-right: 10px;
            display: flex;
            align-items:center;
            width: 110px;
            justify-content: center;
        }
        .login-nickname div {
            margin-right: 13px;
        }
        .user-menu-wrapper {
            background: #fff;
            position: absolute;
            display: none;
            top: 40px;
            z-index: 16;
            overflow: hidden;
            -webkit-transition: height .3s;
            transition: height .3s;
            -webkit-box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .15);
            box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
        }
        .user-menu li{
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .user-menu {
            width: 110px;
            margin: 0;
            padding: 7px 0;
            list-style-type: none;
        }
        .user-menu a{
            color:#b0b0b0;
        }
        .user-menu li:hover{
            background: #f5f5f5;
        }
        .user-menu li:hover a{
            color: #FF6700!important;
        }
    }
    .login-name:hover .login-nickname{
        color: #FF6700;
        background: #fff;
    }
    .login-name:hover .user-menu-wrapper{
        display: block;
    }

    .site-topbar .user-menu a {
        display: block;
        padding: 3px 30px;
        line-height: 2;
    }
    .site-topbar a {
        color: #b0b0b0;
        line-height: 40px;
        display: inline-block;
    }

    #car_content{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
        display: table;
    }
    a.head_car_text {
        color: #ffffff;
    }
    .bottom-left {
        line-height: 20px;
    }
    .shop-item img {
        width: 60px;
        height: 60px;
        padding: 8px;
    }
    .shop-list {
        position: relative;
        background: #ffffff;
        width: 316px;
    }
    .shop-item {
        display: flex;
        align-items: center;
    }
    .shop-item img{
        width: 60px;
        height: 60px;
        padding: 8px;
    }
    .shop-num {
        font-size: 12px;
    }
    .shop-price {
        color: #ff6700;
        font-size: 20px;
    }
    .bottom-sum {
        background: #ff6700;
        color: #ffffff;
        width: 132px;
        height: 40px;
        margin-left: 70px;
    }
    .shop-bottom {
        background: #fafafa;
        width: 316px;
        display: flex;
        justify-content: center;
        padding: 7px;
    }
    .shop-title {
        line-height: 22px;
    }
      #head_landing .head_nav_a {
        margin: 6px;
          color: #b0b0b0;
      }
  /*底部服务*/
  .footer-service {
    height: 20px;
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .list-service {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .list-service li:first-child {
    border-left: 0;
  }
  .list-service li {
    float: left;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .list-service a {
    color: #616161;
    -webkit-transition: color .2s;
    transition: color .2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-service a:hover{
    color: #FF6700;
    text-decoration: none;
  }
  li.menu_li a {
      color: #333;
  }
  li.menu_li a:hover{
      color: #FF6700;
      text-decoration: none;
  }
</style>
