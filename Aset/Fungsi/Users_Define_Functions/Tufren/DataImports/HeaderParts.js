/*
 *  Fariabel namaHalaman belum rapih/modularisasi pada bagian Halaman.Beranda.Nama, harus menggunakan sebuah function
 */

// Impor dari data.json
const metaTag = document.getElementsByTagName('meta')
const linkTag = document.getElementsByTagName('link')

export const imporDataHeaderParts = new XMLHttpRequest()
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
// imporDataHeaderParts.open('GET', '././././../tvidproduction.github.io/data.json', true)
imporDataHeaderParts.open('GET', '/data.json', true)
imporDataHeaderParts.send()
// Akhir Impor dari data.json