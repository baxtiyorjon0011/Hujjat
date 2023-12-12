const elInput = document.getElementById('input')
const elBtn = document.getElementById('btn')
const elResult = document.getElementById('result')

elBtn.addEventListener('click', function() {    
    let inputValue = elInput.value 

    if (inputValue <= 50) {
        elResult.textContent = 'Siz o`qishga qabul qilinmadingiz'
    } else if (inputValue <= 60) {
        elResult.textContent = 'Siz o`qishga super kontrak asosida qabul qilindingiz'
    } else if (inputValue <= 70) {
        elResult.textContent = 'Siz o`qishga kontrak asosida qabul qilindingiz'
    } else if (inputValue <= 100) {
        elResult.textContent = 'Siz o`qishga grand asosida qabul qilindingiz'
    } else {
        inputValue == Text
        elResult.textContent = 'Son kiriting'
    } 
}) 