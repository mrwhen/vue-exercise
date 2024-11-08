1、一种组件间通信的方式，适用于：子组件====》父组件
2、使用场景：A 是父组件，B 是子组件，B 想给 A 传数组，那么就要在 A 中给 B 绑定自定义事件（事件的回调在 A 中）
3、绑定自定义事件
    1、方式 1：在父组件中
        <Demo @atguigu="test" /> 
        <Demo v-on:atguigu="test" />
    2、方式 2：在父组件中
        <Demo ref="demo" />
        mounted() {
            this.$refs.xxx.$on('atguigu', this.test)
        }
    3、若想让自定义事件只触发一次，可以使用 once 修饰符或者 $once 方法
    4、触发自定义事件：$this.emit('atguigu', 数据)
    5、解绑自定义事件：$this.off('atguigu')
    6、组件上也可以绑定原生 DOM 事件，需要使用 native修饰符
    7、注意: 通过this.$refs.xxx.$on('atguigu', 回调)绑定自定义事件时，回调要么配置在 methods中，要么用箭头函数，否则 this 指向会出问题