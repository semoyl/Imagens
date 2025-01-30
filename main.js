"use strict"

const botaoTrocaImagem = document.getElementById('trocar-imagem')
const imgPrincipal = document.getElementById("img1")

let atualImgIndex=1;
const arrayImagens = [
    './imgs/arthur.jpg',
    './imgs/dutch2.jpg',
    './imgs/john.jpg',
    './imgs/hosea.jpg',
    './imgs/charles.jpg'
];

function trocarImagem(){

        if(atualImgIndex == arrayImagens.length)
        {
          atualImgIndex=0;
        }
        document.getElementById('img1').src=arrayImagens[atualImgIndex];
          atualImgIndex++; 
}

botaoTrocaImagem.addEventListener('click', trocarImagem )