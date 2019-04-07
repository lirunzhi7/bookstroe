<template>
    <div class="list">
        <my-title til="列表页"></my-title>
        <div class="lit_box">
            <item v-for="(item) in list" :key="item.bookId" :data="item" @change="fn"></item>
        </div>
       
    </div>
</template>
<script>
import title from "@/common/title.vue";
import item from "./item.vue";
 
export default {
            data() {
                return {
                    list: "",
                    ary: []
                };
            },
            created() {
                this.$store.dispatch("getitem", data => {
                    this.list = data;
                });
            },
            methods: {
                fn(val) {
                    this.list = this.list.filter(item => {
                        if (item.bookId == val.bookId) {
                            this.ary.push(item);
                            console.log(this.ary)
                        } else {
                            return item.bookId;
                        }
                    });
                }
            },
            components: {
                    "my-title": title,
                    item,
                   
                }
            };
</script>

<style scoped lang='less'>
.lit_box {
  margin: 1.5rem 0 2.4rem 0;
}
</style>