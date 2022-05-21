
function scrollTopp(){
    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

    

}
function decidirBotaoScroll(){
    if (window.scrollY === 0) {
        //ocultar botao
        document.querySelector('.scrollButton').style.display = 'none';
    }else{
        document.querySelector('.scrollButton').style.display = 'block';

    }

        
    
}
window.addEventListener('scroll',decidirBotaoScroll)