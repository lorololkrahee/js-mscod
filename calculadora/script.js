const primera = document.getElementById('primera');
const segunda = document.getElementById('segunda');

document.getElementById('btnsoma') .onclick = function () {
    const resultado = somar(primera.value, segunda.value);

    const inputresultado = document.getElementById('resultado');
    inputresultado.value = resultado;
}

document.getElementById('btnsub') .onclick = function () {
    const resultado = subtrair(primera.value, segunda.value);

    const inputresultado = document.getElementById('resultado');
    inputresultado.value = resultado
}


function somar(primera, segunda) {
    return Number(primera) + Number(segunda)
}

function subtrair(primera, segunda) {
    return Number(primera) - Number(segunda)
}

