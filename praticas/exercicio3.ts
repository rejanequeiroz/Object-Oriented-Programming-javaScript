//Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class ProdutoEletronico{
    nome: string
    marca: string
    preço: number

    ligação: string
    mensagem: string

    constructor(nome: string, marca: string, preço: number, ligação: string, mensagem: string){
   this.nome = nome
   this.marca = marca
   this.preço = preço 
   this.ligação = ligação
   this.mensagem = mensagem
    }
   informcãoDoProduto():void{
    console.log(`qual o nome ${this.nome}, qual a marca ${this.marca}, qual o preço? ${this.preço}, ele faz ligaçao ${this.ligação}, ele recebe mensagem ${this.mensagem}`)
   }   
}

let produto= new ProdutoEletronico("celular", "motorola",2500, "sim", "sim")

produto.informcãoDoProduto();