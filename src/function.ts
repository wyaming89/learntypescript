//函数类型
//思考在JavaScript中定义函数的方式
//具名函数
// function add(x,y) {
//     return x+y
// }
//匿名函数
// let myAdd = function(x,y){return x+y;}

//在使用匿名方式定义函数时，是将一个匿名函数赋值给了一个变量
//如果跟TypeScript的方式，可以拆解为两步，1.定义变量，同时定义变量类型，2.赋值
//这里就会出现变量定义的类型是函数类型

//为函数定义类型
let myAdd2: (x:number, y:number)=>number=function(x:number,y:number):number {return x + y }
//这里"(x:number, y:number)=>number"是变量的函数类型
//"function(x:number,y:number):number(return x+y}"是变量的初始值
/* 
myAdd2=function(a:string,b:string):string{return a+b}
错误：参数a的类型是string，与x类型number不匹配
 */
/*
返回值类型是必须的，如果没有返回值，必须指定类型void
*/
//变量赋值时推断类型也适用于函数定义类型
//可选参数和默认参数
//在Typescript中，在参数后加上？实现可选参数
function buildName(firstName:string, lastName?:string):string {
    if(lastName)
        return firstName + ' ' + lastName
    else
        return firstName
}
//当然也可以使用默认参数实现
function buildName2(firstName:string, lastName:string='Smith'){
    return firstName + ' ' + lastName
}

//剩余参数
function buildName3(firstName:string, ...restOfName:string[]){
    return firstName + " " + restOfName.join(" ");
}
let buildNameFun: (fname:string, ...rest:string[]) => string = buildName3

