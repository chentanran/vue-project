<template>
    <div class="comment-contain">
        <h3>评论区:</h3>
        <div class="text">
            <textarea name="" id="text"  rows="4" placeholder="请发表你对本文章的评论"></textarea>
        </div>
        
        <mt-button type="primary" size="large">default</mt-button>
        <ul class="comments">
            <li>
                <p class="head"><span>第一楼</span><span>用户:匿名用户</span><span>发表时间:2018年12月11日23:18:42</span></p>
                <p class="msg">冷啊</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .comment-contain{
        overflow: hidden;
        width: 100%;
         box-sizing: border-box;
        h3{
            text-align: left;
            padding-left: 5px;

        }
        .text{
            padding: 0 5px;
            box-sizing: border-box;
            #text{
                padding: 3px 5px;
                box-sizing: border-box;
                width:99%;
            }
        }
        .comments{
            padding: 10px;
            li{
                font-size: 13px;
                .head{
                    display: flex;
                    justify-content:space-between;
                }
                .msg{
                    font-size: 16px;
                }
            }
        }
        
    }
</style>
