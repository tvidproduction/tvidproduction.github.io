/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/ContentsFill.js":
/*!*******************************************************************************!*\
  !*** ./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/ContentsFill.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imporDataContentsFill": () => (/* binding */ imporDataContentsFill)
/* harmony export */ });
// Impor dari data.json
const tautan = document.getElementsByTagName('a')
// const gambar = document.getElementsByTagName('img')

const imporDataContentsFill = new XMLHttpRequest()
imporDataContentsFill.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText)
            let Sumber = data.Sumber
            let Merujuk = data.Bilah_Menu
            let Halaman = Merujuk.Halaman
            let Konten = data.Konten

            // Contents
            const gambarProduk = tautan[11].outerHTML = `<a href="`+ Halaman.Produk.Alamat +`" title="Gambar Produk TVID Store">
                                                            <img src="`+ Konten.Gambar_Produk +`" alt="Gambar Produk" title="Gambar Produk TVID Store" class="gambarProduk" data-tilt width="380" loading="lazy">
                                                         </a>`
            const namaProduk = document.getElementsByTagName('h1')[0].outerHTML = '<h1>'+ Konten.Nama_Produk +'</h1>'
            const gambarProfil = tautan[12].outerHTML = `<a href="`+ Halaman.Tentang.Alamat +`" target="_blank">
                                                            <img src="`+ Konten.Gambar_Profil +`" alt="Gambar Profil" title="Gambar Profil `+ Konten.PengUnggah +`" class="gambarProfil" width="380" loading="lazy">
                                                            <h6 title="`+ Konten.PengUnggah +`">`+ Konten.PengUnggah +`</h6>
                                                         </a>`
            const Paragraph = document.getElementsByTagName('p')[0].outerHTML = '<p>'+ Konten.Maksimal_Karakter_PerArtikel_Produk +'</p>'

            // Belum Di Terapkan
            const ContentFills = [gambarProduk, namaProduk, gambarProfil, Paragraph]
            // AkhirBelum Di Terapkan

            console.log(ContentFills)

            // Akhir Contents
    }
}
imporDataContentsFill.open('GET', '././././../tvidproduction.github.io/data.json', true)
imporDataContentsFill.send()
// Akhir Impor dari data.json

/***/ }),

/***/ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/HeaderParts.js":
/*!******************************************************************************!*\
  !*** ./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/HeaderParts.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imporDataHeaderParts": () => (/* binding */ imporDataHeaderParts)
/* harmony export */ });
/*
 *  Fariabel namaHalaman belum rapih/modularisasi pada bagian Halaman.Beranda.Nama, harus menggunakan sebuah function
 */

// Impor dari data.json
const metaTag = document.getElementsByTagName('meta')
const linkTag = document.getElementsByTagName('link')

const imporDataHeaderParts = new XMLHttpRequest()
imporDataHeaderParts.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText)
            let Metadata = data.Metadata
            let Sumber = data.Sumber
            let Merujuk = data.Bilah_Menu
            let Halaman = Merujuk.Halaman

            // Header
            // MetaTag
            const metaDesk = metaTag[3].outerHTML = '<meta name="description" content="'+ Metadata.Description +'">'
            const metaAuth = metaTag[4].outerHTML = '<meta name="author" content="'+ Metadata.Author +'">'
            const metaKey = metaTag[5].innerHTML = '<meta name="keywords" content="'+ Metadata.Keywords +'">'
            // Akhir MetaTag

            const LinkIco = linkTag[0].outerHTML = '<link rel="icon" type="image/x-icon" href="'+ Sumber.Favicon +'">'
            const LinkStyle = linkTag[1].outerHTML = '<link rel="stylesheet" href="'+ Sumber.StyleSheets +'">'
            const namaHalaman = document.getElementsByTagName('title')[0].innerHTML = '[ '+ Halaman.Beranda.Nama +' ] &lt;|&gt; '+ Metadata.Keywords[0] +' &mdash; '+ Sumber.Slogan

            // Belum Di Terapkan
            const headerPart = [metaDesk, metaAuth, metaKey, LinkIco, LinkStyle, namaHalaman]
            // AkhirBelum Di Terapkan

            console.log(headerPart)

            // Akhir Header
    }
}
imporDataHeaderParts.open('GET', '././././../tvidproduction.github.io/data.json', true)
imporDataHeaderParts.send()
// Akhir Impor dari data.json

/***/ }),

/***/ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/MenuBars.js":
/*!***************************************************************************!*\
  !*** ./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/MenuBars.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imporDataMenuBars": () => (/* binding */ imporDataMenuBars),
/* harmony export */   "mengaksesBagianMenu": () => (/* binding */ mengaksesBagianMenu),
/* harmony export */   "tahunDiFooter": () => (/* binding */ tahunDiFooter)
/* harmony export */ });
// Menu Geser
const menu = document.querySelector('.burger input')
const navigasi = document.querySelector('nav ul')

const mengaksesBagianMenu = menu.addEventListener('click', ()=>{
    navigasi.classList.toggle('geser')
})
// Akhir Menu Geser

// Footer Waktu[Tahun]
const isiDengan = new Date()

const tahunDiFooter = document.getElementById('waktu').innerHTML = isiDengan.getFullYear()
// Akhir Footer Waktu[Tahun]

