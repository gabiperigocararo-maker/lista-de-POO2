class Aluno {
    constructor(nome, email, senha) {

    }
}

class CadastroAluno {
    Validar(Aluno) {
      if (aluno.nome.length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        const regexEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regexEmail.test(Aluno.email)) {
            throw new Error("Email invalido")
        }

        if (Aluno.senha.length < 8) {
            throw new Error ("A senha deve possuir pelo menos 8 caracteres")
        }

        cosnt regexNumber = /\d/;

       if(!regexNumber.test(Aluno.senha)) {
        throw new Error ("Asenha deve ter pelo menos um numero")
       }
       
       return true
     }


     Salvar(Aluno) {
        this.Validar(Aluno)
        this.log("Aluno salvo com sucesso!")
     }
    }
