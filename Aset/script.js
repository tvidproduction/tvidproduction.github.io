/*import {
	imporData,
	mengaksesBagianMenu,
	tahunDiFooter
} from './menu.js'*/

/*import {
	// xhr
	// ambilData
} from './konten.js'*/





// const fungsiMenu = require('./menu')

// Pola Latar Belakang
// const polaLatarBelakang = document.getElementsByTagName('canvas')
const polaLatarBelakang = document.getElementById('canvas')
// const polaLatarBelakang = document.createElement('canvas')

// polaLatarBelakang.width = window.innerWidth
// polaLatarBelakang.height = window.innerHeight

// Mode Layar Penuh Laptop Acer Tufren
/*polaLatarBelakang.width = 1349
polaLatarBelakang.height = 768*/
// Akhir Mode Layar Penuh Laptop Acer Tufren

// Mode Layar Browser Laptop Acer Tufren
polaLatarBelakang.width = 1349
polaLatarBelakang.height = 680
// Akhir Mode Layar Browser Laptop Acer Tufren

const konteks = polaLatarBelakang.getContext('2d')

konteks.fillStyle = 'indigo'

konteks.fillRect(0, 0, polaLatarBelakang.width, polaLatarBelakang.height)

let titikAwalXPojokKiri = 0
let titikAwalYPojokAtas = 0
let horizontal = 20
let vertikal = 40

/*function barisPembentukKristal(x, y, h, v) {
	let x, y, h, v
	if (kristal <= 17 {
		// 
	})
}*/

konteks.strokeStyle = '#999'
konteks.fillStyle = 'gold'
konteks.lineWidth = 1
konteks.beginPath()
// Baris Pertama
konteks.moveTo(titikAwalXPojokKiri, titikAwalYPojokAtas)
konteks.lineTo(horizontal, vertikal)
konteks.lineTo(titikAwalXPojokKiri, vertikal*2)
konteks.lineTo(horizontal, vertikal*3)
konteks.lineTo(titikAwalXPojokKiri, vertikal*4)
konteks.lineTo(horizontal, vertikal*5)
konteks.lineTo(titikAwalXPojokKiri, vertikal*6)
konteks.lineTo(horizontal, vertikal*7)
konteks.lineTo(titikAwalXPojokKiri, vertikal*8)
konteks.lineTo(horizontal, vertikal*9)
konteks.lineTo(titikAwalXPojokKiri, vertikal*10)
konteks.lineTo(horizontal, vertikal*11)
konteks.lineTo(titikAwalXPojokKiri, vertikal*12)
konteks.lineTo(horizontal, vertikal*13)
konteks.lineTo(titikAwalXPojokKiri, vertikal*14)
konteks.lineTo(horizontal, vertikal*15)
konteks.lineTo(titikAwalXPojokKiri, vertikal*16)
konteks.lineTo(horizontal, vertikal*17)
// konteks.lineTo(titikAwalXPojokKiri, vertikal*18)
// Akhir Baris Pertama

// Baris Kedua
konteks.moveTo(titikAwalXPojokKiri+40, titikAwalYPojokAtas)
konteks.lineTo(horizontal, vertikal)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*2)
konteks.lineTo(horizontal, vertikal*3)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*4)
konteks.lineTo(horizontal, vertikal*5)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*6)
konteks.lineTo(horizontal, vertikal*7)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*8)
konteks.lineTo(horizontal, vertikal*9)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*10)
konteks.lineTo(horizontal, vertikal*11)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*12)
konteks.lineTo(horizontal, vertikal*13)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*14)
konteks.lineTo(horizontal, vertikal*15)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*16)
konteks.lineTo(horizontal, vertikal*17)
// konteks.lineTo(titikAwalXPojokKiri+40, vertikal*18)
// Akhir Baris Kedua

// Baris Ketiga
konteks.moveTo(titikAwalXPojokKiri+40, titikAwalYPojokAtas)
konteks.lineTo(horizontal*3, vertikal)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*2)
konteks.lineTo(horizontal*3, vertikal*3)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*4)
konteks.lineTo(horizontal*3, vertikal*5)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*6)
konteks.lineTo(horizontal*3, vertikal*7)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*8)
konteks.lineTo(horizontal*3, vertikal*9)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*10)
konteks.lineTo(horizontal*3, vertikal*11)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*12)
konteks.lineTo(horizontal*3, vertikal*13)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*14)
konteks.lineTo(horizontal*3, vertikal*15)
konteks.lineTo(titikAwalXPojokKiri+40, vertikal*16)
konteks.lineTo(horizontal*3, vertikal*17)
// Akhir Baris Ketiga

// Baris Keempat
konteks.moveTo((titikAwalXPojokKiri+40)*2, titikAwalYPojokAtas)
konteks.lineTo(horizontal*3, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*2)
konteks.lineTo(horizontal*3, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*4)
konteks.lineTo(horizontal*3, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*6)
konteks.lineTo(horizontal*3, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*8)
konteks.lineTo(horizontal*3, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*10)
konteks.lineTo(horizontal*3, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*12)
konteks.lineTo(horizontal*3, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*14)
konteks.lineTo(horizontal*3, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*16)
konteks.lineTo(horizontal*3, vertikal*17)
// Akhir Baris Keempat

