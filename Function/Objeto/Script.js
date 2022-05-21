const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25

};

console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.idade);


function criaPessoa (nome,sobrenome,idade){
   return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade,

        fala(){
            console.log(`${this.nome} ${this.sobrenome} está falando oi`);
            console.log(`Sua idade atual é ${this.idade}`)
        },
   
   
        incrementaIdade(){
            this.idade++;
            
        
        }
     };

}

const pessoa2 = criaPessoa('italo','nobre',27);

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.incrementaIdade();
pessoa2.incrementaIdade();
pessoa2.fala();