let arr: number[] = [1, 2, 3, 4]

let arr3: string[] = ['1', '2', '3']

let arr1:Array<boolean> = [true, false, true]

let arr2: Array<string> = ['1', '2', '3']



// 定义对象数组
interface Qq {
    name: string,
    age?: number,
    [propNama: string]: any,
    readonly id: string
}


let arr4: Qq[] = [{ name: 'ikun', id: '123', age: 123 }]


// 定义二维数组
let arr5: number[][] = [[1], [2], [3]]

let arr6: Array<Array<number>> = [[1], [2], [3]]


// 大杂烩数组
let arr7: Array<any> = [1, '123', {}]

let arr8: any[] = [1, '123', {}]

// 函数
function fn1(...arg: string[]) {
    console.log(arg)
    const a1: IArguments = arguments
    // const a1: Arg = arguments
    
}

fn1('1', '2', '3')


interface Arg {
    length: number,
    callee: Function,
    [index: number]: any
}