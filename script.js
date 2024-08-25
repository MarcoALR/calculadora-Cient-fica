function calcular() {
    // Obter os valores de entrada
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado = 0;

    // Realizar a operação selecionada
    switch (operacao) {
        case 'adicao':
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert('Divisão por zero não é permitida');
                return;
            }
            break;
        default:
            alert('Por favor, selecione uma operação válida');
            return;
    }

    // Exibir o resultado
    document.getElementById('resultado').textContent = `Resultado: ${resultado.toExponential()}`;
}