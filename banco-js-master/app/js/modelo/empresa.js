class Empresa extends PessoaJuridica {
    _contas;
    constructor(cnpj, nome, idade, dataNascimento, numero) {
        super(cnpj, nome, idade, dataNascimento);
        this._contas = numero;
    }
    get contas() {
        return this._contas;
    }
    saldoTotalContas() {
        let saldo = 0;
        for (let index = 0; index < this._contas.length; index++) {
            saldo += this._contas[index].getSaldo();
        }
        return saldo;
    }
    ;
    mediaSaldoContas() {
        let saldo = 0;
        let total = this.saldoTotalContas();
        saldo = total / this._contas.length;
        return saldo;
    }
    ;
    acrescentarConta(conta) {
        this._contas.push(conta);
    }
    ;
    removerConta(conta) {
        const index = this._contas.indexOf(conta);
        if (index !== -1) {
            this._contas.splice(index, 1);
        }
    }
    ;
    pesquisarConta(conta) {
        const index = this._contas.indexOf(conta);
        return index;
    }
    ;
}
