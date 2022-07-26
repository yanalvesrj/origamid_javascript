// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
/*
var dadosPessoais = {
  nome: 'yan',
  sobrenome:'Alves',
  idade: '25',
  sexo: 'masculino',
  profissao: 'autonomo',

}
*/


// Crie um método no objeto anterior, que mostre o seu nome completo
 /*
 var dadosPessoais = {
  nome: 'yan',
  sobrenome:'Alves',
  idade: '25',
  sexo: 'masculino',
  profissao: 'autonomo',
}

dadosPessoais.nCompleto() = function(){
  return  `${this.nome} ${this.sobrenome}`
}


// Modifique o valor da propriedade preco para 3000
/*
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

console.log(carro.preco)*/
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem */
/*
var cachorro = {
  cor: 'preto',
  idade:'10',
  raça: labrador
  late: 'ao ver um homem',

if cachorro.late !=='ao ver um homem'{
  cachorro.late =='não'
}
}

/* CORREÇÃO */
var cachorro = {
  cor: 'preto',
  idade:'10',
  raça: 'labrador',
  latir(pessoa){
    if (pessoa ==='homem'){
      return 'latir';
    }else {
      return'Nada';
    }
  }

}
console.log(cachorro)
