// Impor dari data.json
const tautan = document.getElementsByTagName('a')
const gambar = document.getElementsByTagName('img')

export const imporDataContentsFill = new XMLHttpRequest()
imporDataContentsFill.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText)
            let Sumber = data.Sumber
            let Merujuk = data.Bilah_Menu
            let Halaman = Merujuk.Halaman
            let Konten = data.Konten

            // Contents
            // Bagian Produk
            const tautanGambarProduk = tautan[11].outerHTML = '<a href="'+ Halaman.Produk.Alamat +'" title="Gambar Produk TVID Store">'+ gambarProduk +'</a>'
            const gambarProduk = gambar[2].outerHTML = '<img src="'+ Konten.Gambar_Produk +'" alt="Gambar Produk" title="Gambar Produk TVID Store" class="gambarProduk" data-tilt width="380" loading="lazy">'
            const namaProduk = document.getElementsByTagName('h1')[0].outerHTML = '<h1>'+ Konten.Nama_Produk +'</h1>'
            // Akhir Bagian Produk

            // Bagian Profil
            const tautanGambarProfil = tautan[12].outerHTML = '<a href="'+ Halaman.Tentang.Alamat +'" target="_blank">'+ gambarProfil +'</a>'
            const gambarProfil = gambar[3].outerHTML = '<img src="'+ Konten.Gambar_Profil +'" alt="Gambar Profil" title="Gambar Profil '+ Konten.PengUnggah +'" class="gambarProfil" width="380" loading="lazy">'
            const namaPengUnggah = '<h6 title="'+ Konten.PengUnggah +'">'+ Konten.PengUnggah +'</h6>'
            // Akhir Bagian Profil

            const Paragraph = document.getElementsByTagName('p')[0].outerHTML = '<p>'+ Konten.Maksimal_Karakter_PerArtikel_Produk +'</p>'

            // Belum Di Terapkan
            // const ContentFills = [tautanGambarProduk, gambarProduk, namaProduk, tautanGambarProfil, gambarProfil, namaPengUnggah, Paragraph]
            // AkhirBelum Di Terapkan

            // console.log(ContentFills)

            // Akhir Contents
    }
}
imporDataContentsFill.open('GET', '././././../tvidproduction.github.io/data.json', true)
imporDataContentsFill.send()
// Akhir Impor dari data.json