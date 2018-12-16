<template>
    <div class="comment-contain">
        <h3>评论区:</h3>
        <div class="text">
            <textarea name="" id="text"  rows="4" placeholder="请发表你对本文章的评论" ref="text"></textarea>
        </div>
        <mt-button type="primary" size="large" @click="addContent">发表评论</mt-button>
        <!-- 评论列表 -->
        <ul class="comments"> 
            <li v-for="(item,index) in comment" :key="index">
                <p class="head"><span>第{{index+1}}楼</span><span>用户:{{item.user_name}}</span><span>发表时间:{{item.add_time | format}}</span></p>
                <p class="msg">{{item.content}}</p>
            </li>
        </ul>
        <!-- 显示更多 -->
        <mt-button type="primary" size="large" @click="addPage">加载更多</mt-button>
    </div>
</template>

<script>
import { getComment, addComment } from "@/axios/axios.js"
export default {
    data(){
        return {
            comment : [],
            content: "",
            page: 1
        }
    },
    created(){
        this.getContent()
        // console.log(this.$refs.value)
    },
    methods:{
        //获取评论数据
        getContent(){
            getComment(this.$route.params.id,this.page).then(res=>{
                // console.log(res)
                if(res.status == 0){
                    this.comment = this.comment.concat(res.message)
                }
            })
        },
        //添加评论数据
        addContent(){
            this.content = this.$refs.text.value
            if(this.content.trim().length==0) return;
            addComment(this.$route.params.id, {content:this.content}).then(res => {
                // console.log(res)
                if(res.status == 0){
                    this.page = 1
                   this.$refs.text.value = ""
                    this.comment = []
                    //从新获取数据
                    this.getContent()
                   
                }
            })
        },
        //加载更多
        addPage(){
            this.page++;
            this.getContent()
        }
    }
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
                border: .5px solid orange;
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
