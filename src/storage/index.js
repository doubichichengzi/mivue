/**
 * 
 * Storage 封装
 * 
 * 
 */

const STORAGE_KEY = 'mall';
export default {
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;

            // console.log(val);
            // return;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }

    },
    //获取某一个模块下面的属性
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage() {
        /**
         * 
         * 
         * JSON 通常用于与服务端交换数据。
            在接收服务器数据时一般是字符串。
            我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。
         */
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{} ');
    },
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));

    }

}