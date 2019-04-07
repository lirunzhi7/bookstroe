<template>
    <div class="collect">
        <div>
            <colldata></colldata>
        </div>
        <my-title til='收藏页'></my-title>
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import colldata from './colldata.vue'
    export default {
        components:{
            'my-title':title,
            colldata
        },

    }
</script>

<style scoped lang='less'>
    .collect{
        padding: 1.7rem 0 2rem 0;
    }
</style>