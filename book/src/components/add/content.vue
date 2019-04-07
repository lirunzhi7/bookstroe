<template>
    <div class="box">
        <h4>{{obj.name1}}</h4>
        <input type="text" style="width:6rem;height:1rem;" v-model='n1' @change='fn1'>
        <h4>{{obj.name2}}</h4>
        <input type="text" style="width:6rem;height:1rem;" v-model='n2' @change='fn2'>
        <h4>{{obj.name3}}</h4>
        <input type="text" style="width:6rem;height:1rem;" v-model='n3' @change='fn3'>
        <h4>{{obj.name4}}</h4>
        <input type="text" style="width:6rem;height:.9rem;" v-model='n4' @change='fn4'>
        <h3 @click='fn'>添加</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                obj:
                    {
                        name1:'书的名称',
                        name2:'书的信息',
                        name3:'书的价格',
                        name4:'书的封面',
                    },
                n1:'',
                n2:'',
                n3:'',
                n4:'',
                obj2:{}
            }
        },
        methods: {
                    fn1(){

                    },
                    fn2(){
                        
                    },
                    fn3(){

                    },
                    fn4(){

                    },
                    fn(){
                        
                    }
                },
                

    }
</script>

<style scoped lang='less'>
    .box{
        margin: 2rem 0 2rem 0;
        font-size: .8rem;
        text-align: center;
        h4{
            outline: none;
        }
        h3{
            
            width: 6rem;
            height: 1.5rem;
            background: lightseagreen;
            margin: 0.7rem auto;
            border-radius: 0.2rem;
        }
        input{
            border-radius: 0.2rem;
        }
    }
</style>