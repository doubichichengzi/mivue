<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">111</a><span>|</span>
            <a href="">222</a><span>|</span>
            <a href="">333</a><span>|</span>
            <a href="">444</a><span>|</span>
            <a href="">555</a><span>|</span>
        </div>
        <div class="copyright">大琪杀猪了@c<span @click="toMyIndex()">我的主页</span></div>

</div>
</template>
<script >
export default {
    name:"nav-footer",
    methods: {
        toMyIndex() {
           // window.location.href = 'http://www.daqishazhula.cn';
            window.open('http://www.daqishazhula.cn');
        }
   }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
.footer{
    height:234px;
    border-top: 4px solid $colorA;
    background: $colorB;
    color:$colorD;
    font-size: 16px;
    text-align: center;
    a{
        color:$colorD;
    }
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        margin-bottom: 15px;
        a{
            font-size: 14px;
            color: $colorD;
            display: inline-block;
        }
        span{
            display: inline-block;
            color: $colorD;
            margin:0 10px ;
        }
    }
    .copyright{
        color: $colorD;
        font-size: 14px;
    }
}
</style>
