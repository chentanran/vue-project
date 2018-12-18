<template>
    <div class="goodsList-contain">
        <ul>
            <li v-for="item in data" :key="item.id" @click="goGoodsInfo(item.id)">
                <img src="http://img5.imgtn.bdimg.com/it/u=3307854163,181890442&fm=11&gp=0.jpg" alt="">
                <h3>{{item.title}}</h3>
                <p class="price"><span>&yen;{{item.sell_price}}</span> <span>&yen;{{item.market_price}}</span></p>
                <p class="hot">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>            
                </p>
            </li>
        </ul>
        <mt-button type="primary" size="large" plain @click.native="loadMore" >{{addload}}</mt-button>
    </div>
</template>

<script>
import { getGoodsList } from "@/axios/axios.js"
export default {
    data(){
        return {
            pageindex: 1,
            data: [],  //获取数据
            addload: "加载更多..."
        }
    },
    created(){
        this.goodsList()
    },
    methods:{
        //获取列表数据
        goodsList(){
            getGoodsList(this.pageindex).then(res => {
                console.log(res)
                if(res.status == 0){
                    
                    this.data = this.data.concat(res.message) 
                    if(res.message.length == 0){
                        this.addload = "没有更多数据啦..."
                        console.log(this.$refs)
                    }
                }
            })
        },
        //加载更多
        loadMore(){
            this.pageindex++;
            console.log(this.pageindex)
            this.goodsList()
        },
        //跳转到详情页
        goGoodsInfo(id){
            this.$router.push({ name: 'goodsInfo', params: { id }})
        }
    }
}
</script>

<style lang="less">
    .goodsList-contain{
        overflow: hidden;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li{
                margin: 6px 0;
                width: 46%;
                border: .5px solid skyblue;
                box-shadow: 0 0 10px skyblue;
                img{
                   width: 100%;
                   height: 150px; 
                }
                h3{
                    margin: 10px 3px;
                    font-size: 15px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                }
                .price{
                    padding: 5px 3px;
                    span{
                        &:first-of-type{
                            color: skyblue;
                        }
                        &:last-of-type{
                            font-size: 12px;
                            text-decoration: line-through;
                        }
                    }
                    
                }
                .hot{
                    font-size: 14px;
                    padding: 3px 3px 10px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