/*
 *  Untuk bagian menu dengan nama Tag <aside/> pada HTML-nya
 */

// Impor dari data.json
const tautan = document.getElementsByTagName('a')
const gambar = document.getElementsByTagName('img')
const headerFive = document.getElementsByTagName('h5')

const imporDataMenuBars = new XMLHttpRequest()
imporDataMenuBars.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText)
            let Metadata = data.Metadata
            let Merujuk = data.Bilah_Menu
            let Halaman = Merujuk.Halaman

            // Navigasi
            // Menu
            const menuBarBeranda = tautan[0].outerHTML = '<a href="'+ Halaman.Beranda.Alamat +'">'+ Halaman.Beranda.Nama +'</a>'
            const menuBarVideografi = tautan[1].outerHTML = '<a href="'+ Halaman.Videografi.Alamat +'">'+ Halaman.Videografi.Nama +'</a>'
            const menuBarDiskografi = tautan[2].outerHTML = '<a href="'+ Halaman.Diskografi.Alamat +'">'+ Halaman.Diskografi.Nama +'</a>'
            const menuBarToko = tautan[3].outerHTML = '<a href="'+ Halaman.Toko.Alamat +'">'+ Halaman.Toko.Nama +'</a>'
            const menuBarMain = tautan[4].outerHTML = '<a href="'+ Halaman.Main.Alamat +'">'+ Halaman.Main.Nama +'</a>'
            const menuBarTentangKami = tautan[5].outerHTML = '<a href="'+ Halaman.Tentang_Kami.Alamat +'">'+ Halaman.Tentang_Kami.Nama +'</a>'
            const menuBarHubungiKami = tautan[6].outerHTML = '<a href="'+ Halaman.Hubungi_Kami.Alamat +'" target="_blank">'+ Halaman.Hubungi_Kami.Nama +'</a>'
            const menuBarWhatsAppKami = tautan[7].outerHTML = '<a href="'+ Halaman.WhatsApp_Kami.Alamat +'" target="_blank">'+ Halaman.WhatsApp_Kami.Nama +'</a>'
            const menuBarFooter = document.getElementsByTagName('h6')[0].outerHTML = '<h6>'+ Metadata.Keywords[4] +'<br>&copy; '+ Merujuk.Waktu +'~<span>'+ tahunDiFooter +'</span> Semua Yang Tersedia.<br>Versi <span>'+ Merujuk.Versi +'</span></h6>'
            // Akhir Menu

            // Pencarian
            const gambarProfilPencarian1 = gambar[0].outerHTML = '<img src="'+ Merujuk.Gambar_Profil_Pencarian[0] +'" alt="Profil Pencarian" title="Gambar Profil Pencarian ke 1" height="38" loading="lazy">'
            const namaProfilPencarian1 = headerFive[0].outerHTML = '<h5>'+ Merujuk.Maksimal_Karakter_PerNama[0] +'</h5>'
            const gambarProfilPencarian2 = gambar[1].outerHTML = '<img src="'+ Merujuk.Gambar_Profil_Pencarian[1] +'" alt="Profil Pencarian" title="Gambar Profil Pencarian ke 2" height="38" loading="lazy">'
            const namaProfilPencarian2 = headerFive[1].outerHTML = '<h5>'+ Merujuk.Maksimal_Karakter_PerNama[1] +'</h5>'
            // Akhir Pencarian

            const tombolMasuk = tautan[10].outerHTML = '<a href="'+ Halaman.Masuk.Alamat +'">'+ Halaman.Masuk.Nama +'</a>'

            // Belum Di Terapkan
            const menuBar = [menuBarBeranda, menuBarVideografi, menuBarDiskografi, menuBarToko, menuBarMain, menuBarTentangKami, menuBarHubungiKami, menuBarWhatsAppKami, menuBarFooter, gambarProfilPencarian1, namaProfilPencarian1, gambarProfilPencarian2, namaProfilPencarian2, tombolMasuk]
            // AkhirBelum Di Terapkan

            console.log(menuBar)

            // Akhir Navigasi
    }
}
imporDataMenuBars.open('GET', '././././../tvidproduction.github.io/data.json', true)
imporDataMenuBars.send()
// Akhir Impor dari data.json

/***/ }),

/***/ "./Aset/Fungsi/Users_Define_Functions/Tufren/Stated.js":
/*!*************************************************************!*\
  !*** ./Aset/Fungsi/Users_Define_Functions/Tufren/Stated.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataImports_MenuBars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataImports/MenuBars.js */ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/MenuBars.js");
/* harmony import */ var _DataImports_HeaderParts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataImports/HeaderParts.js */ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/HeaderParts.js");
/* harmony import */ var _DataImports_ContentsFill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataImports/ContentsFill.js */ "./Aset/Fungsi/Users_Define_Functions/Tufren/DataImports/ContentsFill.js");






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************!*\
  !*** ./Aset/Fungsi/Users_Define_Functions/Slots.js ***!
  \*****************************************************/
const tufrenStated = __webpack_require__(/*! ./Tufren/Stated */ "./Aset/Fungsi/Users_Define_Functions/Tufren/Stated.js")
})();

/******/ })()
;