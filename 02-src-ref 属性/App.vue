<template>
    <!-- 
     
    ref
    1、被用来给元素或子组件注册引用信息 （id的替代者）
    2、应用在 html 标签上获取的真实 DOM 元素，应用在组件标签上是组件的实例对象（vc）
    3、使用方式
        打标识：<h1 ref="xxx">xxxxx<h1> 或 <School ref="xxx"></School>
        获取：this.$refs.xxx
    
    -->
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
    name: "App",
    components: {
        School,
        Student
    },
    data() {
        return {
            msg: "欢迎学习"
        }
    },
    methods: {    
        showDOM() {
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
            console.log(this.$refs.sch)
        }
    }
}
</script>