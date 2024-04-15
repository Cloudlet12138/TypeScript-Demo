// 1  生成器

function* gen() {
    yield Promise.resolve('my')
    yield '123'
    yield '456'
    yield '789'
}

const man = gen()

console.log(man.next())
console.log(man.next())
console.log(man.next())
console.log(man.next())
console.log(man.next())


// 2  迭代器 set map 

const opl:Set<number> = new Set([1, 1, 2, 2, 3])  // 天然去重

console.log(opl)
 
const opm:Map<any, any> = new Map()

let ar = [1, 2, 3, 4]

opm.set(ar, '123')

console.log(opm)
console.log(opm.get(ar))


function arg() {
    console.log(arguments) // 伪数组
}


function each(value: any):void{
    let It: any = value[Symbol.iterator]()
    let next: any = { done: false }
    while(!next.done) {
        next = It.next()
        if(!next.done) {
            console.log(next.value)
        }
    }
}
each(ar)

// 语法糖 for of  对象无法使用 因为对象没有迭代器

for(let key of opl) {
    console.log(key)
}


// 解构的原理也是调用iterator
