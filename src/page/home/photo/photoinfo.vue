<template>
    <div class="photoinfo-contain">
        <h2>{{data.title}}</h2>
        <div class="info">
            <span>发表时间: {{data.add_time | format}}</span>
            <span>点击: {{data.click}}次</span>
        </div>
        <br />
        <div class="img">
            <!-- <img  v-for="(item, index) in img" :key="index" src="https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-e7ae36db714776c0-4ef2b7f13fdca08b6cef36eec1491c02.jpg" alt=""> -->
            <img class="preview-img" v-for="(item, index) in list" :key="index" src="https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-e7ae36db714776c0-4ef2b7f13fdca08b6cef36eec1491c02.jpg" height="100" @click="$preview.open(index, list)">
        </div>
        <p class="contain" v-html="data.content"></p>
        <br />
        <comment></comment> 
    </div>
</template>

<script>
import comment from "@/components/comment/comment.vue"
import { getPhotoinfo, getSmallImage } from "@/axios/axios.js"
export default {
    components:{
        comment
    },
    data(){
        return {
            data: {},
            // img: [],
            list: []
        }
    },
    created(){
        this.photoinfo() //图片详情
        this.getImage()  //缩略图
    },
    methods:{
        //获取图文详情
        photoinfo(){
            getPhotoinfo(this.$route.params.id).then(res => {
                if(res.status == 0){
                    this.data = res.message[0]
                    // console.log(this.data)
                }
            })
        },
        //获取缩略图
        getImage(){
            getSmallImage(this.$route.params.id).then(res => {
                // console.log(res)
                if(res.status == 0){
                    res.message.forEach(item => {
                         item.w = 600
                         item.h = 400
                         item.src = "https://img02.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-e7ae36db714776c0-4ef2b7f13fdca08b6cef36eec1491c02.jpg"   
                    });

                    this.list = res.message
                    // console.log(this.list)
                }
            })
        }
    }
}
</script>

<style lang="less">
    .photoinfo-contain{
        overflow: hidden;
        padding: 0 3px;
        box-sizing: border-box;
        h2{
            text-align: center;
            font-size: 18px;
            margin:10px;
        }
        .info{
            font-size:13px;
            display:flex;
            justify-content: space-between;
        }
        .img{
            display: flex;
            img{
                width:30%;
                height: 100px;
                margin: 0px 3px 10px;
            }
        }
        .contain{
            text-indent: 2em;
        }
    }
</style>
