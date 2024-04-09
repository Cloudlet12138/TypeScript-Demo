// 联合类型  

let number: number | string = '010-123344322'

let fn2 = (type: number | boolean) : boolean => {
    return !!type
} 


console.log(fn2(1))


// 交叉  和extends 类似

interface Seh {
    name: string,
    age: number
}

interface man {
    sex: string
}


function getPerson(user: Seh & man): void {
    console.log(user)
}


getPerson({name: 'xiaoman', age: 20, sex: '男'})


// 类型断言

let dyfn = (num: number | string): void => {
    console.log((num as string).length)
}


dyfn('123')


interface M {
    build: string,
}

interface N {
    run: string,
}

let sbfn = (type: M | N):void => {
    // console.log((<M>type).build)
    console.log((type as M).build)
}


sbfn({ build: '123' })