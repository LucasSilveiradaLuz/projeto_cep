// Projeto: "Buscador de Endereço (ViaCEP)"
// Objetivo: Criar uma página HTML simples onde o aluno digita um CEP (Código de Endereçamento Postal) e, ao clicar em um botão, a página consulta a API pública ViaCEP e preenche os campos de endereço (rua, bairro, cidade, estado) automaticamente.

// Por que este projeto?

// Relevância: É um recurso usado em 99% dos cadastros em sites brasileiros. É algo que vocês vão utilizar no mundo real.

// API Simples: A API ViaCEP é gratuita, pública, não requer chave (API Key) e é muito rápida.

// Foco nos Tópicos:

// DOM: Pegar o valor do input do CEP.

// API (fetch): Fazer a requisição para a API.

// JSON/Objetos JS: Tratar a resposta (que é um objeto JSON) e acessar suas propriedades (ex: dados.logradouro, dados.bairro).

// DOM (de novo): Preencher os campos do formulário com os valores do objeto.

//Link do VaiCEP: https://viacep.com.br/ e um exemplo de consulta: https://viacep.com.br/ws/90010001/json/

//Entrega em um repositório no github, com os arquivos e readme organizados.

function buscaCep () {
  let cep = document.getElementById("cep").value
  let url = `https://viacep.com.br/ws/${cep}/json/`
  let rua = document.getElementById("rua");
  let bairro = document.getElementById("bairro");
  let cidade = document.getElementById("cidade");
  let estado = document.getElementById("estado");

  rua.innerHTML = "";
  bairro.innerHTML = "";
  cidade.innerHTML = "";
  estado.innerHTML = "";

   fetch(url)
    .then((response) => response.json())
    .then((cep) => { 
   
      rua.value = cep.logradouro
      bairro.value = cep.bairro
      cidade.value = cep.localidade
      estado.value = cep.estado
    })
    .catch((error) => {
        console.log("Ocorreu um erro" + error)
    })
}