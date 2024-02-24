// Menu Geser
const menu = document.querySelector('.burger input')
const navigasi = document.querySelector('nav ul')

export const mengaksesBagianMenu = menu.addEventListener('click', ()=>{
    navigasi.classList.toggle('geser')
})
// Akhir Menu Geser

// Footer Waktu[Tahun]
const isiDengan = new Date()

export const tahunDiFooter = document.getElementById('waktu').innerHTML = isiDengan.getFullYear()
// Akhir Footer Waktu[Tahun]

/*
 *  Untuk bagian menu dengan nama Tag <aside/> pada HTML-nya
 */

// Impor dari data.json
const tautan = document.getElementsByTagName('a')
const gambar = document.getElementsByTagName('img')
const headerFive = document.getElementsByTagName('h5')

export const imporDataMenuBars = new XMLHttpRequest()
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