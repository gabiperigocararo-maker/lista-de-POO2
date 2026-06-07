class Conta {
    #saldo = 0

    get saldo(){
        return this.#saldo;
    }

    set saldo (valor) {
        if (valor >= 0) {
            this.#saldo = valor;
        }
    }
}
class Pessoa {
    connstructor(nome, idade, email){
    this.nom e = nome;
    this.idade = idade;
    this.email = email;
    }
    apresentar(){
        console.log(`Ola meu nome e ${this.nome} minha idade e ${this.idade} e meu email e ${this.email}`);
    }
    FazerAniversario(){
      this.idade =+1;
      return this.idade
    }
}