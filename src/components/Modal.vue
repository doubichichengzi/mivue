<template>
    <transition name="slider">
        <div class="modal" v-show="showModal">
            <!-- 遮罩层 -->
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="m-header">
                    <span class="m-title">{{title}}</span>
                    <a href="javascript:;"  class="m-close" @click="modalCancel()"></a>
                </div>
                <div class="m-body">
                    <slot name="body"></slot>
                </div>
                <div class="m-footer">
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" @click="modalSure()">{{sureText}}</a>
                        <a href="javascript:;" class="btn" @click="modalCancel()">{{cancelText}}</a>
                    </div>
                    <div class="btn-group" v-if="btnType==2">
                        <a href="javascript:;" class="btn" @click="modalCancel()">{{cancelText}}</a>
                       
                    </div>
                    <div class="btn-group" v-if="btnType==1">
                        <a href="javascript:;" class="btn" @click="modalSure()">{{sureText}}</a>
                    </div>
                </div>
            </div>

        </div>
    </transition>
        <!-- 
    -->
</template>

<script>
//import { ref} from 'vue';
export default {
    name: "modal-",
    props: {
        //弹框类型 小 small 中 middle 打 large 表单 form
        modalType:{
            type: String,
            default:'small',
        },
     
        title: {
            type: String,
            default:"提示"
        },
        //按钮类型  1确定 2取消 3确定取消
        btnType: {
            type: String,
            default:'3',
        },
        sureText: {
            type: String,
            default:"确定",
        },
        cancelText: {
            type: String,
            default:"取消",
        },
        msg: {
            default: "提示框",
            type:String
        },
        showModal: {
            type: Boolean,
            default:false,
        },
    },
  
    methods: {
        modalSure() {
            console.log("wozai里面");
            // v2 写法  使用 $emit 进行事件传递和监听 触发自己的同时 触发 引用该组件的方法 父组件为 @modal-sure="function()"
            this.$emit("modal-sure", "我在里面")  
           //v3
        },
    },
    emit:["modal-cancel"],
    setup(props, { emit }) {
       
        const modalCancel=()=>{
            emit('modal-cancel', '我在里面取消');
            console.log("我在里面取消");
   
        }
        return {
            modalCancel,
         
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/modal.scss';
</style>
