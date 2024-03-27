interface Person extends Xx {
    age: number,
    sex: string,
    name?: string,
    readonly id: string,
    readonly cb: () => boolean,
    [propName: string]: any  // 索引签名
}

interface Xx {
    xxx: string
}

const a1:Person = {
    age: 18,
    sex: '男',
    ikun: true,
    id: '',
    cb: () => {
        return false
    },
    xxx: '1'
}

// a1.id = '23331222'  
// a1.cb = () => { return true }

console.log(a1)

interface Fn {
    (name: string): number[]
}

const fn: Fn = (name: string) => {
    return [1, 2, 3]
}

console.log(fn)