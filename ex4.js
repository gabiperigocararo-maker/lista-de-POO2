class Temperatura{
   #celcios;

   constructor(celcios){
    this.#celcios = celcios 
  }

  get celcios(){
    return this.#celcios;
  }

  set celcios(valor) {
    this.#celcios = valor;
  }

  get fahrenheit() {
    return (this.#celcios * 9/5) + 32;
  }

  set fahrenheit(valor){
    this.#celcios = (valor - 32) * 5/9;
  }

  get kelvin(){
    return this.#celcios + 273.15;
  }

  set  kelvin(valor){
    this.#celcios = valor - 273.15;
  }
}