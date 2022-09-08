class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = new Date(dataNascimento);
    }
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
    get idade() {
        return this._idade;
    }
    set idade(v) {
        this._idade = v;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(v) {
        this._dataNascimento = v;
    }
}
