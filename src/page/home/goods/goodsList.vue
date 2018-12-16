<template>
    <div class="goodsList-contain">
        <ul>
            <li>
                <img src="http://img5.imgtn.bdimg.com/it/u=3307854163,181890442&fm=11&gp=0.jpg" alt="">
                <h3>华为荣耀6plus 16G双4G版</h3>
                <p class="price"><span>&yen;2195</span> <span>&yen;2400</span></p>
                <p class="hot">
                    <span>热卖中</span>
                    <span>剩60件</span>            
                </p>
            </li>
             <li>
                <img src="http://img5.imgtn.bdimg.com/it/u=3307854163,181890442&fm=11&gp=0.jpg" alt="">
                <h3>华为荣耀6plus 16G双4G版</h3>
                <p class="price"><span>&yen;2195</span> <span>&yen;2400</span></p>
                <p class="hot">
                    <span>热卖中</span>
                    <span>剩60件</span>            
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

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
                    padding: 10px 3px;
                    font-size: 15px;
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
