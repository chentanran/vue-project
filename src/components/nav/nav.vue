<template>
    <div class="nav-contain">
        <a href="#/home" class="item" :class="{on: '/home' === $route.path}">
            <span class="iconfont icon-shouye"></span>
            <p>首页</p>
        </a>
        <a href="#/member" class="item" :class="{on: '/member' === $route.path}">
            <span class="iconfont icon-jushoucanggift"></span>
            <p>会员</p>
        </a>
        <a href="#/shopcar" class="item" :class="{on: '/shopcar' === $route.path}">
            <span class="iconfont icon-gouwuchetianjia"></span>
            <p>购物车</p>
        </a>
        <a href="#/search" class="item" :class="{on: '/search' === $route.path}">
            <span class="iconfont icon-sousuo"></span>
            <p>搜索</p>
        </a>
    </div>
</template>

<script>
export default {
    created(){
      
    }
}
</script>

<style lang="less">
    .nav-contain{
        height: 50px;
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: skyblue;
        .item{
            color: white;
            flex: 1;
            text-align: center;
            padding-top:3px; 
            text-decoration:none;
            span{
                font-size: 23px;
            }  
        }
        .on{
                color: hotpink;
            }
    }
</style>
