<template>
    <div class="test">
        <h2 class="title">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "清北大学",
            address: "清华路",
        }
    }
}
</script>

<!-- scoped 局部的，只负责这个文件的 template 中的结构渲染 -->
<style scoped>
    .test {
        background-color: skyblue;
    }
</style>