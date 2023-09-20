let materia1 = (prompt('Informe a matéria da prova: '))
let nota1 = parseFloat(prompt('Informe a nota: '))
let materia2 = (prompt('Informe a matéria da prova: '))
let nota2 = parseFloat(prompt('Informe a nota: '))
let media = parseFloat(prompt('Informe a média da escola: '))

if (nota1 >= media) {
    document.write(`Aprovado na prova de ${materia1}`)

}else{
    document.write(`Reprovado na prova de ${materia1}`)
}

if (nota2 >= media) {
    document.write(`Aprovado na prova de ${materia2}`)

}else{
    document.write(`Reprovado na prova de ${materia2}`)
}



