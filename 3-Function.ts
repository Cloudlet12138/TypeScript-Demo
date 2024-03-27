function add(a: number, b: number = 10): number {
    return a + b
}


// const add2 = (a: number, b: number) : number => {
//     return a + b
// }

console.log(add(1))


interface XiaoM {
    name: string,
    age: number,
    [propName: string]: any
}

interface Res {
    msg: string,
    data: Array<XiaoM>
}

const Sn = (params: XiaoM): Res => {
    return {
        msg: '操作成功',
        data: [params]
    }
}

console.log(Sn({name: 'ikun', age: 21, py: 8888888 }))