const moedaInicial = document.getElementById("moedaInicial");
const moedaFinal = document.getElementById("moedaFinal");
const valor = document.getElementById("quantidade");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");
const trocar = document.getElementById("trocar");

function formatarMoeda(numero, moeda){
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
  }).format(numero);
}

function inverter(){
  [moedaInicial.value, moedaFinal.value] = [moedaFinal.value, moedaInicial.value];
}

async function converter() {
    const de = moedaInicial.value;
    const para = moedaFinal.value;
    const url = `https://api.frankfurter.dev/v2/rate/${de}/${para}`;

    
    if(de === para){
      resultado.innerHTML = `<p class="display-6 fw-semibold mb-0">${formatarMoeda(valor.value, de)} = ${formatarMoeda(valor.value, para)}</p>`;
      return;
    }

    try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro na consulta: ${resposta.status}`);
    }

    const dados = await resposta.json();
    const valorConvertido = valor.value * dados.rate;

    resultado.innerHTML = "";
    resultado.innerHTML = `<p class="display-6 fw-semibold mb-0"">${formatarMoeda(valor.value, de)} = ${formatarMoeda(valorConvertido, para)}</p>`;

  } catch (erro) {
    console.error("Erro ao converter moeda:", erro);
    resultado.innerHTML = "<p>Erro ao consultar a cotação. Tente novamente.</p>";
  }

}

botao.addEventListener("click", converter);
trocar.addEventListener("click", inverter);