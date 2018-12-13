<template>
    <div class="newsinfo-contain">
        <h3>{{message.title}}</h3>
        <p class="timeList"><span>时间:{{message.add_time | format}}</span><span>点击:{{message.click}}</span> </p>
        <br/>
        <p class="article" v-html="message.content">
            
        </p>
        <br/>
        <comment></comment>
    </div>
</template>

<script>
import comment from "@/components/comment/comment.vue"
import { newsInfo } from "@/axios/axios.js"
export default {
    components:{
        comment
    },
    data(){
        return {
            message : {}
        }
    },
    created(){
       newsInfo(this.$route.params.id).then(res => {
        //    console.log(res)
           if(res.status == 0){
               this.message = res.message[0]
            //    console.log(this.message)
           }
       })
    // console.log(this.$route.params.id)
        
    },
    mounted(){
      
    }
}
</script>

<style lang="less">
    .newsinfo-contain{
        padding: 3px;
        h3{
            text-align:center;
            margin-bottom: 10px;
        }
        .timeList{
            display: flex;
            justify-content:space-between;
            padding: 0 10px;
            font-size: 13px; 
        }
        .article{
            text-indent: 2em;
        }
    }
</style>
