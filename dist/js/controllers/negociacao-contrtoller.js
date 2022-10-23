export class NegociacaoContrtoller {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidadde = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidadde);
        console.log(this.inputValor);
    }
}
