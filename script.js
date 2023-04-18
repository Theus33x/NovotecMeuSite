function calcular() {
    var numero1 = document.getElementsByClassName('input1');
    var numero2 = document.getElementsByClassName('input2');

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 + numero2;
    var diviso = numero1 / numero2;

    

    document.getElementById('soma').innerHTML = soma
    document.getElementById('subtracao').innerHTML = subtracao
    document.getElementById('multiplicacao').innerHTML = multiplicacao
    document.getElementById('divisao').innerHTML = diviso

}