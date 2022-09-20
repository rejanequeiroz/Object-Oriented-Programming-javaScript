//Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Avião {
    nome: number
    empresa: string
    modelo: string
    capassidade: number

    constructor(nome: number, empresa: string, modelo: string, capacidade: number  ){
    this.nome = nome
    this.empresa = empresa
    this.modelo = modelo
    this.capassidade = capacidade


    }
        informacao():void{
        console.log(`o nome do meu aviao é ${this.nome}, o nome da empresa é ${this.empresa}, qual o modelo do avião ${this.modelo}, qual a capassidade de pessoas? ${this. capassidade}`)
    }

}
let avião = new Avião(897, "gol", "jatinho", 10)

avião.informacao();
    
