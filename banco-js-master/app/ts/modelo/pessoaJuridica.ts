class PessoaJuridica extends Pessoa {
    private readonly _cnpj: string;

    constructor(cnpj: string, nome: string, idade: number, dataNascimento: string) {
        super(nome+'-Jurídica', idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }
}