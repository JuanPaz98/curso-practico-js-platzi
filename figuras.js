
//codigo del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 8;

function perimetroCuadrado(lado) {
    return lado * 4;
}
console.log(`el perimetro del cuadrado es ${perimetroCuadrado(ladoCuadrado)} cm`);

function areaCuadrado(lado) {
    return lado * lado;
} 
console.log(`el área del cuadrado es ${areaCuadrado(ladoCuadrado)} cm2`);
console.groupEnd();

//codigo del triangulo 
console.group("Triangulo");
const lTrianguloUno = 0;
const lTrianguloDos = 0;
const baseTriangulo = 0;
const alturaTriangulo= 0;
const perimetroTriangulo = (lTrianguloUno, lTrianguloDos, baseTriangulo) => lTrianguloUno + lTrianguloDos + baseTriangulo;

const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo) /2;

console.groupEnd();

//Circulo

console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
} 
/* console.log(`el diametro del circulo es ${diametroCirculo(6)} cm`); */
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/* console.log(`el perimetro del circulo es ${perimetroCirculo(6)} cm`); */
function areaCirculo(radio){
    return (radio * radio) * PI;
} 

/* console.log(`el area del circulo es ${areaCirculo(6)} cm`); */

console.groupEnd();

//Aquí interactuamos con HTML
//Cuadrado

function calcularPerimetroCuadrado(){
    const imput = document.getElementById("ladoCuadrado");
    const value = imput.value;
    const perimetro = perimetroCuadrado(value);
    alert(`el perimetro de tu cuadrado es ${perimetro} cms`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`el área de tu cuadrado es ${area} cms2`);
}

//Triangulo 

function calcularPerimetroTriangulo(){
    const inputUno = document.getElementById("ladoTrianguloUno");
    const inputDos = document.getElementById("ladoTrianguloDos");
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");

    const valueInputUno =parseInt(inputUno.value);
    const valueInputDos =parseInt(inputDos.value);
    const valueBase =parseInt(base.value);
    const valueAltura =parseInt(altura.value);

    const perimetro = perimetroTriangulo(valueInputUno, valueInputDos, valueBase);
    alert("el perimetro es " + perimetro);
}

function calcularAreaTriangulo(){
    const inputUno = document.getElementById("ladoTrianguloUno");
    const inputDos = document.getElementById("ladoTrianguloDos");
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");

    const valueInputUno =parseInt(inputUno.value);
    const valueInputDos =parseInt(inputDos.value);
    const valueBase =parseInt(base.value);
    const valueAltura =parseInt(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("el perimetro es " + area);
}

//circulo

function calcularPerimetroCirculo(){
    const inputUno = document.getElementById("radioCirculo");
    const valueRadio = inputUno.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert("el perimetro del circulo es " + perimetro);
}

function calcularAreaCirculo(){
    const inputUno = document.getElementById("radioCirculo");
    const valueRadio = inputUno.value;

    const area = areaCirculo(valueRadio);
    alert("el perimetro del circulo es " + area);
}

//ejercicio calcular altura de triangulo isoseles

var ladUno = prompt("pone el lado uno");
var ladDos = prompt("pone el lado dos");
var base = prompt("pone la base del triangulo");
/* 
function validarLados(ladUno, ladDos){
    while(ladUno != ladDos){
        alert("pone lados iguales")
        ladUno = prompt("pone el lado uno");
        ladDos = prompt("pone el lado dos");
        base = prompt("pone la base del triangulo");
    }
} */

function calcularAlturaIsoseles(ladUno, ladDos, base) {
    if(ladUno == ladDos){
        var altura = Math.sqrt((Math.pow(ladUno, 2)) - Math.pow(base, 2) /4);
        return alert("Altura de triangulo es " + altura);
    }else{
        return alert("pusiste mal los numeros"); 
    }
}

calcularAlturaIsoseles(ladUno, ladDos, base);