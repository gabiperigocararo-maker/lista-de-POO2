class ValidarCadastro {
    constructor(nome) {
        if (typeof nome !== "string" || nome.length < 3) {
            throw new Error ("o nome deve possuir pelo menos tres caracteres");
            
        }
        return true
    }
}