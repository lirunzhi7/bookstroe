<template>
    <div class="list">
        <div class='box' v-for="(item,index) in data2" :key='index'>
            <div class="left">
                <img :src="item.bookCover" alt="">
            </div>
            <div class="right">
                <h4>{{item.bookName}}</h4>
                <p class="desc">{{item.bookInfo}}</p>
                <p class="price">${{(item.bookPrice/100).toFixed(2)}}</p>
                <div class="btn_box">
                    <button @click='fn2(item)'>删除</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 
            }
        },
        computed:{
            data2(){
                return this.$store.state.data
            }
        },
        methods:{
            fn2(val){
                this.$store.state.data = this.$store.state.data.filter(item=>item.bookId != val.bookId)
            }
        }
    }
</script>

<style scoped lang='less'>
    .list{
        .box{
            overflow: hidden;
            border-bottom: 1px solid #000;
        .left{
            float: left;
            width: 2.8rem;
            img{
                width: 100%;
                margin-top:.8rem;
            }
        }
        .right{
            float: right;
            width: 7rem;
            h4{
                font-size: .8rem;
            }
            .desc{
                font-size: .6rem;
            }
            .price{
                color: red;
                font-size: .4rem;
            }
            .btn_box{
                button{
                    height: .8rem;
                    line-height: .8rem;
                    background: red;
                    border-radius: 0.2rem;
                    padding: 0rem 0.3rem;
                    margin-right: .3rem;
                    color: #fff;
                    border: none;
                    font-size: .6rem
                }
            }
        }
        }
    }
</style>