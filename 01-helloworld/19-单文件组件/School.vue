<template>
     <!-- 组件的结构 -->
     <div class="demo">
        {{name}}
    </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name: 'School',
        data() {
            return {
                name: "学校"
            }
        },
        methods: {
            
        },
    }
</script>

<style>
    /* 组件样式 */
    .demo {
        background-color: orange;
    }
</style>