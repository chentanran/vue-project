<template>
    <div class="newsList-contain">
        <ul class="ul">
            <li class="li" v-for="item in newsList" :key="item.id">
                <a :href="'#/home/newsinfo/' + item.id">
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="info">  
                        <h3>{{item.title}}</h3>
                        <p><span>时间:{{item.time}}</span> <span>点击:{{item.click}}</span></p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
</template>

<script>
import { newsList } from "@/axios/axios.js"
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            newsList().then(res => {
                // console.log(res)
                if(res.status == 0){
                   this.newsList = res.message
                }else{
                    Toast({message:"数据获取失败"})
                }
            })
        }
    }
}
</script>

<style lang="less">
    .newsList-contain{
        .ul{
            .li{
                margin: 5px 0;
                a{
                    display: flex;
                    color: #000;
                    text-decoration: none;
                    .img{
                        flex: 1;

                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                    .info{
                        flex: 9;
                        overflow: hidden;
                        h3{
                            font-size: 15px;
                            padding: 3px 3px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        p{
                            // padding-top: 10px;
                            font-size:13px;
                            display: flex;
                            justify-content: space-between;
                            padding: 3px 10px 0px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }   
        }
    }
</style>
