/*
* Author: Philipe Siqueira
* Versão 1.0
* Descrição:
* Description: Highest and Lowest
* In this little assignment you are given a string of space separated numbers, 
* and have to return the highest and lowest number.
*
* Descrição: Maior e Menor Valor
* Pegar os números separados por espaço e listar o maior e o menor
*/

function highAndLow(numbers){
  return Math.max.apply(null, numbers.split(' ')) +' '+ Math.min.apply(null, numbers.split(' '))
}
console.log(highAndLow("1 2 3 4 5"))