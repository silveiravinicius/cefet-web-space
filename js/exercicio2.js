// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let image = document.querySelector('#slide');
let anterior = document.querySelector('#anterior');
let proximo = document.querySelector('#proximo');

let atual = 0; 


anterior.addEventListener('click', function() { 
		if (atual > 1 ) {
			atual = atual-1;
		}
		else{
			atual = 4;
		}	
		image.src = servidorDasImagens+todasAsImagens[atual];
	})

proximo.addEventListener('click', function() { 
		if (atual < 4 ) {
			atual = atual+1;
		}
		else{
			atual = 0;
		}	
		image.src = servidorDasImagens+todasAsImagens[atual];
	})
