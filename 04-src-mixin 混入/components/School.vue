<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
// import { mixin,mixin2 } from './../mixin';
export default {
    name: "School",
    data() {
        return {
            name: "清北大学",
            address: "清华路",
            // 优先级高于 '混合' 中定义的 x
            x: 999
        }
    },
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // }
    // mixins: [mixin, mixin2],
    // 在混合之后执行
    // mounted() {
    //     console.log('School:你好啊')
    // },
}
</script>

<style>
    h2 {
        background-color: aqua;
    }
</style>