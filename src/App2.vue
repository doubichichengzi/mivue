<template>
  <div class="app"></div>
  <h1>{{title}}</h1>
  <h1>作者{{user.name}}</h1>
  <h1>性别{{sex}}</h1>
  <router-view></router-view>
  <router-link to="/list">toDoList</router-link>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import { reactive, ref } from '@vue/reactivity';
//import jsonp from 'jsonp'

export default {
  name: 'App',
  data() {
    return {
      sex:"",
    }
  },
  mounted() {
    var sex1 = ref("sex");
     
    sex1.value = '男';
    this.sex = sex1;
    console.log(this.sex);

    
    // jsonp(url, (err, res) => {
    //   let result = res;
    //   console.log(result);
    // })
  },
  setup() {
    const title = ref("title");//包装式对象 响应式对象 普通类型 字符串 int bool
    title.value = '学习vue3~';//使用value 调用
    let url = '/demo/demo/index';
    let user = reactive({
      name:"",
    });//创建引用类型
    let userApi = axios.get(url);

    userApi.then((data) => { 
      console.log(data);
      let res = data.data;
      user.name = res["data"].username;
    });
    userApi.catch((err) => {
      console.log(err);
    })
    console.log(user);
    return {
      title,
      user
     }
  },
  components: {
    
  },
  
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
