// const menu = document.querySelector('menu')

// menu.classList.add('ativo')
// menu.classList.remove('ativo')
// if (menu.classList.contains('ativo')){
//     menu.classList.add('possui-ativo');
// }else {
//     menu.classList.add('nao-possui-ativo');
// }

// menu.classList += 'vermelho' 

// console.log(menu.className);

// const animais = document.querySelector('.animais');
// console.log(animais.attributes['data-texto']);

// const img= document.querySelector('img');
// const srcImg = img.getAttribute('alt')

// // console.log(img.getAttribute('src'))
// img.setAttribute('alt', 'É uma raposa');
// const  possuiAlt = img.hasAttribute('alt', 'É uma raposa');
// // hasAttribute verifica se possui o atributo na classe
// console.log(possuiAlt)
// console.log(img.alt)

// // Propriedade editável, mas você pode escrever propriedade só de leitura
// const carro = {
//     portas:4,
//     andar: function(km){
//         console.log(`Andou ${km}`)
//     }
// }

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) =>{
    item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) =>{
    item.classList.remove('ativo')
})
itensMenu[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
img.hasAttribute('alt');
})
// Modifique o href do link externo no menu
const menulink = document.querySelector('a[href^="http"]')
menulink.setAttribute ('href', 'https://www.google.com/');


