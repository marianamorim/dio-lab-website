// tipos primitivos

// booleanos
var vOuF = false;
console.log(vOuF);
// ver tipo da variável
console.log(typeof(vOuF));

//number
var number = 1;
console.log(number);
// ver tipo da variável
console.log(typeof(number));

//string
var nome = "teste";
console.log(nome);
// ver tipo da variável
console.log(typeof(nome));

//declaracao variavel
//var escopo global e local
var variavel;
console.log(variavel);

//let escopo local e pode ser alterado valor apos criar
let variavelApenasLocal;
variavelApenasLocal = "apenasLocal";
console.log(variavelApenasLocal);

//const escopo local, com inicializacao e nao pode ser alterado
const constante = "constanteTeste";
//constante = "constanteAlterado"; //nao pode ser alterado, gera erro
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}

//console.log(escopoLocalInterno); // gera erro pela variavel nao ser global

//atribuicao
var atribuicao = 'Mariana';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

// comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//operacao
//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 1 * 1;
console.log(multiplicacao);

//divisao real
var divisao = 1 / 1;
console.log(divisao);

//divisao inteira
var divisaoInteira = 5 / 2;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 5 ** 2;
console.log(potenciacao);


//comparador
var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 >= 2;
console.log(menorOuIgual);

//operador logico

var e = true && false;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao);