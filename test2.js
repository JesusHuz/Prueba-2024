var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const CajaxPaquete = 2;
    const ManzanaxCaja = 4;
    const ManzanaxPaquete = CajaxPaquete * ManzanaxCaja;
    const Amigos = [];
    let AmigoElegido = [];
    for (let i = 0; i < input.length; i++) {
        if (AmigoElegido.length == CajaxPaquete) {
            Amigos.push(AmigoElegido);
            AmigoElegido = [];
        }
        if (AmigoElegido.length == 0) {
            AmigoElegido.push([]);
        }
        AmigoElegido[AmigoElegido.length - 1].push(input[i]);
        if (AmigoElegido[AmigoElegido.length - 1].length == ManzanaxCaja) {
            AmigoElegido.push([]);
        }
    }
    if (AmigoElegido.length < CajaxPaquete) {
        Amigos.pop();
    }
    if (input.length % ManzanaxPaquete !== 0) {
        const input2 = input.slice(-input.length % ManzanaxPaquete);
        AmigoElegido.push([input2]);
    }
    Amigos.push(AmigoElegido);
    return Amigos;
}

console.log(apples(input))