// Baris Kelima
konteks.moveTo((titikAwalXPojokKiri+40)*2, titikAwalYPojokAtas)
konteks.lineTo(horizontal*5, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*2)
konteks.lineTo(horizontal*5, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*4)
konteks.lineTo(horizontal*5, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*6)
konteks.lineTo(horizontal*5, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*8)
konteks.lineTo(horizontal*5, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*10)
konteks.lineTo(horizontal*5, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*12)
konteks.lineTo(horizontal*5, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*14)
konteks.lineTo(horizontal*5, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*2, vertikal*16)
konteks.lineTo(horizontal*5, vertikal*17)
// Akhir Baris Kelima

// Baris Keenam
konteks.moveTo((titikAwalXPojokKiri+40)*3, titikAwalYPojokAtas)
konteks.lineTo(horizontal*5, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*2)
konteks.lineTo(horizontal*5, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*4)
konteks.lineTo(horizontal*5, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*6)
konteks.lineTo(horizontal*5, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*8)
konteks.lineTo(horizontal*5, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*10)
konteks.lineTo(horizontal*5, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*12)
konteks.lineTo(horizontal*5, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*14)
konteks.lineTo(horizontal*5, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*16)
konteks.lineTo(horizontal*5, vertikal*17)
// Akhir Baris Keenam

// Baris Ketujuh
konteks.moveTo((titikAwalXPojokKiri+40)*3, titikAwalYPojokAtas)
konteks.lineTo(horizontal*7, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*2)
konteks.lineTo(horizontal*7, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*4)
konteks.lineTo(horizontal*7, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*6)
konteks.lineTo(horizontal*7, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*8)
konteks.lineTo(horizontal*7, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*10)
konteks.lineTo(horizontal*7, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*12)
konteks.lineTo(horizontal*7, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*14)
konteks.lineTo(horizontal*7, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*3, vertikal*16)
konteks.lineTo(horizontal*7, vertikal*17)
// Akhir Baris Ketujuh

// Baris Kedelapan
konteks.moveTo((titikAwalXPojokKiri+40)*4, titikAwalYPojokAtas)
konteks.lineTo(horizontal*7, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*2)
konteks.lineTo(horizontal*7, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*4)
konteks.lineTo(horizontal*7, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*6)
konteks.lineTo(horizontal*7, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*8)
konteks.lineTo(horizontal*7, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*10)
konteks.lineTo(horizontal*7, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*12)
konteks.lineTo(horizontal*7, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*14)
konteks.lineTo(horizontal*7, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*16)
konteks.lineTo(horizontal*7, vertikal*17)
// Akhir Baris Kedelapan

// Baris Kesembilan
konteks.moveTo((titikAwalXPojokKiri+40)*4, titikAwalYPojokAtas)
konteks.lineTo(horizontal*9, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*2)
konteks.lineTo(horizontal*9, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*4)
konteks.lineTo(horizontal*9, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*6)
konteks.lineTo(horizontal*9, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*8)
konteks.lineTo(horizontal*9, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*10)
konteks.lineTo(horizontal*9, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*12)
konteks.lineTo(horizontal*9, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*14)
konteks.lineTo(horizontal*9, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*4, vertikal*16)
konteks.lineTo(horizontal*9, vertikal*17)
// Akhir Baris Kesembilan

// Baris Kesepuluh
konteks.moveTo((titikAwalXPojokKiri+40)*5, titikAwalYPojokAtas)
konteks.lineTo(horizontal*9, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*2)
konteks.lineTo(horizontal*9, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*4)
konteks.lineTo(horizontal*9, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*6)
konteks.lineTo(horizontal*9, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*8)
konteks.lineTo(horizontal*9, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*10)
konteks.lineTo(horizontal*9, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*12)
konteks.lineTo(horizontal*9, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*14)
konteks.lineTo(horizontal*9, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*16)
konteks.lineTo(horizontal*9, vertikal*17)
// Akhir Baris Kesepuluh

// Baris Kesebelas
konteks.moveTo((titikAwalXPojokKiri+40)*5, titikAwalYPojokAtas)
konteks.lineTo(horizontal*11, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*2)
konteks.lineTo(horizontal*11, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*4)
konteks.lineTo(horizontal*11, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*6)
konteks.lineTo(horizontal*11, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*8)
konteks.lineTo(horizontal*11, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*10)
konteks.lineTo(horizontal*11, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*12)
konteks.lineTo(horizontal*11, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*14)
konteks.lineTo(horizontal*11, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*5, vertikal*16)
konteks.lineTo(horizontal*11, vertikal*17)
// Akhir Baris Kesebelas

// Baris Keduabelas
konteks.moveTo((titikAwalXPojokKiri+40)*6, titikAwalYPojokAtas)
konteks.lineTo(horizontal*11, vertikal)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*2)
konteks.lineTo(horizontal*11, vertikal*3)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*4)
konteks.lineTo(horizontal*11, vertikal*5)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*6)
konteks.lineTo(horizontal*11, vertikal*7)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*8)
konteks.lineTo(horizontal*11, vertikal*9)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*10)
konteks.lineTo(horizontal*11, vertikal*11)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*12)
konteks.lineTo(horizontal*11, vertikal*13)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*14)
konteks.lineTo(horizontal*11, vertikal*15)
konteks.lineTo((titikAwalXPojokKiri+40)*6, vertikal*16)
konteks.lineTo(horizontal*11, vertikal*17)
// Akhir Baris Keduabelas

// konteks.fill()
konteks.stroke()
// konteks.fill() // untuk menampilkan yang sudah di-set
// Akhir Pola Latar Belakang

// fungsiMenu(MenuGeser, TahunDiMenu, VersiDiMenu)