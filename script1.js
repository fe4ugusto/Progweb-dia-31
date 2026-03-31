// Arrow function no submit
document.getElementById('numeroForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const inputNumero = document.getElementById('numero');
    const numero = parseFloat(inputNumero.value);
    const operacao = document.getElementById('operacao').value;

    // validar numero 
    if (isNaN(numero)) {
        alert('Digite um número válido!');
        return;
    }

    // validar raiz caso for negativa
    if (operacao === 'raiz' && numero < 0) {
        alert('Não é possível calcular raiz de número negativo!');
        return;
    }

    // funções em Arrow 
    const calcularQuadrado = (n) => n * n;
    const calcularCubo = (n) => n * n * n;
    const calcularRaiz = (n) => Math.sqrt(n);

    let resultado;
    let textoOperacao;

    if (operacao === 'quadrado') {
        resultado = calcularQuadrado(numero);
        textoOperacao = 'Quadrado';
    } else if (operacao === 'cubo') {
        resultado = calcularCubo(numero);
        textoOperacao = 'Cubo';
    } else {
        resultado = calcularRaiz(numero);
        textoOperacao = 'Raiz Quadrada';
    }

    // fazer a lista dos itens
    const li = document.createElement('li');
    li.textContent = `${textoOperacao} de ${numero} = ${resultado}`;

    document.getElementById('listaResultados').appendChild(li);

    // limpar imput
    inputNumero.value = '';
});