<template>
    <div class="home-contain">
        <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item v-for="(item,index) in swipe" :key="index">
                <img :src="item.img" alt="item.title" class="img">
            </mt-swipe-item>
        </mt-swipe>
        <nav class="nav">
            <ul class="nav-ul">
                <li>
                    <a href="#/home/newsList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>新闻列表</div>
                    </a>
                </li>
                <li>
                    <a href="#/home/photoList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>图文列表</div>
                    </a>
                </li>
                <li>
                    <a href="#/home/goodsList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>商品列表</div>
                    </a>
                </li>
                <li>
                   <a href="#/home/newsList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>新闻列表</div>
                    </a>
                </li>
                <li>
                    <a href="#/home/newsList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>新闻列表</div>
                    </a>
                </li>
                <li>
                    <a href="#/home/newsList">
                        <div>
                            <img src="../../image/menu1.png" alt="">
                        </div>
                        <div>新闻列表</div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { swipe } from "@/axios/axios.js"
export default {
    data(){
        return {
            swipe: []
        }
    },
    created(){
        swipe().then((res=>{
            if(res.data.meta[0].status){
                console.log(res.data.data)
                this.swipe = res.data.data
            }
        }))
    }
}
</script>

<style lang="less">
    .home-contain{
        .swipe{
            height: 200px;
            .img{
                height: 100%;
                width: 100%;
            }
        }
        .nav{
            margin-top:10px; 
            width: 100%;
            overflow: hidden;
            .nav-ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 33%;
                    text-align: center;
                    margin-bottom: 10px;
                    a{
                        text-decoration: none;
                    }
                    img{
                        width: 50%;
                        display: inline-block;
                    }
                }
            }
        }
       
    }
</style>
