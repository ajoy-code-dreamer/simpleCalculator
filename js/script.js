const disOut = document.querySelector(".output_display")
const disIn = document.querySelector(".input_display")

const btnKey= document.querySelectorAll(".key")

let inputValue = ''

btnKey.forEach(function(btn){
    btn.addEventListener('click', function(e){
        inputValue += e.target.innerText
        disIn.innerHTML = inputValue
    })
})


