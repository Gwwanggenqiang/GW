<template>
    <div class="app-goodsShop">
        <div class="sousuo">
            <span class="mui-icon mui-icon-arrowleft sp1"></span>
            <span>
                <input type="text" placeholder="请输入关键词搜索" style="width:77%">
            </span>
            <span class="mui-icon mui-icon-home sp2"></span>
        </div>
        <div class="silder">
            <ul class="list">
                <li class="item" :class="{'active':current==index+1}" v-for="(ss,index) of list"  v-text="ss"  @click='add_class(index+1)'>
                </li>
            </ul>
            <ul class="list_a">
                <li class="item_a" v-for="(item,index) of list_item"  > 
                    <a href="">
                        <img :src="item.img_url" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            list_item:[],
            my_active:{'active':false},
            current:1    
        }
    },
    methods:{
        getlist(){
            var url = "http://127.0.0.1:3000/miaList";
            this.$http.get(url).then((result)=>{
                var uu=[];
                for(var i=0;i<result.body.length;i++){
                    uu.push(result.body[i].title)
                }
                this.list = uu;
                console.log(this.list);
            })
        },
        
        getList_item(){
          var url = "http://127.0.0.1:3000/getItem?lid="+this.current;
            this.$http.get(url).then((result)=>{
                this.list_item = result.body;
            })
            
        },
        add_class(index){
            this.current = index;
            console.log(this.current)
           /*  var url = "http://127.0.0.1:3000/getItem?lid="+index;
            this.$http.get(url).then((result)=>{
                this.list_item = result.body;
            }) */
            //this.$emit("ling",this.list[this.current].lid)
            this.getList_item()
        }
    },
    created(){
          this.getlist()
        this.getList_item()
    },
    mounted(){
       
    }
}
</script>
<style>
    .sousuo{
        width:100%;
        height:60px;
        background:#ff4d8e;
        padding-top:10px;
    }
    .sousuo .sp1,.sousuo .sp2{
        padding:0 7px;
        color:#fff
    }
    .silder{
        display:flex
    }
    .list{
        width:30%;
        list-style:none;
        padding:0;
        margin:0;
        background:#f6f6f6;
    }
    .item{
        width:100%;
        padding:15px 10px;
        background-color:#f6f6f6;
        font-size:16px;
        color:#333;
        text-align:center
    }
    .list_a{
        width:70%;
        list-style:none;
        padding:0;
        margin:0;
        display:flex;
        flex-wrap:wrap
    }
    .item_a{
        width:33%;
        height:100px;
        text-align:center;
        
        padding:0;
    }
    .item_a a img{
        width:80%;
    }
    .active{
        background-color:#ccc;
        
    }
</style>