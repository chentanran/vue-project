<template>
    <div class="home-contain">
        <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
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
    created(){
        swipe().then((res=>{
            console.log(res)
        }))
    }
}
</script>

<style lang="less">
    .home-contain{
        .swipe{
            height: 200px;
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
