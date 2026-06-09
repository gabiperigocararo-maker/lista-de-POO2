class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    toString() {
        return `Livro: "${this.titulo}" - Autor: ${this.autor}`;
    }
}

class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
    }

    toString() {
        return `Filme: "${this.titulo}" - Diretor: ${this.diretor}`;
    }
}

class Musica {
    constructor(titulo, artista) {
        this.titulo = titulo;
        this.artista = artista;
    }

    toString() {
        return `Música: "${this.titulo}" - Artista: ${this.artista}`;
    }
}

// Array com objetos de tipos diferentes
const midias = [
    new Livro("Dom Casmurro", "Machado de Assis"),
    new Filme("Interestelar", "Christopher Nolan"),
    new Musica("Tempo Perdido", "Legião Urbana")
];

// Polimorfismo com toString()
midias.forEach(item => {
    console.log(item.toString());
});