// function verificar() {
//     let n1 = document.querySelector('#numero').innerHTML;
//     let n2 = document.querySelector('#n2').value;

//     if (n1 == n2) {
//         window.alert('Certa Resposta')
//         resetar();
//     } else {
//         window.alert('Errado, tente novamente')
//     }
    
// };
// function resetar() {
//     document.querySelector('#n2').value = '';

//     var newvalue = Number.parseInt(Math.floor(Math.random() * 10))
//     document.querySelector('#numero').innerHTML = newvalue;
// }

// var $newvalue = Math.floor(Math.random() * 100);
// var $pergunta = document.querySelector('#pergunta');
//     $pergunta.innerHTML = '';

// function verificar() {
//     let $n1 = document.querySelector('#numero').innerHTML;
//     let $n2 = document.querySelector('#n2').value;

//     if ($n1 * $newvalue == $n2) {
//         window.alert('Certa Resposta');
//         resetar();
//     } else {
//         window.alert('Errado, tente novamente');
//     }
//     console.log($newvalue)
// };
// function resetar() {
//     document.querySelector('#n2').value = '';

//     var $novovalor = Number.parseInt(Math.floor(Math.random() * 10));
//     document.querySelector('#numero').innerHTML = $novovalor;

//     var $valor = $newvalue +1;
//     $newvalue = $valor;
//     pergunta();
// }

// function pergunta() {
//     $pergunta.innerHTML = '';

//     $pergunta.innerHTML += `Multiplique o número acima por ${$newvalue}`; 
// }

var $newvalue = Math.floor(Math.random() * 20);
var $pergunta = document.querySelector('#pergunta');
    $pergunta.innerHTML = '';

function verificar() {
    let $n1 = document.querySelector('#numero').innerHTML;
    let $n2 = document.querySelector('#n2').value;

    if ($n1 * $newvalue == $n2) {
        window.alert('Certa Resposta');
        resetar();
    } else {
        window.alert('Errado, tente novamente');
    }
    console.log($newvalue)
};
function resetar() {
    document.querySelector('#n2').value = '';

    var $novovalor = Number.parseInt(Math.floor(Math.random() * 10));
    document.querySelector('#numero').innerHTML = $novovalor;

    var $valor = Math.floor(Math.random() * 20);
    $newvalue = $valor;
    pergunta();
}

function pergunta() {
    $pergunta.innerHTML = '';

    $pergunta.innerHTML += `Multiplique o número acima por ${$newvalue}`; 
}


