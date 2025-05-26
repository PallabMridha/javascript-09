let mobileNumber =document.getElementById("mobileNumber")
let pinNumber =document.getElementById("pinNumber")
let logingBtn =document.getElementById("logingBtn")

logingBtn.addEventListener("click",function () {
    let numberValue = mobileNumber.value
    let pinValue = pinNumber.value

    if (numberValue == "01321105301" && pinValue == "2525") {
        window.location.href="./home.html"
        
    }
    else{
        alert("pin mile ni")
    }
    
})


