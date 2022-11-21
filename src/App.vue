<template>
    <!-- <h1>{{user.name}}</h1> -->
  <router-view></router-view>
  <!-- <router-link to="/list">toDoList</router-link> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import axios from 'axios'
import { reactive, ref } from '@vue/reactivity';
//import jsonp from 'jsonp'
//import storage from './storage/index.js';
export default {
  name: 'App',
  data() {
    return {
      sex: "",
    }
  },
  mounted() {
    var sex1 = ref("sex");

    sex1.value = '男';
    this.sex = sex1;
    console.log(this.sex,'app-sex');


    // jsonp(url, (err, res) => {
    //   let result = res;
    //   console.log(result);
    // })
  },
  setup() {
    const title = ref("title");//包装式对象 响应式对象 普通类型 字符串 int bool
    title.value = '学习vue3~';//使用value 调用
   
    let user = reactive({
      name: "",
    });//创建引用类型
    //let url = '/demo/index';
   // let userApi = axios.get(url);

    // loading  axios.all([fn1(),fn2()]).then(axios.spread(function(acct,perms)));
    /*
    axios({
      method: "get",
      url: "/demo/demo/index",
      data: {

      }
    }).then((data) => {
      console.log(data.data.data, 'method');
    })
    */ /*
    userApi.then((data) => {
      console.log(data,'app-user-login');
      let res = data.data;
      user.name = res["user"].username;

     
      let user_login = res["user"];
      let token = res["token"];
      //storage.setItem('user2', res['data']);
      // storage.setItem('sex', 1,'user2');
      //storage.clear('user2');
      storage.setItem('user',user_login);
      storage.setItem('token', token);
      console.log(user);
      
    });
    userApi.catch((err) => {
      console.log(err);
    })
   */
    return {
      title,
      user
    }
  },
  components: {

  },


}

</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
