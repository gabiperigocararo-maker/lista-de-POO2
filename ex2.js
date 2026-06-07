class ContaBancari{
    constructor(titular, saldo, numeroConta){
    this.titular = titular
    this.saldo = saldo
    this.numeroConta = numeroConta
}

    depositar(valor){
        return this.saldo += valor
    }
    
    sacar(valor){
        if(valor<this.saldo){
            console.log("saldo insuficiente!")
        }
        else{
                return this.saldo -= valor
        }
    }
    exibirSaldo(){
        return this.saldo
    }
}