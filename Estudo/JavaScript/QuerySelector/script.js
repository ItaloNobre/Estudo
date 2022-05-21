function trocar(){
    if (document.querySelector('button').classList.contains('preto')){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('vermelho');
    }else{
        document.querySelector('button').classList.remove('vermelho');
        document.querySelector('button').classList.add('preto');
    }
}

function alterar(){
    document.querySelector('.titulo').innerHTML = "Troucou o titulo!";
    document.querySelector('#campo').innerHTML = "Troucou o campo!";
}
alterar();
