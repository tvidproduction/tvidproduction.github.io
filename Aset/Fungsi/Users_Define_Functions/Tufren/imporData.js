/*// Impor dari data.json
const tautan = document.getElementsByTagName('a')

export const imporData = new XMLHttpRequest()
imporData.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText)
            let Metadata = data.Metadata
            let Halaman = data.Halaman

            // Navigasi Menu
            const menuBarBeranda = tautan[0].outerHTML = '<a href="'+ Halaman.Beranda.Alamat +'">'+ Halaman.Beranda.Nama +'</a>'
            const menuBarVideografi = tautan[1].outerHTML = '<a href="'+ Halaman.Videografi.Alamat +'">'+ Halaman.Videografi.Nama +'</a>'
            const menuBarDiskografi = tautan[2].outerHTML = '<a href="'+ Halaman.Diskografi.Alamat +'">'+ Halaman.Diskografi.Nama +'</a>'
            const menuBarToko = tautan[3].outerHTML = '<a href="'+ Halaman.Toko.Alamat +'">'+ Halaman.Toko.Nama +'</a>'
            const menuBarMain = tautan[4].outerHTML = '<a href="'+ Halaman.Main.Alamat +'">'+ Halaman.Main.Nama +'</a>'
            const menuBarTentangKami = tautan[5].outerHTML = '<a href="'+ Halaman.Tentang_Kami.Alamat +'">'+ Halaman.Tentang_Kami.Nama +'</a>'
            const menuBarHubungiKami = tautan[6].outerHTML = '<a href="'+ Halaman.Hubungi_Kami.Alamat +'" target="_blank">'+ Halaman.Hubungi_Kami.Nama +'</a>'
            const menuBarWhatsAppKami = tautan[7].outerHTML = '<a href="'+ Halaman.WhatsApp_Kami.Alamat +'" target="_blank">'+ Halaman.WhatsApp_Kami.Nama +'</a>'
            const menuBarFooter = document.getElementsByTagName('h6')[0].outerHTML = '<h6>'+ Metadata.Keywords[4] +'<br>&copy; '+ data.Waktu +'~<span>'+ tahunDiFooter +'</span> Semua Yang Tersedia.<br>Versi <span>'+ data.Versi +'</span></h6>'

            // Belum Di Terapkan
            const menuBar = [menuBarBeranda, menuBarVideografi, menuBarDiskografi, menuBarToko, menuBarMain, menuBarTentangKami, menuBarHubungiKami, menuBarWhatsAppKami, menuBarFooter]
            // AkhirBelum Di Terapkan

            console.log(menuBar)

            // Akhir Navigasi Menu
    }
}
imporData.open('GET', '../../../../tvidproduction.github.io/data.json', true)
imporData.send()
// Akhir Impor dari data.json*/