//abrir/fechar o menu//

function aparecer(){
    let Menu = document.querySelector('.menu');
    let btnx = document.querySelector(".btn-menu-x")
    let btn1 = document.querySelector(".btn-menu")
    let corpo = document.querySelector(".conteiner")
    let remov = document.querySelector(".tituloPrincipal-2")

    if (Menu.classList.contains('open')) {

        Menu.classList.remove('open');
        btn1.classList.remove('fechar');
        btnx.classList.remove('abrir');
        corpo.classList.remove('remover');
        remov.classList.remove('remover')
    } 
    else{
        Menu.classList.add('open');
        btn1.classList.add('fechar');
        btnx.classList.add('abrir');
        corpo.classList.add('remover');
        remov.classList.add('remover')
    }
    //fixar tela//
    document.body.classList.toggle('fixo') 

}

//fechar com ação de algum item do menu//
function ocultar(){
    let corpo = document.querySelector(".conteiner")
    let Menu = document.querySelector('.menu');
    let btnx = document.querySelector(".btn-menu-x")
    let btn1 = document.querySelector(".btn-menu")
    let remov = document.querySelector(".tituloPrincipal-2")

    if (Menu.classList.remove("open"));
        document.body.classList.remove('fixo');
        btn1.classList.remove('fechar');
        btnx.classList.remove('abrir');
        corpo.classList.remove('remover');
        remov.classList.remove('remover')
}
