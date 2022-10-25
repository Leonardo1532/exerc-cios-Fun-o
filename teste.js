/* Desafio: 1. Crie um algoritmo onde você deve criar um array que receba 5 números positivos ou negativos, 
depois de popular esse array você deve substituir os valores POSITIVOS por “true” e os NEGATIVOS por “false”.
 Ex.: array[-3,5,-6,-8,2] -> array[false,true,false,false,true]]
*/

var numero = []
var positivoNegativo = []
 
for(var contador = 0; contador < 5; contador++){
    numero[contador] = parseInt(prompt("Insira um número positivo ou negativo"))
}
console.log(numero)
 
for(var contador = 0; contador < 5; contador++){
 
 
    if(numero[contador] >= 0){
        numero[contador] = true
    }else if(numero[contador] < 0){
        numero[contador] = false
    }
}
console.log(numero)

/*2. Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array, porém, s
e o usuário digitar um número que já foi inserido, o seu programa deve pedir para ele digitar outro número. 
*/

var numero = []
var comparar = 0
var valido = false
for(var contador = 0; contador < 5; contador++){
    valido = false
   
    while(!valido){
        comparar = parseInt(prompt("Insira um número"))
        valido = true
       
        for(var contador2 = 0; contador2 < 5; contador2++){
           
            if(numero[contador2] == comparar){
                valido = false
            }
        }
 
        if(valido){
            numero[contador] = numero
        }else{
            console.log("Número Inválido")
        }
    }                          
}  
console.log(numero)


/*  3. Crie um algoritmo com dois vetores e os preencha com números inteiros e positivos,
o usuário deve dizer quando não quer mais inserir valores mas os vetores devem ter a mesma quantidade de números. 
Depois crie um terceiro vetor que irá receber apenas os números que estão em ambos os vetores anteriores ou forem ímpar. 
Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8] saída - arrayC[3,4,8,1]
*/

var arrayA = []
var arrayB = []
var arrayC = []
var index = 0
var continuar = "s"
var indexC = 0
while(continuar == "s"){
    arrayA[index] = parseInt(prompt("Insira um número no ArrayA"))
    arrayB[index] = parseInt(prompt("Insira um número no ArrayB"))
    index++
    continuar = prompt("Você deseja continuar inserindo valores?  s ou n")
}
 
console.log(arrayA)
console.log(arrayB)
 
for(var contador = 0; contador < arrayA.length; contador++){
    if(arrayB[contador] % 2 != 0 || arrayA[contador] % 2 != 0){
        arrayC[indexC] = arrayB[contador]
        indexC++
    }
    for(var contador2 = 0; contador2 < arrayA.length; contador2++){
        if(arrayA[contador] == arrayB[contador2]){
            arrayC[indexC] == arrayA[contador]
            indexC++
        }
    }
}
 
console.log(arrayC)


/*4. Faça um algoritmo que leia um array, e o preencha com números inteiros,
 se esse array tiver alguma posição com valor zero você deve eliminar essa posição. Para fazer isso, 
 todos os elementos à frente do valor zero devem ser movidos uma posição para trás no vetor. 
 Ex.: entrada - array[2,6,8,0,6,4,3,2,0,7] saída - array[2,6,8,6,4,3,2,7] 
*/

var array = []
var arraySuporte = []
var indexSup = 0
for(var contador = 0; contador < 5; contador++){
    array[contador] = parseInt(prompt("Insira um número"))
}
 
console.log(array)
 
for(var contador = 0; contador < 5; contador++){
    if(array[contador] != 0){
        arraySuporte[indexSup] = array[contador]
        indexSup++
    }
}
 
array = arraySuporte
console.log(array)
