let saldo = 0;
let emAndamento = true

while (emAndamento) {
    const acao = parseInt(prompt("Caixa Eletrônico (ATM)\n[1] Ver Saldo\n[2] Depositar\n[3] Sacar\n[4] Sair"))

    switch (acao) {
        case 1:
            alert(`Seu saldo é: R$ ${saldo}`)
            continue;
        case 2:
            const valorDepositado = parseFloat(prompt("Quanto você deseja depositar?"))
            saldo += valorDepositado
            continue;
        case 3:
            const valorASacar = parseFloat(prompt("Quanto você quer sacar?"))
            if (valorASacar > saldo) {
                alert("Valor indisponível!")
                continue;
            }
            saldo -= valorASacar;
            continue;
        case 4:
            emAndamento = false
            break;
    }
}