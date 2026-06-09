class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this,modelo = modelo;
        this.velocidade = 0;
    }

    acelerar(){
        this.velocidade += 10;
        console.log(`Velocidade: ${this.velocidade} km/h`);
    }

    frear(){
        this.velocidade = Math.max(0, this.velocidade - 10);
        console.log(`Velocidade: ${this.velocidade} km/h`)
    }

    class Carro extends Veiculo {
        constructor(marca, modelo, combustivel, litroNoTenque){
            super(marca, modelo,);
            this.combustivel = combustivel;
            this.litroNoTenque = litroNoTenque;

        }
    }

    class CarroEletrico extends Carro{
        constructor(marca, modelo, bateriaKwd){
            super(marca, modelo, "Eletrico", 0);
            this.bateriaKwd = bateriaKwd;
        }
    }

    acelerar(){
        if (this.bateriaKwd > 0){
            super.acelerar();
            this.bateriaKwd -= 1;
            console.log(`Bateria restante: ${this.bateriaKwd} Kwd`);
        }
        else{
            console.log("Bateria descarregada!");
        }
    }
}