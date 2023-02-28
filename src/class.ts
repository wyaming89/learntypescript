//类的学习
//一个简单的类，包含一个类属性greeting、一个构造函数、一个类方法greet;
class Greeter {
    greeting: string;
    constructor(message:string) {
        //在类中，使用this来引用成员
        this.greeting = message; 
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
// new className()创建类实例
function main1() {
    let greeter = new Greeter('world');
    let message = greeter.greet()
    console.log(message)
}
// main1();

//类的继承
class Animal {
    name: string;
    constructor(theName:string ){
        this.name = theName
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//一个Snake子类继承Animal类
class Snake extends Animal {

    constructor(name:string) {
        //使用super调用父类构造函数
        // -*-在构造函数访问this的的属性之前，一定要调用super()
        super(name)
    }
    //派生类可以重新基类的方法
    move(distanceInMeters: number=5): void {
        console.log("Slithering....");
        //使用super.method()调用基类中的方法
        super.move(distanceInMeters);
    }
}

//一个Horse子类继承Animal类
class Horse extends Animal {
    constructor(name:string) {
        super(name)
    }
    move(distanceInMeters: number=45): void {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

function main2():void {

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move()
    tom.move(34)
}
// main2()

//公共、私有、受保护修饰符
//在TypeScript, 成员默认为Public
class Animal2 {
    public name: string;
    public constructor(theName:string) {
        this.name = theName
    }
    public move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

//当成员被标记为private时，就不能在声明以外的类中外部访问
//protected修饰符与private修饰符类似，但protected成员在派生类中可以访问

//参数属性
//参数属性方便在定义的同时初始化成员
class Animal3 {
    constructor(private name:string) {
        
    }
    move(distanceInMeters:number=10){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

function main3():void {
    let tom = new Animal3('Tom')
    tom.move()
}
// main3()

//存取器
//TypeScript支持通过getters/setters来截取对对象成员的访问
let passcode = "secret passcode"
class Employee {
    private _fullName: string;
    constructor() {
        this._fullName='Tom'
    }
    get fullName():string{
        return this._fullName;
    }
    //通过setters为成员属性修改设置处理hook
    set fullName(newName:string){
        if(passcode && passcode=="secret passcode"){
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

function main4():void {
    let employee = new Employee();
    employee.fullName = 'Bob Smith'
    if(employee.fullName){
        console.log(employee.fullName)
    }
}
// main4()

//静态属性
//与在类实例化时会进行初始化的实例属性不同，静态属性跟随类本身定义
//与实例属性this.访问不同，静态属性使用 ”类名.“访问
class Grid {
    static origin = {x:0, y:0};
    constructor(public scale:number) {
        
    }
    calculateDistanceFromOrigin(point:{x:number, y:number}){
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y)
        return Math.sqrt(xDist**2 + yDist**2)/this.scale
    }
}

function main5():void {
    let grid1 = new Grid(1.0)
    let grid2 = new Grid(5.0)
    console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}))
    console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}))
}
// main5()

//抽象类
//抽象类用作其他派生类的基类，一般不会直接实例化；
//使用关键字abstract定义抽象类，及抽象类内部的抽象方法

abstract class Department {
    constructor(public name:string) {
        
    }
    printName():void{
        console.log('Department name: '+ this.name)
    }
    //抽象方法必须在派生类中实现
    abstract printMeeting():void;
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.')
    }
    generateReports():void{
        console.log('Generating accounting reports...')
    }

}

//如果不实现抽象方法
class SalesDepartment extends Department {
    constructor(){
        super('Sales and Market')
    }
    makePlan():void{
        console.log('make sales plan')
    }
}

function main6():void  {
    let department: Department;
    // department = new Department(); 直接实例化抽象类会提示错误
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
    // department.genreateReports(); 错误：方法在声明的类型Department(抽象类)中不存在

    let department2: AccountingDepartment
    department2 = new AccountingDepartment();
    department2.printName();
    department2.printMeeting();
    department2.generateReports();

    //let department3 = new SalesDepartment();//错误：因为派生类没实现抽象方法
    //department3.makePlan()
}
main6();