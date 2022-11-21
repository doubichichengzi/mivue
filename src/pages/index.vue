<template>
<div class="index">
    <div class="container">
        <div class="swiper-box">
            <div class="nav-menu">
                <ul class="menu-warp">
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机电话卡</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">

                        <a href="javascript:;" class="menu-item-name">手机22电话卡3</a>
                        <div class="children">
                           
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机33电话卡3</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机4电话卡4</a>
                        <div class="children">
                         
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机5电话卡5</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机6电话卡6</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机7电话卡7</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机8电话卡8</a>
                        <div class="children">
                           
                        </div>
                    </li>
                </ul>
            </div>


            <!-- :options="swpierOption"  v2用法 -->
            <swiper   
           
                @swiper="onSwiper" 
             @slideChange="onSlideChange" 
             :options="swpierOption" 

             :slides-per-view="3"
             :navigation="{
                  nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
             }"
             :modules="modules"
            
          
            :pagination="{
             
            
             el:'.swiper-pagination',
                type:'bullets',//'fraction', bullets  圆点（默认）fraction  分式 progressbar  进度条
            clickable: true,//可点击 分页器
            
               
            }"
            loop
          
            :effect="'cube'"
            
            >
<!-- 
     
   :autoplay="{
               
               delay: 3000,
           }"
    // :Autoplay="{ autoPlay: true }"
    v-bind:options="swpierOption" 
            :space-between="50"
           
            :autoplay="true"
    
    
    :scrollbar="{ draggable: true }" 
 :src="require(`${item}`)"
