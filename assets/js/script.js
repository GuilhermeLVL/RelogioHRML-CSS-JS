/*Const "nomedo objeto" document.getElementById (nome da variavel )

Esse processo é como uma atribicao de classe.

No entanto, acontece a atribuicao de objetos do html, essa atribuicao é necessari, para que possamos trabalhar com os elemenos do html no js.

*/
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const  relogio = setInterval(function time() {

    /*Criacao de variavel */
    let dateToday = new Date();

    /*Variaveis do tipo let */

    let hr =dateToday.getHours();
    let min =dateToday.getMinutes();
    let seg =dateToday.getSeconds();

    /*Condicao que faz com que , caso a hora atual seja menor que 10, seja acrencentado o numero "0" antes do valor da variavel hr(horas) */
    if (hr< 10) hr = '0' + hr;
    if (hr< 10) min = '0' + hr;
    if (hr< 10) seg = '0' + hr;

    /*TextCont = vomando que permite mudar o texto*/
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

});
