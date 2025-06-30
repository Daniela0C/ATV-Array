function separaParImpar(nums){
    let numero = nums
    let vetorPar = []
    let vetorImpar = []

    let indicePar = 0
    let indiceImpar = 0

    for(let i=0;i<numero.length;i++){
        if (numero[i]%2 === 0){
            vetorPar[indicePar] = numero[i]
            indicePar++
            
        }else{
            vetorImpar[indiceImpar] = numero[i]
            indiceImpar++
        }
    }
    console.log(vetorPar)
    console.log(vetorImpar)
}

let vetorGeral = [1,2,3,4,5,6,7,8,9]
separaParImpar(vetorGeral)
