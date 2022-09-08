class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(cnpj, nome, idade, dataNascimento) {
        super(nome + '-Jurídica', idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
