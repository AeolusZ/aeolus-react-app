import React from 'react'


console.log('==========数组的解构赋值=========')
let [a,b,c] = [1,2,3]
console.log(a,b,c)
let [x,y,z] = new Set(['a', 'b', 'c'])
console.log(x,y,z)
let[m = 1] = [null]
let[n = 1] = [undefined]
console.log(m, n)

console.log('==========对象的解构赋值=========')
let { bar, foo } = {bar: 'ss', baz: 'bb'}
console.log(bar, foo)
let { baa } = { foo: "aaa", bar: "bbb" }
console.log(baa)
let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
console.log(baz)
// let { fq: bas}  = {bas: 'baz'};
// console.log(fq)
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
// console.log({0: 1, 1: 2, 2: 3} === [1,2,3])
console.log(first, last)
var { message: msg = 'Something went wrong' } = {};
console.log(msg)

console.log('==========字符串的解构赋值=========')
const [ d, e, f, g , h] = 'hello';
console.log(d, e, f, g, h)
let {length : len} = 'hello';
console.log(len)

console.log('==========数值和布尔值的解构赋值=========')
let {toString: s} = 123;
console.log(s )


class Deconstruction extends React.PureComponent {
  render() {
    console.log(this.props)
    return (<div>
    变量的解构赋值
    </div>)
  }
}

export default Deconstruction

