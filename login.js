document.querySelector("#btnLogin").addEventListener("click", function() {

    let lg = document.querySelector("#lg").value;
    let senha = document.querySelector("#senha").value;

    // usuários já "cadastrados"
    let usuarios = [
        { lg: "davi@conselho.com", senha: "18351835" },
        { lg: "neneca@conselho.com", senha: "sougay123" },
        { lg: "raphael@conselho.com", senha: "Jesus929305" }
    ];

    let encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (lg === usuarios[i].lg && senha === usuarios[i].senha) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        window.location.href = "paginainicial.html";
    } else {
        alert("Usuario ou senha inválidos");
    }

});
