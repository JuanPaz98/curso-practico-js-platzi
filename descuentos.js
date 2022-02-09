//calcular descuento
/* 
function calcularDescuento(precio, descuento){
    const p = document.getElementById("precio");
    const d = document.getElementById("descuento");    
    precio = p.value;
    descuento = d.value;

    const precioFinal = precio * (100 - descuento)/100; 
    return document.getElementById("resultado").innerHTML = precioFinal + "$";
}
 */

//calcular con cupones

const cupones = ["1144104", "sh24", "jp98", "as58", "in12", "ju99"];

function calcularDescuento(precio, cupon){
    const p = document.getElementById("precio");
    const d = document.getElementById("descuento");    
    precio = p.value;
    cupon = d.value;
    let descuento = 0;
    if (cupones.includes(cupon)){
        descuento = 10;
        cupones.splice(cupones.indexOf(cupon), 1);
    }else{
        descuento = 0;
        alert("tu cupon ya no es valido o es incorrecto");
    }

    const precioFinal = precio * (100 - parseInt(descuento))/100; 
    return document.getElementById("resultado").innerHTML = precioFinal + "$";
}

