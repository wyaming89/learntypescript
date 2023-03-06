//接口
//一个JS中常见的函数参数的例子
function printLabel(labelledObj:{label:string}){
    console.log(labelledObj)
}

let myObj = {size:10, label:"Size 10 Object"}
let myObj2 = {size:10, type: 'label'}
printLabel(myObj)
// printLabel(myObj2) 错误：没有label属性

//可选属性
//即部分属性是可以没有的，使用方式是在属性名后加？
interface SquareConfig {
    color?:string
    width?: number
}
let newInterface : SquareConfig = {
    color: 'red',
    width: 100
}
console.log(newInterface)
//可选属性的好处之一是可以对可能存在的属性进行预定义
//好处二是可以捕获引用了不存在的属性时的错误，如属性拼写错误

//只读属性
interface Point {
    readonly x: number;
    readonly y: number
}

//额外属性检查
//像一开始的例子，如果在接口定义了额外未在接口定义时定义的属性，会如何
let newinterface2 : SquareConfig = {
    //size: 100,//错误
    color:'red'
}

//如何解决
//1.使用类型断言
let newinterface3 :SquareConfig = {color:'red', size:100 } as SquareConfig

//2.最佳方式是添加一个字符串索引签名
interface SquareConfig2 {
    color?:string,
    width?:number,
    [proName:string]:any
}

let newinterface4 :SquareConfig2 = {
    color: 'red',
    size:100,
    owner: {name:'tom',age: 12}
}

//函数类型
