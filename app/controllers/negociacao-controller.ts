import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidadde: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor () {
        this.inputData = document.querySelector('#data');
        this.inputQuantidadde = document.querySelector('#quantidade');
        this.inputValor= document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao: Negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidadde.value);
        const valor = parseInt(this.inputValor.value);

        return new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidadde.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}