function sendEmail() {
    let igreja = document.getElementById('igreja').value
    let pastor = document.getElementById('pastor').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value
    let local = document.getElementById('local').value
    let msg = document.getElementById('msg').value

	Email.send({
        Host: "smtp.elasticemail.com",
        Username : "karlitit0z@gmail.com",
        Password : "A82BA5BB29F10CFBDAB19ECAB1889436750C",
        To : 'carloscoelho@caac.org.br',
        From : "karlitit0z@gmail.com",
        Subject : "Contato pelo site",
        Body : `<ul>
                    <li><strong>Igreja</strong>: ${igreja}</li>
                    <li><strong>Pastor</strong>: ${pastor}</li>
                    <li><strong>Email</strong>: ${email}</li>
                    <li><strong>Telefone</strong>: ${tel}</li>
                    <li><strong>Local</strong>: ${local}</li>
                    <li><strong>Mensagem</strong>: ${msg}</li>        
                </ul>`,
	}).then(message => alert('Mensagem enviada com sucesso!'))
}