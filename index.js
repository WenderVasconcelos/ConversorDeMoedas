function Converter() {
    let valorElemento = document.getElementById("valor");
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    let valor = valorElemento.value;
    let valorInput = parseFloat(valor + 0);
    let valorDolar = valorInput * 0.19;
    let valorEuro = valorInput * 0.19;
    let valorBitcoin = valorInput * 0.00001;
    let elementoValorConvertido = document.getElementById("valorConvertido");
    switch (value) {
        case "blank":
            alert("Defina uma moeda para prosseguir");
            break;
        case "dolar":
            let valorFinalUs = "O resultado em Dolar é U$" + valorDolar;
            elementoValorConvertido.innerHTML = valorFinalUs;
            break;
        case "euro":
            let valorFinalEu = "O resultado em Euro é EU$" + valorEuro;
            elementoValorConvertido.innerHTML = valorFinalEu;
            break;
        case "bitcoin":
            let valorFinalBtc = "O resultado em Bitcoin é BTC$" + valorBitcoin;
            elementoValorConvertido.innerHTML = valorFinalBtc;
            break;
    }
}