class Pilha {
    #itens;
    constructor() {
        this.#itens = [];
    }

    empilhar(item) {
        this.#itens.push(item);
    }
    desempilhar () {
        if(this.estaVazia()){
            return null;
        }
        return this.#itens.pop();
    }

    topo() {
        if (this.estaVazia()){
            return null;
        }
        return this.#itens[this.#itens.length - 1];
    }

    estaVazia(){
        return this.#itens.length === 0;
    }

    get tamanho(){
        return this.#itens.length;
    }
}