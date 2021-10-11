//var nome = "Micael Rodrigues";
//var idade = 23
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(idade + idade2);

//console.log(nome);
//console.log(idade * idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLocaleLowerCase());


//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "))



//var fruta = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
//onsole.log(fruta);
//alert(fruta[1].nome);


/* var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/* var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}*/

/*var count = 0;
for (count = 0; count <= 5; count++) {
    alert(count);
};*/

/* var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

/*function soma(n1, n2) {
    return n1 + n2;

}

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));*/

//alert(soma(5, 10));


function botao() {
    //alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
function redirecionar() {
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}
function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("pagina carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value)
}