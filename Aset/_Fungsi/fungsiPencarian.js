import { keyword } from './Bagian/ContohData.js'

// Search Function
const kolomCari = document.querySelector('.pencarian');
const userInput = kolomCari.querySelector('input');
const hasil = kolomCari.querySelector('.daftarPencarian');

userInput.addEventListener('keyup', function (event) {
    let userInsert = event.target.value;
    let emptyArray = [];

    if (userInsert) {
        emptyArray = keyword.filter(function (key) {
            return key.toLocaleLowerCase().startsWith(userInsert.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map(function (keyInsert) {
            // return keyInsert = '<li>'+ keyInsert +'</li>';
            return keyInsert = `<li><span title="` + keyInsert + `"><a href="/"><img src="Aset/Gambar/Profile.jpg" alt="Gambar Profil Pencarian"><h5>` + keyInsert + `</h5></a></span></li>`;
        })
        console.log(emptyArray);
        kolomCari.classList.add('active')
        tampilkan(emptyArray);
        let daftar = hasil.querySelectorAll('li')
        for (var i = 0; i < daftar.length; i++) {
            daftar[i].setAttribute('click', 'select(this)')
        }
    } else {
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
    if (!contents.length) {
        userKey = userInput.value;
        // daftarKonten = '<li>'+ userKey +'</li>';
        daftarKonten = `<li style="list-style: none;"><span><a href="/` + userKey + `"><img src="Aset/Gambar/` + userKey + `" alt="Gambar Profil Pencarian"><h5>` + userKey + `</h5></a></span></li>`;
    } else {
        daftarKonten = contents.join('');
    }
    hasil.innerHTML = daftarKonten;
}