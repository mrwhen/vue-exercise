import Vue from 'vue'
import App from './App.vue'
// import App from './App.vue'

// let person = {name: 'tom', age: 18}

new Vue({
    el: '#app',
    // components: {App},
    // render: h => h(App),
    // render(createElement) {
    //     return createElement('h1', '你好')
    // }
    render: h => h(App)
})  