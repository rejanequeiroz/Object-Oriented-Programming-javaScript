/*sintaxe typescript

class // nomeDaClasse {
    // variaveis
    // metodos construtores
    // funções
}
*/
 
class estudante {
    // variáves
    chamada: number
    nome: string

    // metodo construtor
    constructor(chamada: number, nome: string){
this.chamada = chamada
this.nome = nome
    }
    // funções
    mostrarIinformacoes():void{
        console.log("nome : " +this.nome+ ", numero da chamada :" +this.chamada)
    }
}
let fun: estudante = new estudante(22, "Rejane")
fun.mostrarIinformacoes();