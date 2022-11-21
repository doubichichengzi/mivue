<template>
    <div class="service">
        <div class="container">
            <ul>
                <li>
                    <span class="icon-setting"></span>
                    服务1</li>
                <li><span class="icon-setting"></span>服务2</li>
                <li><span class="icon-setting"></span>服务3</li>
                <li><span class="icon-setting"></span>服务4</li>
            </ul>
        </div>
    </div>
</template>
<script >
export default {
    name:"service-bar",
    methods: {
       
   }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/custom.scss';
.service{
    padding: 20px 0;
    font-size: 16px;
    color: $colorD;
    // line-height: 30px;
    .container{
        @include container-base;
        ul{
            width: 100%;
            margin-bottom: 0;
        }
    }
    li{
        display: inline-block;
        width:24.9%;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        &:last-child{
        border: none;
    }
    }
    span{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;//让元素居中展示
    }
    .icon-setting{
        background: url(/public/imgs/icon-setting.png) no-repeat center;
        background-size: contain;
    }
  
}
</style>