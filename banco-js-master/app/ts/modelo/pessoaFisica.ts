class PessoaFisica extends Pessoa {
    private readonly _cpf: string;

    constructor(cpf: string, nome: string, idade: number, dataNascimento: string) {
        super(nome+'-Física', idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}