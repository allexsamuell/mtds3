const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 100]

const maiorN=numeros.reduce(function(acumulo,atual){
  return atual>acumulo?atual:acumulo
  
})
console.log(maiorN)