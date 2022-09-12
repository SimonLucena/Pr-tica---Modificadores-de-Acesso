class RepositorioPessoas {
    pessoaF;
    pessoaJ;
    constructor() {
        this.pessoaF = new Array;
        this.pessoaJ = new Array;
    }
    adicionarCliente(cliente) {
        this.pessoaF.push(cliente);
    }
    adicionarEmpresa(empresa) {
        this.pessoaJ.push(empresa);
    }
    pesquisarCliente(cpf) {
        return this.pessoaF.find(pessoaF => pessoaF.cpf === cpf);
    }
    pesquisarEmpresa(cnpj) {
        return this.pessoaJ.find(pessoaJ => pessoaJ.cnpj === cnpj);
    }
    getCliente() {
        return this.pessoaF;
    }
    getEmpresa() {
        return this.pessoaJ;
    }
    removerCliente(cpf) {
        const clienteARemover = this.pesquisarCliente(cpf);
        if (clienteARemover) {
            const indiceARemover = this.pessoaF.indexOf(clienteARemover);
            if (indiceARemover > -1) {
                this.pessoaF.splice(indiceARemover, 1);
            }
        }
    }
    removerEmpresa(cnpj) {
        const empresaARemover = this.pesquisarEmpresa(cnpj);
        if (empresaARemover) {
            const indiceARemover = this.pessoaJ.indexOf(empresaARemover);
            if (indiceARemover > -1) {
                this.pessoaJ.splice(indiceARemover, 1);
            }
        }
    }
}
