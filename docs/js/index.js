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
        Password : "760BCAACCBE63EAF191C6AE8ECB7FBD607B0",
        To : 'd3_nt@hotmail.com',
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
	}).then(
		message => alert(message)
	);
}