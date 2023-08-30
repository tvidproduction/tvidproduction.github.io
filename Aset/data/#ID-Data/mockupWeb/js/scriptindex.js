// Search Function
const kolomCari = document.querySelector('.search-box');
const userInput = kolomCari.querySelector('input');
const hasil = kolomCari.querySelector('.artists');

userInput.addEventListener('keyup', function(event) {
	let userInsert = event.target.value;
	let emptyArray = [];

	if(userInsert) {
		emptyArray = keyword.filter(function(key) {
			return key.toLocaleLowerCase().startsWith(userInsert.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map(function(keyInsert) {
			return keyInsert = '<li>'+ keyInsert +'</li>';
		})
		console.log(emptyArray);
		kolomCari.classList.add('active')
		tampilkan(emptyArray);
		let daftar = hasil.querySelectorAll('li')
		for (var i = 0; i < daftar.length; i++) {
			daftar[i].setAttribute('click', 'select(this)')
		}
	}else{
		kolomCari.classList.remove('active')
	}
})

function pilih(element) {
	let selectUserKey = element.textContent;
	userInput.value = selectUserKey;
	kolomCari.classList.remove('active')
}

function tampilkan(contents) {
	let daftarKonten;
	if(!contents.length) {
		userKey = userInput.value;
		daftarKonten = '<li>'+ userKey +'</li>';
	}else{
		daftarKonten = contents.join('');
	}
	hasil.innerHTML = daftarKonten;
}

// Burger Function
const burger = document.querySelector('.burger input');
const navigate = document.querySelector('.navigate ul');

burger.addEventListener('click', function () {
	navigate.classList.toggle('slide');
});

// ('Somethings Wrong!')