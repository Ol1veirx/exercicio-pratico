function calcularNotaFiscal() {
     var produto = document.getElementById('produto').value;
    var valor = parseFloat(document.getElementById('valor').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);

    var total = valor * quantidade;

    var imposto = total * 0.1;

    var resumo = `Produto: ${produto} <br>`;
    resumo += `Total: R$${total.toFixed(2)} <br> `;
    resumo += `Imposto (10%): R$${imposto.toFixed(2)} <br>`;
    resumo += `Valor Total + Imposto: R$${(total + imposto).toFixed(2)}`

    document.getElementById('resumo').innerHTML = resumo;
        }