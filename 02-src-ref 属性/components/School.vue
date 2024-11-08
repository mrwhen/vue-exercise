<template>
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "清北大学",
            address: "清华路"
        }
    }
}
</script>

<style>
    h2 {
        background-color: aqua;
    }
</style>