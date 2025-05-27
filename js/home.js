let inputAmount = document.getElementById("inputAmount")
let addMoneyPin = document.getElementById("addMoneyPin")
let moneyBtn = document.getElementById("moneyBtn")
let currentBlance = document.getElementById("currentBlance")
let logout = document.getElementById("logout")
let addMoneyPart = document.getElementById("addMoneyPart")
let addMoneyBtn = document.getElementById("addMoneyBtn")


addMoneyBtn.addEventListener("click", ()=>{
   addMoneyPart.style.display = "block" 
   cashOutPart.style.display = "none" 
})


// ============
logout.addEventListener("click" , function () {
    window.location ="./index.html"
})
// ============



moneyBtn.addEventListener("click", () => {

    if (addMoneyPin.value == 2525) {
        let agerTaka = parseFloat(currentBlance.innerHTML)
        let porerTaka = parseFloat(inputAmount.value)
        let finalTaka = (agerTaka+porerTaka)
        // console.log(agerTaka+porerTaka);
        currentBlance.innerHTML = finalTaka
    }
    else {
        alert("pin vul")
    }
})

// ========== end =========




let outBtn = document.getElementById("outBtn")
let cashOutAmount = document.getElementById("cashOutAmount")
let cashOutPin = document.getElementById("cashOutPin")
let cashOutBtn = document.getElementById("cashOutBtn")
let cashOutPart = document.getElementById("cashOutPart")


outBtn.addEventListener("click", ()=>{
   cashOutPart.style.display = "block" 
   addMoneyPart.style.display = "none" 
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




// ======== end =======



