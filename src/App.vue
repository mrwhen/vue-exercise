<template>
    <div>
        <School />
        <br>
        <Student />
    </div>
</template>

<script>
// 引入顺序会影响样式的覆盖顺序
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
    name: "App",
    components: {
        School,
        Student
    }
}
</script>

<!-- 

让样式局部生效

仅对 app 生效 
不写 lang，默认 css 
-->
<!-- <style scoped>
.title {
    color: red;
}
</style> -->

<!-- <style lang="css">
    .title {
        color: red;
    }
</style> -->

<!-- 支持嵌套编写 -->
<!-- <style lang="less">
    .title {
        color: red;
    }
</style> -->