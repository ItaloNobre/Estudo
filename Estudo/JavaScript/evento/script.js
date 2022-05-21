function clicou(){
    document.querySelector('.texto').innerHTML = "oh shit";
}

function digitou(event){
    if (event.keyCode == 13){
        let texto = document.querySelector('.text ').value;
        console.log(texto);
    }
}