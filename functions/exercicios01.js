// Crie uma função para verificar se um valor é Truthy
/* function verificar(n){
    if (n === '0'){
        return false
    }else
        return true}

/* Correção: 
function isTruthy(dado){
    return !!dado
}
*/

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
/*
function areaQuadrado(lado){
   return lado * 4 
  
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = 'Yan Alves'
function nomecompleto(){
    var nome = 'Yan Alves'
    return nome
}
console.log (nomecompleto())

/*
Correção: 
function nomecompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
*/

// Crie uma função que verifica se um número é par
/*
function parOuImpar(n){
    if (n % 2 == 0){
        return 'Número é par'
    }else {
        return 'Número é ímpar'
    }
}
console.log(parOuImpar)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(){
    return typeof tipo;
}
console.log(tipo('Yan'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function() ) {
    console.log('clicou!')
}
*/ 
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;}

console.log(precisoVisitar(23))
console.log(jaVisitei(10))