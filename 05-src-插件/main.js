import Vue from 'vue'
import App from "./App.vue"
// 如果是默认导出，不能用{}包裹
import plug from './plugins'

// 应用插件
// 给插件传参
Vue.use(plug,1,2,3)

new Vue({
    el: "#app",
    render: h => h(App)
})

/*

插件本质：对象，必须包含 install

Vue.use()
*/