-->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <!-- v-bind 绑定指令 里面是js -->
                    <a href="/#/product/1">
                        <!-- <img :src="item" alt="" :sliindex="index"> -->
                        <el-image 
                     
                        loading="lazy"
                        lazy
                        :src="item" alt="" :sliindex="index"  />
                    </a>

                </swiper-slide>
                 <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
              
    
    <!-- Add Navigation -->
    <div class="swiper-button-prev">
        <!-- <img src="/imgs/logo-mi.png" alt=""> -->
    </div>
    <div class="swiper-button-next"></div>
            </swiper>

        </div>
        <div style="height:50px;text-align;:center">----分隔符---</div>
        <div class="swiper-box" >
            <div class="nav-menu">
                <ul class="menu-warp">
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机电话卡</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">

                        <a href="javascript:;" class="menu-item-name">手机22电话卡3</a>
                        <div class="children">
                           
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机33电话卡3</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机4电话卡4</a>
                        <div class="children">
                         
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机5电话卡5</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机6电话卡6</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机7电话卡7</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(val,key) in item" :key="key">
                                    <a :href="'/#/product/'+val.id">
                                        <img :src="val.imgs" alt="">
                                        {{val.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;"  class="menu-item-name">手机8电话卡8</a>
                        <div class="children">
                           
                        </div>
                    </li>
                </ul>
            </div>


       
            <a-carousel arrows autoplay effect:fade>
                <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 270px; z-index: 1">
                    <left-circle-outlined />
                </div>
                </template>
                <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 10px">
                    <right-circle-outlined />
                </div>
                </template>
                <div v-for="(item,index) in imgs" :key="index" >
                    <a href="/#/product/1" style="display:block">
                                    <img :src="item" alt="" :sliindex="index" style="width:100%;height:100%">
                                </a>
                            </div>
                
            </a-carousel>
        </div>
        <div class="ads-box">
            <div class="ads-list">
                <ul>
                    <li v-for="i in 6" :key="i">
                        <a :href="'/#/procuct/'+i" title="查看详情">
                            <img src="/imgs/logo-mi.png" alt="">
                            状态栏{{i}}
                        </a>   
                    </li>
                </ul>
            </div>
            <div class="ads-imgul">
                <ul>
                    <li v-for="i in 3" :key="i">
                        <a :href="'/#/procuct/'+i" title="查看详情">
                            <img :src="`/imgs/ads/ads-${i}.png`" alt="">
                        </a>   
                    </li>
                  
                </ul>
            </div>
        </div>
        <div class="banner">
            <a href="/#/product/1">
                <el-image src="/imgs/banner-1.png" lazy></el-image>
                <!-- <img src="/imgs/banner-1.png" alt="">-->
            </a> 
        </div>
        <div class="product-box">
            <div class="pro-title"></div>
            <div class="pro-left" @click="goProLeft()">
                <a-card 
                
                hoverable
                :bordered="false"
                 >
                    <template #cover>
                
                    <el-image src="/imgs/mix-alpha.jpg" lazy></el-image>
                    </template>
                    <a-card-meta title="xiaomi alpha">
                    <template #description>小米阿尔法-概念</template>
                    </a-card-meta>
                </a-card>
            </div>
            <div class="pro-right">
                <!-- //  :offset="index > 0 ? 4 : 0"
                 gutter="2"
                  :offset="1"
                    :span="5.5"
                    :offset="0.5"
                -->
                <!-- <el-row  >
                    <el-col
                    v-for="(o,index) in 8"
                    :key="o"
                    :sindex="index"
                    :span="6"
                    >
                   
                    </el-col>
                </el-row> -->

                <el-card   
                    shadow="hover"
                    :body-style="{
                        width: '234px',
                        height: '300px'}"
                         v-for="(o,index) in 8"
                         :key="index"
                        >
                        <el-image src="/imgs/product_phone.png" lazy></el-image>
                        <div style="padding: 14px">
                        <span>xiaoMi{{o}}</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button" @click="addCart(o)">

                                <img src="/imgs/icon-cart.png" alt="">
                            </el-button>
                        </div>
                        </div>
                </el-card>
            </div>
           
        </div>
        <service-bar></service-bar>
        <modal 
    :showModal="showModal"
    :title="'提示qq'"
    :sureText="'查看购物车'"
    btnType="3"
    :modalType="'middle'"
    @modal-sure="goToCart" 
    @modal-cancel ="showModal=false"
    >    
    <!-- 指定插槽名称 -->
        <template v-slot:body>
            <p>{{addcartMsg}}</p>
        </template>
    </modal>
    </div>
     

 
   
  
</div>
</template>

<script>
import {
    Navigation,
  
    Pagination,//分页器
    Autoplay,//自动播放1226-234
    Scrollbar,
    A11y,EffectCube
} from 'swiper';
import {
    Swiper,
    SwiperSlide 
} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';//所有Swiper模块样式(比如导航，分页样式等.)
import 'swiper/css/navigation';
/*
模块样式 (如果已经导入了bundle样式，则不需要此选项):
import 'swiper/css/autoplay'; //自动播放模块所需的样式
import 'swiper/css/navigation'; //导航模块所需的样式
import 'swiper/css/pagination'; //分页模块所需的样式
import 'swiper/css/scrollbar'; //滚动条模块所需的样式
import 'swiper/css/effect-cube'; // 立方体效果模块所需的样式
*/
import ServiceBar from '../components/ServiceBar'


/*ant design 跑马灯  轮播图 */
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';


/*element puls lazy 跑马灯  轮播图 */
import {elImage} from 'element-plus'

import { getCurrentInstance, ref } from 'vue';

/**dialog  遮罩层*/
import Modal from '../components/Modal';
export default {
    name: "page-index",
    data() {
        return {
            swpierOption: {
                "slides-per-view": 3,
                autoPlay: true,
                loop: false,
                effect: "cube",
                el:'.swiper-pagination',
                type:'fraction',
            },
            imgs: [
                "/imgs/slider/slide-1.jpg",
                "/imgs/slider/slide-2.jpg",
                "/imgs/slider/slide-3.jpg",
                "/imgs/slider/slide-4.jpg",
                "/imgs/slider/slide-5.jpg",
            ],
            menuList: [
                [
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米3",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-3.png",
                        name:"小米4",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-4.png",
                        name:"小米5",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米2",
                    },
                    
                    
                ],
                [
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米3",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-3.png",
                        name:"小米4",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-4.png",
                        name:"小米5",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米2",
                    },
                    
                    
                ],
                [
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米3",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-3.png",
                        name:"小米4",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-4.png",
                        name:"小米5",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米2",
                    },
                    
                    
                ],
                
                [
                    {
                        id:1,
                        imgs: "/imgs/item-box-1.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-2.png",
                        name:"小米1",
                    },
                    {
                        id:1,
                        imgs: "/imgs/item-box-3.png",
                        name:"小米1",
                    },
                ]
            ],
        }

    },
    components: {
        ServiceBar,
        Swiper,
        SwiperSlide,
        LeftCircleOutlined,
        RightCircleOutlined,
        elImage,
       Modal
        // LazyLoad,
       
    },
    setup() { //mounted
        const onSwiper = (swiper) => {
            console.log(swiper,"swiper");
          //  swiper.autoPlay = true;
          //监听swiper的事件会返回一个swiper实例，利用返回的实例可以通过调用其方法来对轮播图进行操作
        };
        const onSlideChange = () => {

            console.log('slide change');
        };
     //   const swiper = useSwiper({
        //     pagination:{

        //         el:".swiper-pagination",
        //         type:"fraction",

        //      clickable: true,//可点击 分页器
        //  }

        // });
       
        const cns = getCurrentInstance()
        console.log(cns.appContext.config.globalProperties, 'quanju');
        console.log(cns.appContext.config.globalProperties.$user)
        const router = cns.appContext.config.globalProperties.$router;
        const axios = cns.appContext.config.globalProperties.$axios;
        const  goProLeft=() =>{
            router.push("/product/1")
        }
        const currentDate = ref(new Date())
        let showModal = ref(Boolean);
        let addcartMsg = ref('');
        showModal.value = false;
        addcartMsg.value = "添加成功";

        
        const addCart = (id)=>{
            axios.get("/demo/index/addcart?pid=" + id).then((res) => {
                console.log(res, 'addcart');
                showModal.value = true;
                if (res.msg == 'success') {
                    addcartMsg.value='添加购物车成功'
                } else {
                    addcartMsg.value='添加购物车失败'
                }
            })
        }
        const goToCart = (val) => {
            console.log(val);
            router.push("/cart")
        }
      
        return {
            goProLeft,
            currentDate,
            onSwiper,
            onSlideChange,
            addCart,
            goToCart,
            showModal,
            addcartMsg,
           
            modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectCube],
        };
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';

