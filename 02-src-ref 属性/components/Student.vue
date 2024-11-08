<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "sean",
            age: 20,
        }
    }
}
</script>

<style>
    h2 {
        background-color: blueviolet;
    }
</style>