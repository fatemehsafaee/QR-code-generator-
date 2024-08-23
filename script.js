

const main = document.querySelector('main')
const generateQR = document.querySelector('.btn button')
let url =  document.querySelector('.url');
const qrCodeSection = document.querySelector('.qrCode')
const qrCode = document.querySelector('.qr')




generateQR.addEventListener('click', generateQRCode)


function generateQRCode(){

    let urlValue = url.value;
    if(! urlValue) return;    //do not continue the rest
    generateQR.innerText = 'Generating QR Code ...'

   qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlValue}`
   qrCode.addEventListener('load', ()=>{
       main.classList.add('active')
       generateQR.innerText = 'Generate QR Code'

   })

}



url.addEventListener('input', ()=>{
    main.classList.remove('active')
})

