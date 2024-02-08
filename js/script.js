const disOut = document.querySelector(".output_display")
const disIn = document.querySelector(".input_display")

const btnKey= document.querySelectorAll(".key")

let inputValue = ''

// btnKey.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         if(e.target.innerText == 'AC'){
//             disIn.innerHTML = '0'
//             disOut.innerHTML = '0'
//         }else if(e.target.innerText == '='){
//             let result = eval(inputValue)
//             disOut.innerHTML = result
//         }
//         else{
//             inputValue += e.target.innerText
//         disIn.innerHTML = inputValue
//         }
//     })
// })
btnKey.forEach(btn =>{
    btn.addEventListener('click',(equal)=>{
        let btnValue = btn.dataset.key;
        if(btnValue == 'ac'){
            disIn.innerHTML = '0'
            disOut.innerHTML = '0'
            inputValue = ""
        }else if(btnValue == '='){
            let result = eval(inputValue)
            disOut.innerHTML = result
        }else{
            inputValue += btnValue
            disIn.innerHTML = inputValue
        }
        
    })
})

// function validationInput(inputValue){
//     if(inputValue.indexOf('.') == -1){
//         return inputValue += '.'
//     }
// }




