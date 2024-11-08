// 分别导入
const obj = {
    // install方法必须存在
    install(Vue,x,y,z) {
        // console.log(x,y,z)
        // 这里面可以干很多事，vm，vc 就都能用了
        // 1、过滤器
        // 2、自定义指令
        // 3、定义混入
        // 4、定义原型方法
        Vue.filter()
        Vue.directive()
        Vue.mixin()
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}

// 默认导入，import 时可自定义导入名称
export default obj

// 增强，优秀的插件
// 开源的很多指令和过滤器等等都可以使用了