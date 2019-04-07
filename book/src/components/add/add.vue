<template>
    <div class="add">
        <contentdata></contentdata>
        <my-title til='添加页'></my-title>
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import contentdata from './content.vue'
    export default {
        components:{
            'my-title':title,
            contentdata
        }
    }
</script>

<style scoped>

</style>