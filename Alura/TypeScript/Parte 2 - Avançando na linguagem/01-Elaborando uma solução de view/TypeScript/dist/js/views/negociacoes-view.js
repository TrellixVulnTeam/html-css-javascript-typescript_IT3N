export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                      <th>DATA</th>
                      <th>QUANTIDADE</th>
                      <th>VALOR</th>        
                    </tr>
                </thead>
             <Tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>?</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
             </Tbody>        
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
