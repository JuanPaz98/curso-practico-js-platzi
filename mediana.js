const listaUno = [100, 4000000, 10, 500, 200, 300];


function calcularMedia(lista){
    const mitadLista = parseInt(lista.length /2);
    lista.sort(function(a,b){
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1;
        }
        return 0;   
        
    })
    let mediana = (lista[mitadLista] + lista[mitadLista - 1]) /2
    console.log(lista);
    if(lista.length % 2 != 0){
        return lista[mitadLista];
    }
    return mediana;

}