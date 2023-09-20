let numero1;
let numero2;
let maior;

numero1 = Number(prompt(`Digite o primeiro número: `))
numero2 = Number(prompt(`Digite o segundo número: `))

if (numero1 > numero2) {
    maior = numero1

}else if (numero1 === numero2) {
    maior = 'nenhum dos dois. Os números são iguais!'

}else {
maior = numero2
}

alert(`O número maior é: ${maior}`)
