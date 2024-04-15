




// type s = string;
// type s = number;
// type s = string[]
// type s = () => void
type s = {
    name: string,
    readonly id: number
} | B

type B = string;

let f:s = {
    name: '小曼',
    id: 123
}