<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="">小米1</a>
                    <a href="">mui</a>
                    <a href="">云服务</a>
                    <a href="">协议</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username==''" @click="login">登录</a>
                    <a href="" v-if="username==''">注册</a>
                    <a href="" v-if="username!=''">{{username}}</a>
                    <a href="" v-if="username!=''">订单</a>

                    <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span> 购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
<!--                
                <div class="test1">
                  
                    
                    <div class="test2">这是我的简介</div>
                    <div class="test3">我出现了</div>
                </div> -->
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                           
                            <ul>
                                <li class="product" v-for="(item,index) in nav_data['pdata']" :key="item.id" :sindex="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="__blank">
                                        <div class="pro-img">
                                            <img :src="`${publicPath}imgs/nav-img/${item.img}.png`" alt="">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">￥{{item.price}}</div>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>shop2</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>shop3</span>
                        <div class="children">

                            <ul>
                                <li class="product" v-for="(item,index) in nav_data['tvdata']" :key="item.id" :sindex="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="__blank">
                                        <div class="pro-img">
                                            <img :src="`${publicPath}imgs/nav-img/${item.img}.png`" alt="">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">￥{{this.currency(item.price)}}</div>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script >
import { getCurrentInstance } from 'vue';
import axios from 'axios';
import cache from '../storage';
//import { useRoute,useRouter} from 'vue-router';
import { reactive } from '@vue/reactivity';


