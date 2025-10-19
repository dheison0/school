// Aula chata, já utilizo Node.JS faz um bom tempo

function fact(n) {
    if (n == 1) {
        return 1
    }
    return n * fact(n - 1)
}

const fact_a = (n) => (n == 1) ? 1 : n * fact_a(n - 1)

console.log("Alo Mundo!")
let fat5 = fact(5)
console.log(fat5)
console.log(fat5 / 5)
console.log(fat5 / 2)
console.log(fact_a(5))