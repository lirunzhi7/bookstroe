<template>
    <div class="title">
        {{til}}
    </div>
</template>

<script>
    export default {
        props:['til']
    }
</script>

<style scoped lang='less'>
    .title{
        z-index: 999;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 1.5rem;
        background: blueviolet;
        font-size: 0.6rem;
        color: white;
        line-height: 1.5rem;
        text-align: center;
    }
</style>