export default {
    name:"nav-header",
    data(){//局部data方法
        return {
            username:"",
            publicPath:process.env.BASE_URL
        }
    },
    props: {
        uname: {
            type: String,
            default:"qxc",
      }  
    },
    mounted() {
        this.getUser();  
      
    },
    // setup(props,context) {//props 当前方法内的参数
    //     console.log(props,"props");
    //     console.log(context, "context");
  setup() {
      
        /*eslint no-debugger: "error"*/
        //debugger
        let api = '/demo/index/getnavproduct?type=phone';
      let api2 = '/demo/index/getnavproduct?type=tv';
        /*
        const cns = getCurrentInstance()
        console.log(cns.appContext.config.globalProperties.$user)
        */
      const instance = getCurrentInstance();
      const {proxy} = getCurrentInstance();
      console.log(instance,"instance");
      
      console.log(proxy.$api,"proxy");
      console.log(proxy.$axios,"proxy");
        var nav_data = reactive({
            'pdata': [],
            "tvdata":[],
        });
        const getNavph = async () => {//将一个异步的方法 调换成 同步  并且 async await 必须成对出现 await后面必须是一个promise对象
            const data = await axios.get(api);
            nav_data.pdata = data['data'];
        }
        getNavph();
        /*
        axios.get(api).then((data) => {
           
            nav_data.pdata = data['data'];
        })
        */
        axios.get(api2).then((data2) => {
         
            nav_data.tvdata = data2['data'];
        })
      //  console.log(nav_data,'nav_data');

        
        return {
            nav_data,
          
        }
    },
   
    methods: {
        login() {
            //v2
            console.log(this.$route.name);
          //  console.log(this.$route.pagename);
            //return;
            this.$router.push("/login");
            //v3
         //   const router = useRouter();
            // const route = useRoute();
            // console.log(route.name);
          //  router.push("/login");
           
        },
        goToCart() {
           // console.log(this.$router,"router");
          //  this.$router.push("/cart");
          //const router = useRouter();
           // const route = useRoute();
            //router.push("/cart");
            this.$router.push("/cart");
        } ,
        getUser: function () {
            let _this = this;
          
            if (cache.getItem("user")) {
                _this.username = cache.getItem("username", 'user');
            }
           // this.username = 'qxc';
            /*
            if (cache.getItem("username", 'user') != '') {
               
            }
            */
        },
        currency:function(val) {
            if (!val) return "0.00";
            return val.toFixed(2) + '元';
        },
     
      
    }
}
</script>
<style lang="scss">
    @import '../assets/scss/custom.scss';
    @import '../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background: #333333;
            a{
                &:hover{
                        color:$colorA;
                }
            }
           
        }
        .container{
              /*
            width: 1226px;
            margin-right: auto;
            margin-left: auto;
           
            display: flex;
            justify-content: space-between;//水平居中
            align-items: center;//垂直居中
            
            flex-start（默认值）：左对齐
            flex-end：右对齐
            center： 居中
            space-between：两端对齐，项目之间的间隔都相等。
            space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。


            align-items: center;//垂直居中
            flex-start：交叉轴的起点对齐。
            flex-end：交叉轴的终点对齐。
            center：交叉轴的中点对齐。
            baseline: 项目的第一行文字的基线对齐。
            stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
            */
            @include container-base;       
        
            a{
                color: #b0b0b0;
                font-size: 14px;
                margin-right:17px;
                display: inline-block;
              
            }
            .my-cart{
                background: #424246;
                width: 110px;
                text-align: center;
                margin-right: 0px !important;
                .icon-cart{
                    /*
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    margin-right: 4px;
                    background: url(/public/imgs/icon-cart.png) no-repeat center;
                    background-size: contain;//填充
                    */
                    @include cart-img("icon-cart.png");
                }
                &:hover{//嵌套伪类
                    color: $colorA;
                    
                    .icon-cart{
                        /*
                        background: url(/public/imgs/icon-cart-hover.png) no-repeat center;
                        */
                        @include cart-img("icon-cart-hover.png");
                    }
                    
                }
            }
           
        }
    }
    .nav-header{
        .container{
            @include container-base;
            height: 112px;
            position: relative;
            .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                background: #ff6600;
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &:before{
                        content: "";
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url(/public/imgs/mi-logo.png) no-repeat center;
                        background-size: contain;
                        transition: margin .2s;
                    }
                    &:after{
                        content: "";
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url(/public/imgs/mi-home.png) no-repeat center;
                        background-size: contain;
                    }
                    &:hover:before{
                        margin-left: -55px;
                        transition: margin .2s;
                    }
                  
                }
            }
            .header-menu{
                display: inline-block;
                width: 850px;
                // width: 200px;
                padding-left: 150px;
                .item-menu{
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                   
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        //
                        color:$colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                            //overflow: auto;
                            transition: height .8s;
                        }
                        
                    }
                    .children{
                        position: absolute;
                        width: 1226px;
                        height: 0px;
                        opacity: 0;//透明度0
                        overflow: hidden;//设置隐藏 overflow属性指定如果内容溢出一个元素的框，会发生什么。
                        top:112px;
                        left: 0;
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0,0.11);
                        font-size: 12px;
                        line-height: 12px;
                        font-weight: bold;
                        z-index: 100;
                        // background-color: #ffffff;
                        transition: height .8s;
                        background: #fff;
                        a{
                            display: block;
                            margin-right: 0px;
                        }
                     
                        .product{
                            display: inline-block;
                            width: 16.66%;
                            position: relative;
                            &:before{
                                content: '';
                                height: 111px;
                            
                                border-right: $colorF 1px solid;
                                position: absolute;
                                right: 0;
                                top:15px;
                            }
                            &:last-child:before{
                                display: none;
                            }
                            .pro-img{
                                height: 139px;
                             
                                img{
                                    
                                    height: 111px;
                                    width: 100%;
                                    margin-top: 15px;
                                   
                                  
                                }   
                            }
                           
                            .pro-name{
                                text-align: center;
                                color:$colorB;
                                height: 31px;
                                line-height: 31px;
                            }
                            .pro-price{
                                text-align: center;
                                color:$colorA;
                                
                                height: 31px;
                                line-height: 31px;
                            }
                        }
                      
                        /*
                        li:last-child{
                            &:before{
                                border: none;
                            }
                        }
                        */
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                 //   justify-content: flex-end;
                    input{
                        // display: inline-block;
                        /*  无论取何值，盒子尺寸是一样的，不一样的是盒子的容量:*/
                        box-sizing: border-box;
                        height: 40px;
                        border: none;
                        border-right: 1px solid #e0e0e0;
                        padding-left: 10px;
                        width: 260px;
                    }
                    a{
                        // display: inline-block;
                        background: url(/public/imgs/icon-search.png) no-repeat center;
                        background-size: contain;
                        width: 18px;
                        height: 18px;
                        margin: 17px;
                    }
                }
            }
            /*
            .test1{
                width: 60px;
                height: 60px;
                position: relative;
                z-index: 0;
                .test2{
                    width: 60px;
                height: 60px;
                z-index: 0;
                }
                .test3{
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: -60px;
                    display: none;
                    z-index: 1;
                    //background: #b0b0b0;
                }
                &:hover{
                    .test3{
                        display: block;
                       left: 0;
                       transition: all .3s;
                    }
                    .test2{
                        display: none;
                    }
                }
            }
            */
        }
    }
</style>