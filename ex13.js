class Enderelo {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }

    class Contato {
        constructor(telefone, email){
            this.telefone = telefone;
            this.email = email;
        }
    }

    class PerfilUsuario {
        constructor(nome, endereco, conato) {
            this.nome = nome;
            this.endereco = endereco;
            this.contato = conato;
        }
    }

    exibirPerfil(){
        return`
        Nome: ${this.nome}
        Rua: ${this.endeco.rua}
        Cidade: ${this.cep}
        Telefona ${this.contato.telefone}
        E-mail ${this.contato,email}    
          `
    }
}