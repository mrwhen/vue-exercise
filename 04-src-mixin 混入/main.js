import Vue from 'vue'
import App from "./App.vue"
import {mixin,mixin2} from './mixin'

// 全局，vm 身上哪哪都是了
Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
    el: "#app",
    render: h => h(App)
})

/*

mixin 混入
功能：将多个组件共用的配置提取成一个混入对象
使用方式：
1、定义混入
{
    data() {
    },
    methods:{}
}
2、使用混入
-全局混入
Vue.mixin(xxx)
-局部混入
mixins:[xx,xx]

*/