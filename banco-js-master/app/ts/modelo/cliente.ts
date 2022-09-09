class Cliente extends PessoaFisica {
    private _contas:Array<Conta>;

    constructor(cpf: string, nome: string, idade: number, dataNascimento: string, numero: Array<Conta>) {
        super(cpf, nome, idade, dataNascimento);
        this._contas = numero;
    }

    get contas(): Array<Conta> {
        return this._contas;
    }

    saldoTotalContas() {
        let saldo:number = 0;
        for (let index = 0; index < this._contas.length; index++) {
            saldo += this._contas[index].getSaldo();
        }
        return saldo;
    }; 
    mediaSaldoContas(){
        let saldo:number = 0;
        let total:number = this.saldoTotalContas();
        saldo = total/this._contas.length;

        return saldo;
    }; 
    acrescentarConta(conta: Conta){
        this._contas.push(conta);
    }; 
    removerConta(conta: Conta){
        const index = this._contas.indexOf(conta);
        if (index !== -1) {
            this._contas.splice(index, 1);
        }
    }; 
    pesquisarConta(conta: Conta){
        const index = this._contas.indexOf(conta);
        return index;
    };
}