.index {
    .container {
        @include container-base;
        display: block;

        .swiper-box {
            /**ant design */
            .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
                width: 25px;
                height: 25px;
                font-size: 25px;
                color: #ff6600;
                background-color: rgba(31, 45, 61, 0.11);
                opacity: 0.3;
                z-index: 1;
                }          
                .a-carousel{
                height: 541px;;
            }
            .ant-carousel :deep(.slick-prev::before){
                content: ' ';
            }
            /**end */
            position: relative;
            height: 451px;
            .nav-menu{
                width: 264px;
                position: absolute;
                left: 0;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                box-sizing: border-box;//盒模型 包括padding
                background: #55585a7a;//背景颜色可以设置透明度
                .menu-warp{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        &:hover{
                            background: #ff6600;
                            .children{
                                // width: 240.px;
                                display: flex;
                                opacity: 1;
                                transition: all 2s linear;
                              
                            }
                        }
                        .menu-item-name{
                            position: relative;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            display: block;
                            &:after{
                                content: ' ';
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                background: url(/public/imgs/icon-arrow.png) no-repeat center;
                                background-size: contain;
                                width: 10px;
                                height: 15px;
                            }
                        }
                        .children{
                           
                            display: none;
                            width: auto;
                            opacity: 0;
                            transition: all 2s linear;
                            position:absolute;
                            left: 264px;
                            top:0px;
                          ul{
                            display: inline-block;
                           
                            width: 240.5px;
                            height: 451px;
                            li{
                                height: 75.166666px;
                                line-height: 75.166666px;
                                a{
                                    color:#030303;
                                }
                                img{
                                    margin: 0px 15px 0 15px;
                                    vertical-align: middle;
                                    width: 40px;
                                    display: inline-block;
                                }
                            }
                            background: #ffffff;
                            a{
                                display: block;
                            }
                          }
                        }
                    }
                }
            }
            .swiper{
                width: 100%;
                height: 100%;
                --swiper-navigation-color: #00ff33;
                .swiper-button-prev{
                    left:264px;
                }
                a {
                    display: block;
                    height: 451px;
                    width: 1226px;
                    img {
                        width: 1226px;
                        height: 451px;
                    }
                    .el-image{
                        width: 1226px;
                        height: 100%;
                    }
                }
            }
           

        }

        .ads-box{
                height: 170px;
                margin-top: 15px;
                display: flex;
                justify-content: space-between;//项目在主轴上的对齐方式。
                .ads-list{
                    width: 296px;
                    
                    ul{
                        font-size: 12px;
                        text-align: center;
                        background: #5f5750;
                        width: auto;
                         
                        li{
                            display: inline-block;
                            width: 98.66665px;
                            height:85px ;
                            position: relative;
                            &:after{
                                position: absolute;
                                bottom: 0;
                                width: 60px;
                                left: 19px;
                                content: ' ';
                                border-bottom: 1px solid #ffffff;
                            }
                            &:before{
                                position: absolute;
                                top: 5px;
                                height: 75px;
                               
                                right: 0;
                                content: ' ';
                                border: 1px solid #ffffff;
                            }
                            a{
                                color: #000;
                                display: block;
                                line-height: 21px;
                            }
                            img{
                                width: 24px;
                                height: 24px;
                                display: block;
                                margin: 10px 36px;
                                // vertical-align: middle;
                               
                            }
                            &:hover{
                                a{
                                    color:#ffffff
                                }
                            }
                        }
                        li:nth-child(n+4){
                            &:after{
                                display: none;
                            }
                        }
                        li:nth-child(3n+0){
                            &:before{
                                display: none;
                            }
                        }
                    }
                }
                .ads-imgul{
                    width: 916px;
                 //   margin-right: 14px;
                    ul {
                        li{
                            width: 296px;
                            display: inline-block;
                            margin-right: 14px;
                            img{
                                width: 296px;
                                height: 170px;
                                display: block;
                            }
                            &:last-child{
                                margin-right: 0;
                            }
                            &:hover{
                                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.315);
                                -webkit-transition: -webkit-box-shadow .2s linear;
                                transition: -webkit-box-shadow .2s linear;
                                transition: box-shadow .2s linear;
                                transition: box-shadow .2s linear,-webkit-box-shadow .2s linear
                            }
                        }
                    }
                }
            }
         .banner{
            margin: 50px 0;
            a{
                display: block;
                img{
                    width: 100%;
                height: 100%;
                }
               
            }
         }
         .product-box{
            height: 614px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            .pro-title{
            }
                
            .pro-left{
                width: 234px;
                height: 614px;
                position: relative;
                :deep(.ant-card-cover){
                    height: 614px!important;
                }
                :deep(.ant-card-body){
                  
                    position: absolute;
                    bottom: 0;
                    background: #ffffff54;
                    width: 100%;
                    color: white;
                    height: 95px;
                    box-sizing: border-box;
                }
            }
            .pro-right{
                display: flex;
                justify-content: space-between;
                width: 992px;
                flex-wrap: wrap;
                :deep(.el-card){
                    width: 234px; 
                    height: 300px;
                    margin-left: 14px;
                    .el-image{
                    height: 160px;
                    width: 160px;
                    }
                    &:nth-child(n+5){
                        margin-top: 14px;
                    }
                }
                        /*
                :deep(.el-row){
                    justify-content: space-between;
                    :deep(.el-col){

                    }
                    
                }
                */
            }
            
        }
    }

}
</style>
