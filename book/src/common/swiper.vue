<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(item,index) in list' :key='index'>
          <img :src="item.img" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import swiper from 'swiper'
import '../assets/common.css'
require('swiper/dist/css/swiper.min.css') 
export default {
    props:['list'],
    updated(){
        new swiper('.swiper-container',{
            autoplay:{
              disableOnInteraction:false,
            },
            loop:true,
            pagination:{
              el:'.swiper-pagination'
            },
        })
    }
};
</script>

<style lang='less'>//行内如果写scope则分页器的样式不会起效果！记住就好
  .swiper-container{
    height: 100%;
    .swiper-pagination-bullet{//次类名是分页器自行加上的
      background: #ffffff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{//次类名是显示的分页器的类名
      background: rgb(55, 199, 243);
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>