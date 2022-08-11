function entrar() {
    fetch('http://localhost:3000/account', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail.value, password: inputPassword.value })
    })
        .then((response) => {
            return response.json();
        }).then(function (data) {
            if (data.status == true) {
                if (data.admin == true) {
                    window.location = '../admin/listagem de produtos/listagem.html';
                } else {
                    window.location = '../cliente/listagem de produtos/listagem.html';
                }
            }
        });
}