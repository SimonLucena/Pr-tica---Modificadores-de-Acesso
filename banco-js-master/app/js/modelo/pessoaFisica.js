class PessoaFisica extends Pessoa {
    _cpf;
    constructor(cpf, nome, idade, dataNascimento) {
        super(nome + '-Física', idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
