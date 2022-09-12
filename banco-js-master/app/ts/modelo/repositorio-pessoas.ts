class RepositorioPessoas {
    readonly pessoaF: Array<Cliente>;
    readonly pessoaJ: Array<Empresa>;

    constructor() {
        this.pessoaF = new Array<Cliente>;
        this.pessoaJ = new Array<Empresa>;
    }

    adicionarCliente(cliente: Cliente) {
        this.pessoaF.push(cliente);
    }

    adicionarEmpresa(empresa: Empresa) {
        this.pessoaJ.push(empresa);
    }

    pesquisarCliente(cpf: string) {
        return this.pessoaF.find(pessoaF => pessoaF.cpf === cpf);
    }

    pesquisarEmpresa(cnpj: string) {
        return this.pessoaJ.find(pessoaJ => pessoaJ.cnpj === cnpj);
    }

    getCliente() {
        return this.pessoaF;
    }

    getEmpresa() {
        return this.pessoaJ;
    }

    removerCliente(cpf: string) {
        const clienteARemover = this.pesquisarCliente(cpf);
        if (clienteARemover) {
            const indiceARemover = this.pessoaF.indexOf(clienteARemover);
            if (indiceARemover > -1) {
                this.pessoaF.splice(indiceARemover, 1);
            }
        }
    }

    removerEmpresa(cnpj: string) {
        const empresaARemover = this.pesquisarEmpresa(cnpj);
        if (empresaARemover) {
            const indiceARemover = this.pessoaJ.indexOf(empresaARemover);
            if (indiceARemover > -1) {
                this.pessoaJ.splice(indiceARemover, 1);
            }
        }
    }
}