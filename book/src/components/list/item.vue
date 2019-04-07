<template>
    <div class="list">
        <div class="left">
            <img :src="data.bookCover" alt="">
        </div>
        <div class="right">
            <h4>{{data.bookName}}</h4>
            <p class="desc">{{data.bookInfo}}</p>
            <p class="price">${{(data.bookPrice/100).toFixed(2)}}</p>
            <div class="btn_box">
                <button @click='fn(data)'>删除</button>
                <button @click='fn2(data)'>收藏</button>
            </div>
        </div>
    </div>
</template>

<script>
    import colldata from './../collect/colldata.vue'
    export default {
        props:['data'],
        data(){
            return {
                ary:[]
            }
        },
        methods:{
            fn(val){
                this.$emit('change',val)
            },
            fn2(val){
                if(this.$store.state.data.some(item=>item.bookId == val.bookId)) return 
                this.$store.state.data.push(val)
            }
        },
        components:{
             
        }
    }
</script>

<style scoped lang='less'>
    .list{
        overflow: hidden;
        border-bottom: 1px solid #000;
        margin-bottom: 2px;
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
</style>