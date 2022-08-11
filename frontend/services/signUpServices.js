function cadastrar() {
    if (inputSenhaC.value == inputSenha.value) {
        if (inputSenha.value.length >= 6) {
            if (validarEmail(inputEmail.value)) {
                fetch('http://localhost:3000/account/exist', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: inputEmail.value })
                })
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        if (data.status == true) {
                            fetch('http://localhost:3000/accounts/', {
                                method: 'POST',
                                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                body: JSON.stringify({ email: inputEmail.value, password: inputSenha.value, nome: inputNome.value, admin: false })
                            }).then((response2) => {
                                return response2.json();
                            }).then((data2) => {
                                textoAviso.style.display = 'none';
                                textoAviso2.style.display = 'none';

                                textoAviso3.style.display = 'block';
                                textoAviso3.textContent = 'Conta criada com sucesso';
                            });
                        } else {
                            textoAviso.innerText = 'E-mail indisponível'
                            textoAviso.style.display = 'block';
                        }
                    });
            } else {
                textoAviso.innerText = 'E-mail inválido';
                textoAviso.style.display = 'block';
            }
        } else {
            textoAviso2.innerText = 'Por favor insira uma senha com 6 ou mais caracteres';
            textoAviso2.style.display = 'block';
        }
    } else {
        textoAviso2.innerText = 'As duas senhas não estão iguais';
        textoAviso2.style.display = 'block';
    }
}