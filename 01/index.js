const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const crescer=numeros.sort(function(a,b){
  return a-b
})
console.log(crescer)

const diminuir=numeros.sort(function(a,b){
  return b-a
})
console.log(diminuir)


const padrao=numeros.sort()

console.log(padrao)

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const alfa=frutas.sort()
console.log(alfa)

const fabeto=frutas.sort().reverse()

console.log(fabeto)


