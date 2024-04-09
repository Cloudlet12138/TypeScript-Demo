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


interface ObjF {
    user: number[],
    cb: (this:ObjF, num: Number) => void
}


let obj: ObjF = {
    user: [1, 2, 3],
    cb(this: ObjF) {
        this.user.push(4)
    }
}

obj.cb(4)

console.log(obj.user)


// 函数重载

let user: Array<number> = [1, 2, 3]

function findmore(add: number[]): number[];  // 如果传入数组则做添加
function findmore(id: number): number[];  // 如果传入id则是查询
function findmore(): number[];  // 如果没有传入则查全部


function findmore(ids?: number[] | number ): number[] {
    if(typeof ids === 'number') {
        return user.filter(v => v ===ids)
    }else if(Array.isArray(ids)) {
        user.push(...ids)
        return user
    }else {
        return user
    }
}

console.log(findmore([4, 5, 6]))