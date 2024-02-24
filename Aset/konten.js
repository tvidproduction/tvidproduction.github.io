// Pakai Fetch
// fetch('../tvidproduction.github.io/data.json').then(response=>response.json()).then(response=>console.log(response))

// Mengambil data.json
/*export const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {*/
    /*if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response))
        } // Dari JSLanjutan Promise
    }   else {
        console.log(xhr.responseText)
    }*/
/*    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText)
        // console.log(data)
        let Metadata = data.Metadata
        let Halaman = data.Halaman
        let Sumber = data.Sumber
        // console.log(Halaman)*/

/*        // MetaTag
        const metaDesk = document.getElementsByTagName('meta')[3].outerHTML = '<meta name="description" content="'+ Metadata.Description +'">'
        const metaAuth = document.getElementsByTagName('meta')[4].outerHTML = '<meta name="author" content="'+ Metadata.Author +'">'
        const metaKey = document.getElementsByTagName('meta')[5].innerHTML = '<meta name="keywords" content="'+ Metadata.Keywords +'">'
        // Akhir MetaTag

        const LinkIco = document.getElementsByTagName('link')[0].outerHTML = '<link rel="icon" type="image/x-icon" href="'+ Sumber.Favicon +'">'
        const LinkStyle = document.getElementsByTagName('link')[1].outerHTML = '<link rel="stylesheet" href="'+ Sumber.StyleSheet +'">'
        const namaHalaman = document.getElementsByTagName('title')[0].innerHTML = '[ '+ Halaman.Beranda.Nama +' ] &lt;|&gt; '+ data.Untuk +' &mdash; '+ data.Akhiran

        // Navigasi Menu
        const menuBarBeranda = document.getElementsByTagName('a')[0].outerHTML = '<a href="'+ Halaman.Beranda.Alamat +'">'+ Halaman.Beranda.Nama +'</a>'
        const menuBarVideografi = document.getElementsByTagName('a')[1].outerHTML = '<a href="'+ Halaman.Videografi.Alamat +'">'+ Halaman.Videografi.Nama +'</a>'
        const menuBarDiskografi = document.getElementsByTagName('a')[2].outerHTML = '<a href="'+ Halaman.Diskografi.Alamat +'">'+ Halaman.Diskografi.Nama +'</a>'
        const menuBarToko = document.getElementsByTagName('a')[3].outerHTML = '<a href="'+ Halaman.Toko.Alamat +'">'+ Halaman.Toko.Nama +'</a>'
        const menuBarMain = document.getElementsByTagName('a')[4].outerHTML = '<a href="'+ Halaman.Main.Alamat +'">'+ Halaman.Main.Nama +'</a>'
        const menuBarTentangKami = document.getElementsByTagName('a')[5].outerHTML = '<a href="'+ Halaman.Tentang_Kami.Alamat +'">'+ Halaman.Tentang_Kami.Nama +'</a>'
        const menuBarHubungiKami = document.getElementsByTagName('a')[6].outerHTML = '<a href="'+ Halaman.Hubungi_Kami.Alamat +'" target="_blank">'+ Halaman.Hubungi_Kami.Nama +'</a>'

        const menuBarWhatsAppKami = document.getElementsByTagName('a')[7].outerHTML = '<a href="'+ Halaman.WhatsApp_Kami.Alamat +'" target="_blank">'+ Halaman.WhatsApp_Kami.Nama +'</a>'
        const menuBarFooter = document.getElementsByTagName('h6')[0].outerHTML = '<h6>'+ Metadata.Keywords[4] +'<br>&copy; '+ data.Waktu +'~<span id="waktu"></span> All rights reserved.<br>Versi <span>'+ data.Versi +'</span></h6>'

        const menuBar = [menuBarBeranda, menuBarVideografi, menuBarDiskografi, menuBarToko, menuBarMain, menuBarTentangKami, menuBarHubungiKami, menuBarWhatsAppKami, menuBarFooter]*/
        /*Halaman.forEach((a, n)=>{
            const menuBar = document.querySelector('nav.bawah aside.kiri ul li a').outerHTML = '<a href="'+ Halaman.Alamat.a +'">'+ Halaman.Nama.n +'</a>'
        })*/
        // Akhir Navigasi Menu
/*        console.log(menuBar)
    }
}
xhr.open('GET', '../tvidproduction.github.io/data.json', true)
xhr.send()*/
// Akhir Mengambil data.json