class ValidarCadastro {
ValidarSenha(nome) {
        if (typeof nome !== "string" || nome.length < 3) {
            throw new Error ("o nome deve possuir pelo menos tres caracteres");
            
        }
        return true;
    }


    ValidarSenha(senha) {
        if (typeof senha !== "string" || nome.length < 8) {
            throw new Error ("a senha deve conter apenas numeros e ter pelo menos 8 caracteres")
        }
        return true;
    }

    ValidarEmail(email) {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         if (!regex.test(email)) {
            throw new Error ("E-mail invalido!");
         }
        return true;
    }
}
