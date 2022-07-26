/* Como construir um objeto */
/* Cada objeto possui os suas propriedades nome, idade etc. */
/*
var pessoa = {
    nome: 'Yan',
    idade: '25',
    profissao: 'autonomo',
}
console.log(pessoa.idade)
*/
/* this faz referência ao OBJETO em questão que engloba todas as funções
para evitar repição */
/*  
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado *lado
    },
    perímetro: function(lado){
        return this.lados * lado;
    }
}
    
console.log(quadrado.perímetro(5));
console.log(quadrado.area(5));
*/
/* FACILITANDO */
/*
var quadrado = {
    lados: 4,
    area(lado){
        return lado *lado
    },
    perímetro(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.perímetro(5));
console.log(quadrado.area(5));*/
/* SEMPRE COLOCAR VÍRGULA ENTRE AS FUNÇÕES!!!!!! */

/* Manipular os objetos*/
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}
/* O this vai servir também para não confundir os objetos e variáveis! */
menu.background = '#000';
menu.color = 'blue'

menu.esconder = function(){
    console.log('Escondi')
}

var bg = menu.backgroundColor;