<template>
    <div>
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
// import { mixin,mixin2 } from './../mixin';
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: '男'
        }
    },
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // }
    // mixins:[mixin,mixin2]
}
</script>

<style>
    h2 {
        background-color: aqua;
    }
</style>