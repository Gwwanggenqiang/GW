<template>
   <div  class="app-homeContainer">
      <!--顶部导航条 1：-->  
      <div class="header">
        <span class="header1"></span>
        <span class="header2">进口母婴正品特卖</span>
        <span class="header3"></span>
      </div>
      <!--轮播图    2：-->
      <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
      <!--横向滑动-->
      
      <div class="">
        <div class="">
          <span></span>
          <span></span>
        </div>
        <div class=""></div>
      </div>
        <div>
          <div clas="headtop">
            <p class="top_p">08:00</p>
            <p class="top_p">10:00</p>
            <p class="top_p">12:00</p>
            <p class="top_p">14:00</p>
            <p class="top_p">16:00</p>
            <p class="top_p">18:00</p>
            <p class="top_p">20:00</p>
            <p class="top_p">22:00</p>
          </div>
        </div>
      
 	    <div class="card">
        <ul class="card-ul">
          <li class="card-item" v-for="item of mylist">
              <a href="">
                <div class="card-item-img">
                  <img :src="item.img_url" alt="">
                </div>
                <p class="card-item-title">{{item.title}}</p>
                <p class="card-item-now">
                  <span>拼团价</span>
                  <em>￥{{item.newprice}}</em> 
                </p>
                <p class="card-item-old">
                  <span>市场价</span>
                  <del>￥{{item.oldprice}}</del>
                </p>
              </a>
          </li>
        </ul>
      </div>
      <!-- 主要内容 -->
      <div class="main" v-for="emp of mainlist">
        <div class="main_top">
          <div class="main_title">{{emp.title}}</div>
          <span class="main_subtitle">{{emp.subtitle}}</span>
        </div>
         <div class="main_bottom">
          <ul class="main_ul">
            <li class="main_li">
              <a href="#">
                <div class="main_ab">
                  <img :src="emp.img_urla">
                  <span class="main_po">TOP1</span>
                </div>
                <p class="main_ltitle">{{emp.ptitlea}}</p>
                <p class="main_btit">
                  <span class="main_btit1">99%</span>
                  <span class="main_btit2">好评</span>
                </p>
              </a>
            </li>
            <li class="main_li">
              <a href="#">
                <div class="main_ab">
                  <img :src="emp.img_urlb">
                  <span class="main_po">TOP2</span>
                </div>
                <p class="main_ltitle">{{emp.ptitleb}}</p>
                <p class="main_btit">
                  <span class="main_btit1">99%</span>
                  <span class="main_btit2">好评</span>
                </p>
              </a>
            </li>
            <li class="main_li">
              <a href="#">
                <div class="main_ab">
                  <img :src="emp.img_urlc">
                  <span class="main_po">TOP3</span>
                </div>
                <p class="main_ltitle">{{emp.ptitlec}}</p>
                <p class="main_btit">
                  <span class="main_btit1">99%</span>
                  <span class="main_btit2">好评</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部 -->
      <img src="http://127.0.0.1:3000/main/footer.jpg" style="width:100%">
      <div class="ft">
        <p style="padding-top: 0.5rem;:;">
          <a href="#" id="backToWeb" title="点击返回电脑版">电脑版首页</a> | 
          <a href="">蜜芽触屏版首页</a> | 
          <a href="#">关于我们</a> | 
          <a href="# ">营业执照</a>
        </p>
        <p>通过本网站直接或者间接地推销商品或者服务的商业宣传活动均属“广告”</p>
        <p>Copyright © 2018 </p>
        <p>北京花旺在线商贸有限公司 Mia.com 保留一切权利</p>
      </div>
   </div>

</template>
<script>
  export default {
    data(){
      return {
        list:[],
        mylist:[],
        mainlist:[]
      }  //创建data属性保存数据
    },
    methods:{ 
      //jumpShop(){
      //编程跳转方式
      //this.$router.push("/home/shop?id=15");
      ///this.$router.push("/home/shop/19");
            
      //},   
      getImage(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then((result)=>{
          //获取返回数据，保存 list属性中
          this.list = result.body;
        })
      },
      getProduct(){
        var url = "http://127.0.0.1:3000/product";
        this.$http.get(url).then((result)=>{
          this.mylist = result.body;
         // console.log(result.body)
        })
      },
      getMain(){
        var urla = "http://127.0.0.1:3000/mainmm";
        this.$http.get(urla).then((result)=>{
            //console.log(result);
            this.mainlist = result.body
        })
      }
    },
    created(){
      this.getImage();
      this.getProduct();
      this.getMain();
    }
  }
</script>
<style>
  .app-homeContainer{
    background-color:white
  }
    /*自定义组件的样式*/
    .header{
          width:100%;
          height:30px;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:22px 0;
          background:#FFF;
      }
      .header1{
          display:inline-block;
          width:60px;
          height:30px;
          background-image:url(../../img/cart.png);
          background-repeat:no-repeat;
      }
      .header3{
          display:inline-block;
          width:30px;
          height:30px;
          background-image:url(../../img/90cb5f50e0f82e707c31d09984181a7b181194647.png);
          background-size:100%;
          background-repeat:no-repeat;
          position:relative;
          right:-85px;
      }
    /*图片轮播设置高度*/
    .app-homeContainer .mint-swipe{
      height:150px;
    }
    .app-homeContainer .mint-swipe img{
      width:100%;
      height:180px;
    }
    /* 横向滑动 */
    .headtop{
      margin-top: 200px;
      height:35px;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
    }
    .top_p{
      padding:5px 10px;
      height: 35px;
      float:left;
      width:25%;
      text-align:center;
    }
    /* 八格显示 */
    .card-ul{
      width:100%;
      display:flex;
      justify-content:space-around;
      list-style:none;
      flex-flow:row wrap;
      margin:0;
      padding:0;
    }
    .card-item{
      width:23%;
    }
    .card-ul .card-item .card-item-img img{
      width:100%
    }
    .card-item-title{
      color:#000;
      margin-bottom:5px;
      }
    .card-item-now{
      color:red;
      margin:0
    }
    .card-item-now em{font-weight:bold}
    .card-item-old{
      font-size:12px;
      margin:0
      }
    .main_top{
      width:100%;
      text-align:center;
      margin-top:20px;
      margin-bottom:20px;
    }
    .main_title{
      font-size:18px;
      font-weight:normal;
    }
    .main_subtitle{
      font-size:14px;
      color:#999
    }
    .main_ul{
      display:flex;
      justify-content:space-around;
      list-style:none;
      width:100%;
      padding-left:0
    }
    .main_li{
      width:33%
    }
    .main_li div img{
      width:100%;
    }
    .main_ltitle{   
      height:40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
      font-size:12px;
      color:#000;
      margin-bottom:0;
    }
    .main_btit{
      text-align:center;
      
    }
    .main_btit1{color:#fa4b9b}
    .main_ab{
      position:relative
    }
    .main_po{
      position:absolute;
      top:0;
      left:0;
      color:#fff;
      background:red;
    }
    .ft{
      text-align:center
    }
    .ft p,.ft p a{
      font-size:12px;
      color:#ccc
    }
</style>