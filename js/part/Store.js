const scriptURL = 'https://script.google.com/macros/s/AKfycbyH14N8P2klKzx1JGD_wsQQlW7GaK2JR2UWs6RB952CLGwbUrUR3kCx02wTxX27JTJY/exec'
const form = document.forms['Store']
const load = document.querySelector('.load')
const kirim = document.querySelector('.kirim')

export const Store = form.addEventListener('submit', e => {
  e.preventDefault()
  load.classList.toggle('hidden')
  kirim.classList.toggle('hidden')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      alert('Berhasil Terkirim')
      load.classList.toggle('hidden')
      kirim.classList.toggle('hidden')
      form.reset()
    })
    .catch(error => {
      console.error('Error!', error.message)
      alert('Terjadi Kesalahan')
      load.classList.toggle('hidden')
      kirim.classList.toggle('hidden')
    })
})