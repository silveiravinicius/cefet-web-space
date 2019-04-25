let lista = document.querySelectorAll('.botao-expandir-retrair');
console.log(lista);

for (let l of lista){
	l.addEventListener('click', function(e) { 
		let cEl = e.currentTarget;
		let parent = cEl.parentElement;
		parent.classList.toggle('expandido');
		if(cEl.innerHTML == '+') {
			cEl.innerHTML = '-';
		} else {
			cEl.innerHTML = '+';
		}
	})
}