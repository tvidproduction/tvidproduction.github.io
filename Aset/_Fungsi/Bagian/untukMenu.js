// Menu Geser
const menu = document.querySelector('.burger input')
const navigasi = document.querySelector('nav ul')

export const untukMenu = menu.addEventListener('click', ()=>{
	navigasi.classList.toggle('geser')
})

// const menu = document.querySelector('.burger input')
// const navigasi = document.querySelector('nav ul')
// Niatnya mau bikin pas halaman tampil dan saat spasi pertama kali diklik maka akan membuka menu navigasi yang ada pada halaman
// // "KeyCode" : 32 Untuk Spasi, 13 Untuk Enter
// menu.addEventListener('keyup', (tombol) => {
//     if(tombol.keyCode == 32) {
//         navigasi.classList.toggle('geser')
//     }
// })
// Akhir Menu Geser

// Menutup Menu dengan klik diluar Bagian Menu
// Hanya menutup Navigasi dan tidak mengembalikan Burger Menu
export const tutupMenu = document.addEventListener('click', (cursor)=>{
	if(!menu.contains(cursor.target) && !navigasi.contains(cursor.target)) {
		navigasi.classList.remove('geser')
	}
})
// Akhir Menutup Menu dengan klik diluar Bagian Menu