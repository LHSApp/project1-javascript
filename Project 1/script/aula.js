// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagensAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');

console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2sAnimais = document.querySelector('.animais-descricao h2');

console.log(h2sAnimais);
// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);

//FOREACH




// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
    console.log(item, index);
});

let i = 0;
imgs.forEach( => {
    console.log(i++);
});

imgs.forEach(() => i++);