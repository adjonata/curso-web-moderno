let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(typeof module.exports)

// criando uma variavel maluca sem var e let
abc = 3 // nao faça isso
console.log(global.abc)

// module.exports = { e: 123, f: false, g: 'teste' }
