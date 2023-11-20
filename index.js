let hero = ["Atlas", 7549]
let level = ""

if(hero[1] <= 1000){
    level = "Ferro"
}
else if(hero[1]>=1001 && hero[1]<=2000){
    level = "Bronze"
}
else if(hero[1]>=2001 && hero[1]<=5000){
    level = "Prata"
}
else if(hero[1]>=5001 && hero[1]<=6000){
    level = "Ouro"
}
else if(hero[1]>=6001 && hero[1]<=7000){
    level = "Diamante"
}
else if(hero[1]>=7001 && hero[1]<=8000){
    level = "Platina"
}
else if(hero[1]>=8001 && hero[1]<=9000){
    level = "Ascendente"
}
else if(hero[1]>=9001 && hero[1]<=10000){
    level = "Imortal"
}
else if(hero[1]>10001){
    level = "Radiante"
}

console.log("O heroi de nome " + hero[0] + " está no nível de " + level)