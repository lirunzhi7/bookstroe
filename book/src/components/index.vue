<template>
    <div>
        <div class="content_box">
            <router-view></router-view>
        </div>
        <div class="footer_btn">
            <router-link to='/home'><div class="iconfont icon-home"></div>首页</router-link>
            <router-link to='/list'><div class="iconfont icon-interface3"></div>列表页</router-link>
            <router-link to='/collect'><div class="iconfont icon-collect"></div>收藏页</router-link>
            <router-link to='/add'><div class="iconfont icon-add"></div>添加</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
    .footer_btn{
        border-top:1px solid #ccc;
        box-shadow: 1px 0 16px 0 #ccc;
        padding-top:0.2rem;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        font-size:0.7rem;
        display: flex;
        background: #ccc;
        a{
            flex:1;
            text-align: center;
            text-decoration: none;
            div{
                font-size: 1rem;
            }
        }
        a.current{
            color:red;
        }
    }
    .content_box{
        font-size:1rem;
    }
</style>