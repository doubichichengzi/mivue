<template>
    <div class="app">
        <div class="box">
            <!-- vue3可以使用多个v-model -->
            <a-input v-model:value="text" @keyup.enter="addItem"></a-input>
            <a-button @click="addItem">Add</a-button>
            <div>{{computedText}}</div>
        </div>
        <div class="list">
            <ul>
                <!-- 3比2 if>for 优先级 -->
                <li v-for="item in list" :key="item.id">
                    <span @click="update(item.id)" :class="item.done?'line':''">{{item.text}}</span>
                    <a  @click="removeItem(item.id)">X</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import {ref,reactive, computed} from 'vue'
export default {
    name:"to-dos",
    setup() {
        let text = ref('');//包装式对象
        let list = reactive([]);
        let id = 1;
        const computedText = computed(() => {
            return text.value;
        })
        const addItem = () => {
            list.push({
                id: ++id,
                text: text.value,
                done:false
                
            })
            text.value = "";
        }
        const removeItem = (id) => {
            // 为数组中的每个元素都调用一次函数的执行:
            const index = list.findIndex((item) => item.id === id);
           
            /*
            array.splice(index, howmany, item1,...itemx)

            1. index 必须。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置。

            2. 可选，要删除的项目数。若设置为0，则不会删除任何项目。

            3. item1,...,itemx 可选，要添加到数组中的新项目。

            返回值： 新数组，包含删除的项目 （如果有）。

            1. 如果想截取原数组的某些数组片段，用slice，取返回值
            2. 想增加或删除原数组中的某些值，用splice
            3. 字符串的截取，用slice
            */
            list.splice(index, 1);//删除数组中的元素

        }
        const update = (id) => {
            //返回一个新数组，数组中的元素为原始数组调用函数处理后的值，并且按照原始数组元素调用函数处理后的值

            list.map(item => {
                if (item.id === id) {
                    item.done=!item.done
                }
            })
           // console.log(list);
        }
      
        return {
            text,
            list,
            computedText,
            addItem,
            removeItem,
            update
        }
    },
}
</script>
<style>
.app{
    width: 70%;
    margin: 50px auto;
    
}
.box{
    width: 100%;
    margin: 0 auto;
    /* display: flex;
    align-content: center; */
    /* flex-flow:row;
    justify-content: space-between; */
}
.box>input {
    width: 300px;
}
.line{
    text-decoration: line-through;
}
</style>