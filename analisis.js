const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB;
    }
)


function calcularMedia(lista){
    const media = parseInt(lista.length / 2); 
    if (lista.length % 2 != 0){
        return lista[media];
    }
    else{
        return (lista[media] + lista[media - 1]) /2;
    }
}

//media top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);