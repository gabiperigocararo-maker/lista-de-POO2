class Usuario {
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha;
    }

    autenticar(senha){
        if(this.#senha === senha){
            return true;
        }
        else{
            return false;
        }
    }

    alterarSenha(senhaAtual, novaSenha){
        if(this.#senha === senha) {
            this.#senha = novaSenha
        }
    }
}