const botaoAlterarTema = window.document.getElementById("botao-alterar-tema")

const body = window.document.querySelector("body")
const imagemBotaoTrocaDeTema = window.document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener ("click", () => {
    const modoClaroAtivo = body.classList.contains("modo-claro")
    if (modoClaroAtivo) {
        body.classList.remove("modo-claro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png")
    } else {
        body.classList.add("modo-claro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png")
    }
})