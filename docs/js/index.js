function sendEmail() {
    let igreja = document.getElementById('igreja').value
    let pastor = document.getElementById('pastor').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value
    let local = document.getElementById('local').value
    let msg = document.getElementById('msg').value

	Email.send({
        Host: "smtp.elasticemail.com",
        Username : "carlos.coelho@caac.org.br",
        Password : "C6D404F6AA892D7EC10966E1F6F389F0CF62",
        To : 'd3_nt@hotmail.com',
        From : "carlos.coelho@caac.org.br",
        Subject : "Contato pelo site",
        Body : `<ul>
            <li><strong>Igreja</strong>: ${igreja}</li>
            <li><strong>Pastor</strong>: ${pastor}</li>
            <li><strong>Email</strong>: ${email}</li>
            <li><strong>Telefone</strong>: ${tel}</li>
            <li><strong>Local</strong>: ${local}</li>
            <li><strong>Mensagem</strong>: ${msg}</li>        
        </ul>`,
	}).then(
		message => alert('Mensagem enviada com sucesso!')
	);
}