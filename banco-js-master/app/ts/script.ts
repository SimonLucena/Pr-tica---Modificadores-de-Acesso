const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

let date: Date
const p1 = new PessoaFisica('00000000000', 'teste1', 20, "2001-12-12");
const p2 = new PessoaJuridica('11111111111', 'teste2', 21, "2001-09-20");

console.log(p1.nome);
console.log(p2.nome);