//Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class cliente {
    
    idade: number
    nome: string
    genero: string
    
    constructor(idade: number, nome: string, genero: string){
this.idade = idade
this.nome = nome
this.genero = genero
    }
  mostrarInformacao():void{
    console.log(" idade : " +this.idade+ " nome : " +this.nome+ " genero : " +this.genero)

  }
}   

let u : cliente = new cliente(27, "rejane", "feminino")
u.mostrarInformacao();