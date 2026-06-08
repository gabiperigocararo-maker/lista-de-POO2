class Funcionariro{
    constructor(nome, salario, cargo){
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    class  Gerente extends Funcionariro {
        constructor(nome, salario, cargo, bonus) {
            super(nome, salario, cargo){
                this.bonus = bonus;
                this.equipe = [];
            }
        }
    }

    adicionarMembro(func){
        return this.equipe.push(func);
    }

    calcularSalario(){
        return this.salario + this.bonus;
    }
}