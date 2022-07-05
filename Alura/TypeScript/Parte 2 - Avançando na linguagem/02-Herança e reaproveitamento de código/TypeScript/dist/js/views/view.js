export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('Classe filha precisa implmentar o método template.');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
