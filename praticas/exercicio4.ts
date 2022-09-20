//Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class funcionário{

    nome: string
    cargo: string
    salario: Number

    venda: string
    mensagem: string

    constructor(nome: string, cargo: string, salario: Number, caixa: string, educada: string ){
        this.nome = nome 
        this.cargo = cargo
        this.salario = salario
        this.venda = caixa
        this.mensagem = educada

    }
   informaçoesDoFuncionario():void{
    console.log(`qual é o seu nome ? ${this.nome}, qual o seu cargo ? ${this.cargo}, quanto vc recebe ? ${this.salario}, o que vc faz ? ${this.venda}, mtto obrigada volte sempre! ${this.mensagem}`)

   }

}
let empresa= new funcionário("rejane", "caixa", 1.500, "finalizo a venda", "obrigada")

empresa.informaçoesDoFuncionario();