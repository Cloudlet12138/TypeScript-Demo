// 泛型

// function xiaoman(a: number, b: number): Array<Number> {
//     return [a, b]
// }

// function xiaoman(a: string, b: string): Array<string> {
//     return [a, b]
// }

function xiaoman<T>(a: T, b: T):Array<T> {
    return [a, b]
}
console.log(xiaoman(1, 2))


type A<T> = string | number | T

// let a:A<boolean> = '123'

let a:A<null> = '123'


interface Data1<T> {
    msg: T
}

let data1:Data1<string> = {
    msg: '123'
}


function exa<T, K>(a: T, b: K): Array<T | K>{
    return [a, b]
}

exa(1, false)

