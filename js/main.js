function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
   
}

function redirecionar(){
    window.open("https://www.terra.com.br/");    
}


function trocar(elemento){
   //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passa o mouse aqui";
    elemento.innerHTML = "Passa o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma(5,10));

/*var d = new Date();
alert(d);
alert(d.getDay());

/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
};
*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
};
*/

/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*var nome = "Carlos Wagner";
var n1 = 45;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2)
console.log(nome);
console.log(n1*n2);
console.log(frase.replace("Japão", "Corinthians"));

var lista = ["maçã", "pera", "laranja", "banana"];
/*lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.reverse());
console.log(lista.length);
console.log(lista.join(" - "));

/*var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas);*/