var videoGames = ['Switch', 'Xbox', 'PS4', '3DS']
// videoGames.pop() remove o último item da Array e o retorna.
// videoGames.push('3DS')

/*
for(var numero = 0; numero <10; numero++){
   console.log(numero) 
}
*/
/*
for( var item = 0; item < videoGames.length;item++){
    console.log(videoGames[item]);
    if(videoGames[item]==='PS4'){
        break;
    }
}

videoGames.forEach(function(item) {
    console.log(item)
})
*/
/*
var frutas = ['banana', 'maça', 'morango', 'pera'];
frutas.forEach(function(){})
*/
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasil = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar
for (var i = 0; brasil.length;i++){
    console.log(`O Brasil ganhou a copa de ${brasil[i]}`)
}

// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++)
console.log(frutas[fruta]);
if (frutas[fruta] ==='Pera'){
    break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var ultimafruta = frutas[frutas.length -1]