var btnTranslate =document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

console.log(txtInput)

function clickHandler(){
    console.log("clicked")
    console.log("Input is ", txtInput.value)

}

btnTranslate.addEventListener("click",clickHandler)



