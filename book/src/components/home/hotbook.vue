<template>
    <div class="hootbook">
        <h2>热门图书</h2>
        <ul>
            <li v-for='(intem,index) in list' :key="index">
                <img :src="intem.img" alt="">
                <h4>{{intem.title}}</h4>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:''
            }
        },
        created(){
            this.$store.dispatch('gethotbook',(data)=>{
                this.list = data
            })
        }
    }
</script>

<style scoped lang='less'>
    .hootbook{
        h2{
            font-size: 1rem;
            color: red;
        }
        ul{
            overflow: hidden;
            li{
                width: 5rem;
                float: left;
                text-align: center;
                h4{
                    font-size: 0.5rem;
                }
            }
        }
    }
</style>