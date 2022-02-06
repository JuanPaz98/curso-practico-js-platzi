
//codigo del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`el perimetro del cuadrado es ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`el área del cuadrado es ${areaCuadrado} cm2`);
console.groupEnd();

//codigo del triangulo 
console.group("Triangulo");
const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const ladoTrianguloTres = 4;
const alturaTriangulo= 5.5;
console.log(`los lados del cuadrado miden ${ladoTrianguloUno} cm, ${ladoTrianguloDos} cm y ${ladoTrianguloTres} cms`);

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + ladoTrianguloTres;

console.log(`el perimetro del cuadrado es ${perimetroTriangulo} cms`);

const areaTriangulo = (ladoTrianguloTres * alturaTriangulo) / 2;

console.log(`el área del cuadrado es ${areaTriangulo} cm2`);
console.groupEnd();

//Circulo

console.group("Circulo");

const radioCirculo = 4;
console.log(`el radio del circulo es ${radioCirculo} cm`);
const diametroCirculo = radioCirculo *2;
console.log(`el diametro del circulo es ${diametroCirculo} cm`);
const PI = Math.PI;
console.log(`PI es igual a ${PI}`);
const perimetroCirculo = diametroCirculo * PI;
console.log(`el perimetro del circulo es ${perimetroCirculo} cm`);
const areaCirculo = (radioCirculo * radioCirculo) * PI;



console.groupEnd();