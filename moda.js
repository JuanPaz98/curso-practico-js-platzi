const listaUno =[100, 5,32, 5, 98, 100, 3, 3, 5, 3, 3, 100, 100, 100];

function encontrarModa(lista){
    
    const listaCount = {};
    
    lista.map(function (elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else{
            listaCount[elemento] = 1;
        }
    })
    
    listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
                return elementoA[1] - elementoB[1];
            
        })
    
    const moda = listaArray[listaArray.length - 1];

    return moda;
 
}