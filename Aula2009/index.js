let ingresso = parseFloat(prompt('Qual o tipo de ingresso desejado? Digite 1 para VIP ou 2 para Standart.'));
let combo = parseFloat(prompt('Deseja adquirir o combo com pipoca? Digite 1 para SIM ou 2 para NÃO.'));

if (ingresso == 1) {
    if (combo == 1) {
        alert("Ok! Ingresso VIP + Combo: R$ 110.")
    } else {
        alert("Ok! Ingresso VIP sem Combo: R$ 80.")
    }
} else {    
    if (combo == 1) { 
        alert("Ok! Ingresso Standard + Combo: R$ 70.")
    } else {
        alert("Ok! Ingresso Standard sem Combo: R$ 40.")
    }
}
