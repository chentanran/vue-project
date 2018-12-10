<template>
    <header class="header-contain">
        <mt-header :title="title" class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </header>
</template>

<script>
export default {
    data(){
        return {
            title: "你好"
        }
    },
    updated(){
        console.log(this.$route.path)
        switch(this.$route.path){
            case "/home":
                this.title = "代代商城"
                break;
            case "/member":
                this.title = "会员页"
                break;
            case "/search":
                this.title = "搜索"
                break;
            case "/shopcar":
                this.title = "购物页面"
                break;
        }
    }
}
</script>

<style lang="less">
    .header-contain{
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        background-color: skyblue;
        .header{
            height: 100%;
        }
    }
</style>
