<template>
  <div id="app">
    <div id="nav">
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:'珠峰'
    }
  },
  created(){
    console.log(456)
  }
}
</script>




<style lang="less">//lang="less"代表可以写less样式
 

</style>
