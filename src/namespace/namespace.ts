//命名空间

//当一个模块中，各种成员不断增加（类、变量、函数），需要一种方式来组织代码，避免潜在的命名冲突
//
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings = ['Hello','98052','101'];

let validators: { [s:string ]: Validation.StringValidator;} = {}
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" = ${validators[name].isAcceptable(s) ? "matches":"does not match"} ${name}`);
    }
}

//别名
//可以通过 import q = x.y.z 来简化命名空间，减少namespace.member.method的工作量
//别名也适用于模块
namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}

import polygons = Shapes.Polygons
let sq = new polygons.Square(); //等同于 new Shapes.Polygons.Square()

