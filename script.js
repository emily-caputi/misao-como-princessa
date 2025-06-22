const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntasPrincesa = [
    {
        enunciado: "No dia do seu 16º aniversário, ao invés de um presente comum, seu pai, o Rei, apresenta a você um espelho mágico que pode mostrar qualquer coisa no reino, inclusive responder a todas as suas perguntas com sabedoria ancestral. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador! O que ele pode revelar?",
                afirmacao: "No início, você ficou apreensiva com o poder do espelho, temendo segredos sombrios."
            },
            {
                texto: "Isso é maravilhoso! Mal posso esperar para explorar o reino!",
                afirmacao: "Você ficou encantada com a possibilidade de usar o espelho para aprender e ajudar seu povo."
            }
        ]
    },
    {
        enunciado: "Com a descoberta do espelho, sua tutora real decide que é hora de você aprender a governar de forma mais eficaz. Ela pede que você use o espelho para investigar um problema que afeta o vilarejo mais distante. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Você pede ao espelho para mostrar todos os detalhes sobre a colheita escassa e as necessidades do povo, buscando soluções diretamente.",
                afirmacao: "Você utilizou o espelho para obter informações cruciais e encontrar soluções práticas para o problema do vilarejo."
            },
            {
                texto: "Você decide visitar o vilarejo pessoalmente, conversando com os camponeses e entendendo suas dificuldades de perto.",
                afirmacao: "Você sentiu que a conexão pessoal era mais importante e confiou em sua própria observação para compreender a situação."
            }
        ]
    },
    {
        enunciado: "Durante um conselho real, o tema de como a magia pode ser usada para o bem do reino é levantado. Alguns conselheiros defendem o uso extensivo de artefatos mágicos, enquanto outros temem o desequilíbrio que isso pode causar. Como você se posiciona?",
        alternativas: [
            {
                texto: "Você defende a ideia de que a magia pode trazer progresso e novas oportunidades, mas que seu uso deve ser ensinado e regulado para evitar abusos.",
                afirmacao: "Você se tornou uma defensora da inovação mágica, trabalhando para que ela beneficie a todos no reino, criando novas possibilidades e profissões."
            },
            {
                texto: "Você expressa preocupação com o impacto da magia nas tradições e nos empregos dos artesãos, defendendo a importância de proteger as habilidades manuais do povo.",
                afirmacao: "Sua preocupação com o povo a motivou a criar escolas de ofícios, garantindo que as habilidades tradicionais não fossem perdidas com o avanço da magia."
            }
        ]
    },
    {
        enunciado: "No baile de máscaras anual, você precisa apresentar um novo brasão para o reino, refletindo sua visão de futuro. E agora?",
        alternativas: [
            {
                texto: "Você desenha o brasão à mão, com detalhes e cores que representam a história e os valores da sua família real, dedicando tempo e esmero a cada traço.",
                afirmacao: "Você notou que muitos no reino valorizavam as artes tradicionais e decidiu promover oficinas de desenho e pintura, compartilhando sua paixão pela criação manual."
            },
            {
                texto: "Você utiliza o espelho mágico para projetar diversas opções de brasões, escolhendo o que melhor se adapta à sua visão e pedindo ao espelho que o materialize.",
                afirmacao: "Você acelerou o processo de criação de novos símbolos e agora consegue ensinar a outros como utilizar a magia para expressar suas ideias de forma mais rápida e impactante!"
            }
        ]
    },
    {
        enunciado: "Você e suas damas de companhia estão preparando um presente especial para o Rei, um mapa detalhado de todas as florestas encantadas do reino. O trabalho está atrasado, e uma de suas damas sugere usar um feitiço de duplicação para terminar mais rápido, mesmo que o feitiço possa ter imperfeições. O que você faz?",
        alternativas: [
            {
                texto: "Escrever encantamentos complexos é uma forma de contribuir, então não há problema em usar o feitiço para duplicar o mapa inteiro.",
                afirmacao: "Infelizmente, você passou a confiar demais em atalhos mágicos, e agora se sente dependente da magia para resolver todas as suas tarefas, perdendo o valor do esforço e da autenticidade."
            },
            {
                texto: "O feitiço de duplicação pode ser poderoso, mas é preciso ter atenção, pois toda magia tem suas falhas. É essencial revisar o mapa e adicionar seus próprios toques pessoais para garantir a precisão.",
                afirmacao: "Você percebeu que, embora a magia seja útil, ela reproduz orientações baseadas em quem a conjura. Por isso, você sabe que os resultados mágicos devem servir como auxílio e não como substituto para o seu próprio trabalho e discernimento."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntasPrincesa.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntasPrincesa[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E com o passar do tempo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();