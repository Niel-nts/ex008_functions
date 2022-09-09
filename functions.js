/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.*/

function bemVindo(){
    return alert('Olá! Vamos iniciar algumas funções!')
}

function epar(num){
    if (num%2==0){
        return ("PAR")
    } else {
        return ("IMPAR")
    }
}

bemVindo()
num= Number.parseInt(prompt('Digite um número:'))
const dobro = n => n*2
alert(`O dobro do valor digitado é ${dobro(num)} e esse é um valor ${epar(num)}`)