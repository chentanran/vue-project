<template>
    <div class="photoList-contain">
        <div class="nav">
            <ul>
                <li v-for="(item, index) in classfiy" :key="item.id" ><a href="javascript:;" :class="{ 'active':item.id == 0 }" @click="photoList(index, item.id)" ref="acta">{{item.title}}</a></li>
            </ul>
        </div>
        <div class="photo">
            <a  :href="'#/home/photoinfo/'+item.id" class="list" v-for="item in photo" :key="item.id">
                <img src="http://img5.imgtn.bdimg.com/it/u=3365018759,2226705862&fm=26&gp=0.jpg" alt="">
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { getClassfiy, getPhotoList } from "@/axios/axios.js"
export default {
    data(){
        return {
            classfiy: [],  //导航栏列表数据
            id: 0,  // 默认选择0
            photo: []  //获取图文列表
        }
    },
    created(){
        this.getClassList()
        this.photoList()
    },
    methods:{
        //获取导航栏列表数据
        getClassList(){
            getClassfiy().then(res=>{
                // console.log(res)
                if(res.status == 0){
                   const item = {
                       "title": "全部",
                       "id" : 0
                   }
                    this.classfiy = res.message
                    this.classfiy.unshift(item)
                }
            })
        },
        //当前高亮
        activeId(index){
        },
        //获取图片列表数据
        photoList(index=0, id=0){
            //当前点击高亮
                // console.log(index, id)
                if(index !== 0){
                    const classfiy = this.classfiy
                    for(let i = 0; i < classfiy.length; i++){
                        this.$refs.acta[i].className = ''
                    }
                    this.$refs.acta[index].className = 'active'
                }
            
           
        //    console.log(id)
            //发送ajax,获取列表数据
            const photoId = id 
            getPhotoList(photoId).then(res => {
                console.log(res)
                if(res.status == 0){
                    this.photo = res.message
                }
            })
        }
    }
}
</script>

<style lang="less">
    .photoList-contain{
        padding: 0 5px;
        .nav{
            overflow: scroll;
             &::-webkit-scrollbar { //去除滚动条，设置滚动条的背景颜色为透明 
                background-color: transparent;
                display:none;
                    }
            ul{
            //    display:box;
            display: -webkit-box;
                overflow:scroll;
                // display: flex;
                // float: left;
                width: 1000px;
                li{
                    padding: 3px 10px;
                     display: block;
                    a{
                        font-size: 14px;
                        text-decoration: none;
                        color: #000;
                        display: inline-block;
                        // height: 30px;
                    }
                }
                .active{
                    color: orange;
                }
            }
        }
        .photo{
             overflow:hidden;
            .list{
                // overflow:hidden;
                position: relative;
                margin: 10px 0;
                img{
                    height: 300px;
                    width: 100%;
                }
                .content{
                    position: absolute;
                    bottom: 0;
                    color: white;
                    h3{
                        // text-align: center;
                        font-size: 16px;
                    }
                    p{
                        // text-indent: 2em;
                        font-size: 13px;
                    }
                }
            }
        }
        
    }
</style>
