const nomes = ["Fernanda", "Fernanda", "Giuliana", "Maria Eduarda", "Amanda", "Isabella", "Manuela", "Sophia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)