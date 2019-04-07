<template>
    <div class="home">
        <my-title til='首页'></my-title>
        <div class="swiper_box">
            <my-swiper :list='banner'></my-swiper>
        </div>
        <my-book></my-book>
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import swiper from '@/common/swiper.vue'
    import hootbook from './hotbook.vue'
    export default {
        data(){
            return {
                banner:'',
            }
        },
        created(){
            this.$store.dispatch('getbanner',(data)=>{
                this.banner = data
            })
        },
        components:{
            'my-title':title,
            'my-swiper':swiper,
            'my-book':hootbook
        }
    }
</script>

<style scoped lang='less'>
    .home{
        padding-bottom: 2.4rem;
    }
    .swiper_box{
        width: 100%;
        height: 5rem;
        background: #666;
        margin-top: 1.5rem;
    }
</style>