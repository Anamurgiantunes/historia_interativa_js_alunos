const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
        alternativas: [
            {
                texto: "Educação.",
                afirmacao: "Ao assumir a gestão, priorizou o futuro da cidade investindo forte no ensino e na capacitação dos cidadãos."
            },
            {
                texto: "Saúde.",
                afirmacao: "Logo no início de seu mandato, focou no bem-estar imediato da população, garantindo atendimento e cuidados essenciais."
            }
        ]
    },
    {
        enunciado: "A cidade enfrenta falta de água.",
        alternativas: [
            {
                texto: "Investir em infraestrutura.",
                afirmacao: "Para conter a crise hídrica, decidiu resolver o problema na raiz reformando a rede de abastecimento."
            },
            {
                texto: "Criar campanhas de conscientização.",
                afirmacao: "Diante da escassez de água, apostou na conscientização dos cidadãos para economizar recursos de forma comunitária."
            }
        ]
    },
    {
        enunciado: "Há muito lixo nas ruas.",
        alternativas: [
            {
                texto: "Aumentar a coleta.",
                afirmacao: "Com o acúmulo de lixo, agiu rápido para manter as ruas limpas ampliando as equipes de recolhimento."
            },
            {
                texto: "Investir em reciclagem.",
                afirmacao: "Na questão dos resíduos, optou por incentivar a coleta seletiva e a reciclagem a longo prazo."
            }
        ]
    },
    {
        enunciado: "O trânsito está piorando.",
        alternativas: [
            {
                texto: "Melhorar o transporte público.",
                afirmacao: "No tráfego urbano, incentivou o uso de transporte público de qualidade para tirar carros das ruas."
            },
            {
                texto: "Construir novas vias.",
                afirmacao: "Para destravar a mobilidade, expandiu as avenidas e a malha viária da cidade."
            }
        ]
    },
    {
        enunciado: "Depois de quatro anos:",
        alternativas: [
            {
                texto: "A cidade ficou mais sustentável.",
                afirmacao: "Ao final dos quatro anos, seu governo se consagrou pela preservação ambiental e por escolhas conscientes para o futuro."
            },
            {
                texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
                afirmacao: "Ao final dos quatro anos, sua gestão entregou grande crescimento econômico, embora o meio ambiente ainda exija novos desafios."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual>= perguntas.length){
    mostraResultado ();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}


mostraPergunta();
