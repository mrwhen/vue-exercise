<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <Student name="李四" :age="18" sex="女"/>
    </div>
</template>

<script>
// import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
    name: "App",
    components: {
        // School,
        Student
    },
    data() {
        return {
            msg: "展示学生信息"
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