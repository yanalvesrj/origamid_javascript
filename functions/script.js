/*function areaQuadrado(lado){
    return lado * lado;
}
console.log (areaQuadrado(2));

function pi(){
    return 3.14;
}
var total = 5 * pi()

console.log(pi) */

/*
function imc(peso, altura) {
    var imc = peso/(altura * altura)
    return imc
}
console.log (imc(80, 1.8))*/
/*
function corFavorita(cor){
    if (cor === 'azul'){
        return 'Eu gosto do céu';
    }else if (cor ==='verde'){
        return 'Eu gosto de mato'
    }else {
        return 'Eu não gosto de cores'
    }
}
*/
/*
addEventListener('click', function(){console.log('oi')});

function imc2(peso, altura) {
    var imc = peso/(altura * altura)
    return imc
    console.log(imc);
}
imc2 (20, 1.8);
*/
/*
function terceiraIdade(idade){
    console.log(typeof idade);
    if (typeof idade !== 'number'){
        return 'Por favor, preencha com um número'
    }
    if (idade >= 60){
        return true
    }else {
        return false
    }

}
*/
/*
var totalPaises=193; 
function faltaVisitar(paisesQueVisitei){
   
return `Faltam visitar ${totalPaises - paisesQueVisitei} países`;
}
console.log(faltaVisitar(8))
*/
/* Variáveis dentro das funções SÓ PODEM SER EXECUTADAS DENTRO DESSES */
/* var profissao = 'Designer'
function dados(){
    var nome = 'André';
    var idade = 28;
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome},${idade},${endereco},${profissao}`;
    }
 return outrosDados();
}
console.log (dados());
*/

                        /*EXERCICIOS*/
/*01
function verificar(n){
    if (n === '0'){
        return false
    }else
        return true
}*/

/*02*/
function areaQuadrado(lado){
    var lado = lado *4 
    return lado
}

areaQuadrado()

