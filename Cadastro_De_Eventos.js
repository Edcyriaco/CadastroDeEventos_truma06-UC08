//Data do Evento
var DiaDoEvento =12
var MesDoEvento =08
var AnoDoEvento =2022

//Data Atual
var DiaAtual =14
var MesAtual =08
var AnoAtual =2022

//Verificação por Data
if(AnoDoEvento >= AnoAtual){
    if(MesDoEvento >= MesDoEvento){
        if(DiaDoEvento >= DiaAtual){
            console.log("Cadastro Permitido!")
        }else{
            console.log("Cadastro não permitido. Data inválida!")
        }
    }else{
        console.log("Cadastro não permitido. Data inválida!")
    }    
}else{
    console.log("Cadastro não permitido. Data inválida!")
}

var idade = 14

//Classificação Etária
if(idade>=18){
    console.log("Cadastro Permitido!")
}else{
    console.log("Cadastro Negado. Proibido a entrada de menores de 18 anos!")
}

//Verificação de Participantes
var participante =["Miguel", "Maria", "Juliana", "Ana", "Pedro"]
if(participante.length< 100){
    console.log("Evento Permitido!")
}else{
    console.log("Evento não Negado!")
}