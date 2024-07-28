// Segunda atividade;

const numero_de_parada = 8

for(let numero = 1; numero <= 10; numero++){
    if(numero === numero_de_parada){
        break;
    }

    if((numero % 2) === 0){
        continue;
    }

    console.log(numero)
}