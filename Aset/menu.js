// Menu Geser
const menu = document.querySelector('.burger input')
const navigasi = document.querySelector('nav ul')

export const openedMenuBar = menu.addEventListener('click', ()=>{
    navigasi.classList.toggle('geser')
})
// Akhir Menu Geser

// Footer Waktu[Tahun]
const isiDengan = new Date()

export const yearOnMenuBar = document.getElementById('waktu').innerHTML = isiDengan.getFullYear()
// Akhir Footer Waktu[Tahun]







// module.exports = {MenuGeser: openedMenuBar, TahunDiMenu: yearOnMenuBar}