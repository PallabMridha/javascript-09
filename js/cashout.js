
let cashOutAmount = document.getElementById("cashOutAmount")
let cashOutPin = document.getElementById("cashOutPin")
let cashOutBtn = document.getElementById("cashOutBtn")
let logout = document.getElementById("logout")



logout.addEventListener("click" , function () {
    window.location ="./index.html"
})


cashOutBtn.addEventListener("click", function () {

    
    if (cashOutPin.value == 2525) {
       let cashOutFinalTk = parseFloat(cashOutAmount.value )
       let agerTakaCashOut = parseFloat(currentBlance.innerHTML)
       let finalCashOutAmmount = agerTakaCashOut - cashOutFinalTk
       
       currentBlance.innerHTML = finalCashOutAmmount
       
    }
    else{
        alert("Cash Out Pin Vul")
    }
})


// ======== end ======
