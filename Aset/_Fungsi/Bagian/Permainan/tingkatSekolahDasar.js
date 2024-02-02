/*Matematika Kelas 1 Sekolah Dasar*/

// prompt("Hasil dari penjumlahan "+nilaiAcakKeAtas+" + "+nilaiAcakKeBawah+" = "+hasil)

// const nilaiPertama = nilaiAcakKeAtas
// const nilaiKedua = nilaiAcakKeBawah

/* const penjumlahan = (nilaiPertama, nilaiKedua) => {
	const soal = document.querySelector('h3')

	let hasil

	hasil = nilaiPertama + nilaiKedua

	return soal.innerHTML = `Jumlahkan Hasil Berikut<br>: `+nilaiPertama+` + `+nilaiKedua+` =`

	// return hasil
} */
/*Akhir Matematika Kelas 1 Sekolah Dasar*/

// let nilaiAcakKeAtas = Math.ceil(Math.random()*10+1)
// let nilaiAcakKeBawah = Math.floor(Math.random()*10+1)
// let nilaiAcakPembulatan = Math.round(Math.random()*10+1)
/* let nilaiAcakKeAtas = Math.ceil(Math.random()*10+1)
let nilaiAcakKeBawah = Math.floor(Math.random()*10+1) */

// const tambahTambahan = penjumlahan(nilaiAcakKeAtas, nilaiAcakKeBawah)

// alert("Hasil dari penjumlahan "+nilaiAcakKeAtas+" + "+nilaiAcakKeBawah+" = "+tambahTambahan)
// prompt("Hasil dari penjumlahan "+nilaiAcakKeAtas+" + "+nilaiAcakKeBawah+" = "+tambahTambahan)
// confirm("Hasil dari penjumlahan "+nilaiAcakKeAtas+" + "+nilaiAcakKeBawah+" = "+tambahTambahan)
// console.log("Hasil dari penjumlahan "+nilaiAcakKeAtas+" + "+nilaiAcakKeBawah+" = "+tambahTambahan)

// console.log('Nilai yang sudah diacak berisi : '+nilaiAcak)
// const ganjilAtauGenap = (nilaiAcak % 2 == 0) ? "Genap" : "Ganjil"
// console.log("Nilai "+nilaiAcak+" Adalah Nilai ("+ganjilAtauGenap+")")

/*Matematika Kelas 1 Sekolah Dasar*/
const penjumlahan = (nilaiPertama, nilaiKedua) => {
	let hasil

	hasil = nilaiPertama + nilaiKedua

	return hasil
}

// Pengulangan & Pengkondisian
let ulangLagi = true

while (ulangLagi) {
	let nilaiAcakKeAtas = Math.ceil(Math.random() * 5 + 1)
	let nilaiAcakKeBawah = Math.floor(Math.random() * 5 + 1)
	const tambahTambahan = penjumlahan(nilaiAcakKeAtas, nilaiAcakKeBawah)
	const ganjilAtauGenap = (tambahTambahan % 2 == 0) ? "Genap" : "Ganjil"
	const hasilnya = parseInt(prompt("Jumlahkan hasil dari " + nilaiAcakKeAtas + " + " + nilaiAcakKeBawah + " = "))

	if (tambahTambahan === hasilnya) {
		alert("Selamat!\nJawaban Kamu Benar!")
		alert("Kamu Menjawab ( " + hasilnya + " )")
		alert("Nilai " + tambahTambahan + " Adalah Nilai (" + ganjilAtauGenap + ")")
		ulangLagi = confirm("Mau Ulang Lagi?")
	} else {
		alert("Jawaban Kamu Salah!")
		alert("Kamu Menjawab ( " + hasilnya + " )")
		alert("Jawaban yang Tepat adalah [ " + tambahTambahan + " ]")
		alert("Nilai " + tambahTambahan + " Adalah Nilai (" + ganjilAtauGenap + ")")
		ulangLagi = confirm("Jangan menyerah!\nAyo Coba Lagi?")
	}

}

alert("Terima Kasih Telah Berpartisipasi!")
// Akhir Pengulangan & Pengkondisian
/*Akhir Matematika Kelas 1 Sekolah Dasar*/

module.exports = { penjumlahan }