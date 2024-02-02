// Pakai Fetch
fetch('../tvidproduction.github.io/data.json').then(response=>response.json()).then(response=>console.log(response))

// Mengambil data.json
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    /*if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response))
        } // Dari JSLanjutan Promise
    }   else {
        console.log(xhr.responseText)
    }*/
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText)
        console.log(data)
        let Halaman = data.Halaman
        console.log(Halaman)

        // MetaTag
        const metaDesk = document.getElementsByTagName('meta')[3].outerHTML = '<meta name="description" content="'+ data.Metadata.Description +'">'
        const metaAuth = document.getElementsByTagName('meta')[4].outerHTML = '<meta name="author" content="'+ data.Metadata.Author +'">'
        const metaKey = document.getElementsByTagName('meta')[5].innerHTML = '<meta name="keywords" content="'+ data.Metadata.Keywords +'">'
        // Akhir MetaTag

        const LinkIco = document.getElementsByTagName('link')[0].outerHTML = '<link rel="icon" type="image/x-icon" href="'+ data.Sumber.Favicon +'">'
        const LinkStyle = document.getElementsByTagName('link')[1].outerHTML = '<link rel="stylesheet" href="'+ data.Sumber.StyleSheet +'">'
        const namaHalaman = document.getElementsByTagName('title')[0].innerHTML = '[ '+ data.Halaman.Beranda.Nama +' ] &lt;|&gt; '+ data.Untuk +' &mdash; '+ data.Akhiran

        // Navigasi Menu
        // const menuBar = document.querySelector('nav.bawah aside.kiri ul li a').outerHTML = '<a href="'+ data.Halaman.Main.Alamat +'">'+ data.Halaman.Toko.Nama +'</a>'
        Halaman.forEach((a, n)=>{
            const menuBar = document.querySelector('nav.bawah aside.kiri ul li a').outerHTML = '<a href="'+ Halaman.Alamat.a +'">'+ Halaman.Nama.n +'</a>'
        })
        // Akhir Navigasi Menu
        console.log(menuBar)
    }
}
xhr.open('GET', '../tvidproduction.github.io/data.json', true)
xhr.send()
// Akhir Mengambil data.json