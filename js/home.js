let inputAmount = document.getElementById("inputAmount")
let addMoneyPin = document.getElementById("addMoneyPin")
let moneyBtn = document.getElementById("moneyBtn")
let currentBlance = document.getElementById("currentBlance")
let logout = document.getElementById("logout")


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

outBtn.addEventListener("click" , function () {
    window.location.href = "./cashout.html"
})
