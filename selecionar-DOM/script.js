// const animais = document.getElementById('animais')
// console.log(animais)

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1])

// const primeiraLi = document.querySelector('li')
// console.log(primeiraLi)

// const primeiraUl = document.querySelector('ul')
// console.log(primeiraUl)

// const linksInternos = document.querySelector('[href^="#"]')
// console.log(linksInternos);

// const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg)

// const gridSectionHTML = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// primeiraUl.classList.add('grid-section')

// // console.log(gridSectionHTML)
// // console.log(gridSectionNode)

// gridSectionNode.forEach(function(item, index){
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