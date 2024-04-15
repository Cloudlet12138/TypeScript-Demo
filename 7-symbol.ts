let Aa = Symbol(1)
let Ab = Symbol(1)


console.log(Symbol.for('seh') === Symbol.for('seh'))


console.log(Aa === Ab)

let SyObj = {
    name: '123',
    [Aa]: 111,
    [Ab]: 222
}

console.log(SyObj)

// for in 不能读到Symbol  object.key也不行 
for(let key in SyObj) {
    console.log(key, SyObj[key])
}

console.log(Object.getOwnPropertyNames(SyObj))

console.log(Object.getOwnPropertySymbols(SyObj))

console.log(Reflect.ownKeys(SyObj))
