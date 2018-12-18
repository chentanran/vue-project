<template>
    <div class="goodsinfo-contain">
       <div class="img">
           <img src="http://img0.imgtn.bdimg.com/it/u=719252113,870245573&fm=26&gp=0.jpg" alt="">
       </div>
        <h3>苹果12345 plus 16g 4g 手机. 联通三网版</h3>
        <div class="price">
            <p><span>市场价: <del>&yen;8888</del></span>&nbsp; &nbsp;&nbsp;<span>销售价: <i>&yen;6666</i></span></p>
            <div class="number">
                <span>购买数量:</span>
            </div>
            <div class="buy">
                <mt-button type="primary">立即购买</mt-button>
                <mt-button type="danger">加入购物车</mt-button>
            </div>
        </div>
        <div class="parameter">
            <h3>商品参数</h3>
            <p>商品货号: xxxxx</p>
            <p>库存情况: 200</p>
            <p>上架时间: 2018年12月18日11:03:48</p>
        </div>
        <div class="btn">
            <mt-button type="danger" size="large" plain>图文详情</mt-button>   
            <mt-button type="primary" size="large" plain>商品评论</mt-button>   
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route)
    },
    methods:{

    }
}
</script>

<style lang="less">
    .goodsinfo-contain{
        overflow:hidden;
        padding: 5px;
        .img{
            width: 100%;
            img{
                width: 100%;
            }
        }
        >h3{
            padding: 10px 0
        }
        .price{
            border-top: .5px solid #ccc;
            border-bottom: .5px solid #ccc;
            padding: 20px 0; 
            >p{
                font-size: 14px;
                span:nth-of-type(2) > i{
                    color: orange;
                }
            }
        }
        .number{
            padding: 15px 0; 
        }
        .parameter{
            padding: 10px 0;
            p{
                margin-top: 15px;
                color: #666;
            }
        }
        .btn{
            button{
                margin: 5px 0;
            }
        }
    }
</style>
