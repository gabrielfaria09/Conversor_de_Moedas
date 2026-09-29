const moedaInicial = document.getElementById("moedaInicial");
const moedaFinal = document.getElementById("moedaFinal");
const valor = document.getElementById("quantidade");
const resultado = document.getElementById("resultado");

async function converter(params) {
    const url = "https://api.frankfurter.dev/v2/${moedaInicial.value}/${moedaFinal.value}";
    try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro na consulta: ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    const taxa = dados.rate;
    const valorConvertido = valor.value * taxa;
    const p = document.createElement("p");
    p.innerHTML

  } catch (erro) {
    console.error("Erro ao converter moeda:", erro);
  }

}