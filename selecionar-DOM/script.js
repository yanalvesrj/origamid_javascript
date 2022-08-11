// const animais = document.getElementById('animais')
// console.log(animais)


// imgs.forEach(function(item, index, array)){
//     console.log(item, index, array)
// }

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from (titulos);

// titulosArray.forEach(function(item)){
//     console.log(item)
// });
// const arrayGrid = array.from(gridSectionHTML)
// arrayGrid.forEach(function(item){
//     console.log(item);
// })

/*Exercícios*/
 // Retorne no console todas as imagens do site
const Imagens = document.querySelectorAll('img')
console.log(Imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const Imagens2 = document.querySelectorAll('[src^="img/imagem"]')
console.log(Imagens2)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const PrimeiroH2 = document.querySelector('.animais-descricao h2')
console.log(PrimeiroH2)
// Selecione o último p do site
const paragrafos = document.querySelector('p')
console.log(paragrafos.lenght-1)