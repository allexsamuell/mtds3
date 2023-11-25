const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const aMaior=cidades.reduce(function(acumolo,atual){
  return atual.length>acumolo.length?atual:acumolo
})
console.log(aMaior)