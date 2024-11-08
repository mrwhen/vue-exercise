<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生年龄：{{ myAge+1 }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="changeAge">点我给年龄+1</button>
    </div>
</template>

<script>
export default {
    // props中的属性不能修改
        // 如果想修改，只能用另外一种方式
            // - vue 优先处理 props
            // - 再处理data
    // props中的属性优先级最高 

    name: "School",
    data() {
        console.log(this)
        return {
            msg: "我是一个清北的学生",
            myAge: this.age
        }
    },
    methods: {
        changeAge() {
            this.myAge += 1
        }
    },

    // 简单声明接收
    // props: ['name','age','sex'] 

    // 接收的同时，对数据进行类型限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }

    // 接收的同时，对类型限制，而且有必要性限制，也支持默认值
    props: {
        name: {
            type: String,
            Required: true
        },
        age: {
            type: Number,
            default: 99
        },
        sex: {
            type: String,
            Required: true
        }
    }
}
</script>

<style>
    h2 {
        background-color: blueviolet;
    }
</style>