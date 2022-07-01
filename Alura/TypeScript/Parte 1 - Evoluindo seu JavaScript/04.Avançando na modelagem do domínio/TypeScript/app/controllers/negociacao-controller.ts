import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista().pop();// Utilizando esse pop, consigo apagar o ultimo array da minha lista. Pra resolver isso, temos uma solução em especificada lá no método lista em negociações.
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g; //Expressão regular. Nesse caso a letra "g" significa "global", na qual serão encontrados todas as ocorrências que surgirem.
        const date = new Date(this.inputData.value.replace(exp, ',')); // O replace vai encontrar todos os "-" ífens do exp e substituí-los por "," vírgulas.
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}