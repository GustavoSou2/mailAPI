class BodyMail {
    public createBodyHTML(mensage: string, name: string, company: string, phone: string, mail: string) {
        return `
        <div>
        <font face="Arial">
            <p align="center"><img src="https://www.ekaizen.digital/assets/images/favicon.png" width="64" /></p>
            <br>
            <h1>Contato</h1>
            <br>
            <p><strong>Nome</strong>: <font color="#3970ff">${name}</font></p>
            <p><strong>Email de Contato</strong>: ${mail}</p>
            <p><strong>Empresa</strong>: ${company}</p>
            <p><strong>Telefone</strong>: ${phone}</p>
            <br>
            <p bg-color="#efefef"><strong>Mensagem</strong>: ${mensage}</p>
        </font>
        </div>
        `;
    }
}


export default new BodyMail