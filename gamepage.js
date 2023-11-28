//4 geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);

playername= localStorage.getItem("player_name")    
// contagem de tentativas
// 5 até acerto
var guess = 1;
//  6 
function submit(){
  
//7 número enviado pelo usuário
var x = document.getElementById("guessField").value;
// 8
if(x == y)
{    
   alert("PARABÉNS!!!"+playername+", você acertou em "
           + guess + " tentativa(s)! ");
    guess= 1;
}
// 9
else if(x > y) /* se o número enviado é maior que o número gerado*/ 
{    
   guess++;
   alert("Opa, resposta errada!! Tente um número menor");
}
else
{
   guess++;
   alert("Opa, resposta errada!! Tente um número maior")
}
}
// 10
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}