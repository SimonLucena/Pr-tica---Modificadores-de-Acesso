const c1 = new Conta('1', 100);
const c2 = new Conta('2');
const c3 = new Conta('3', 150);
console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());
let date;
const p1 = new PessoaFisica('00000000000', 'teste1', 20, "2001-12-12");
const p2 = new PessoaFisica('22222222222', 'teste2', 21, "2001-12-13");
const p3 = new PessoaJuridica('33333333333', 'teste3', 22, "2001-09-20");
const p4 = new PessoaJuridica('44444444444', 'teste4', 23, "2001-09-21");
console.log(p1.nome);
console.log(p2.nome);
const cliente1 = new Cliente(p1.cpf, p1.nome, p1.idade, p1.dataNascimento, [c1]);
const cliente2 = new Cliente(p2.cpf, p2.nome, p2.idade, p2.dataNascimento, [c2]);
const empresa1 = new Empresa(p3.cnpj, p3.nome, p3.idade, p3.dataNascimento, [contaBonificada]);
const empresa2 = new Empresa(p4.cnpj, p4.nome, p4.idade, p4.dataNascimento, [c3]);
console.log(cliente1.cpf);
console.log(cliente2.cpf);
console.log(empresa1.cnpj);
console.log(empresa2.cnpj);
/*console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

let date: Date
const p1 = new PessoaFisica('00000000000', 'teste1', 20, "2001-12-12");
const p2 = new PessoaJuridica('11111111111', 'teste2', 21, "2001-09-20");*/ 
