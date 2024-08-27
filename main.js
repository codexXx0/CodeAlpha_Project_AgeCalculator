let startDate = document.getElementById("startDate")
let endDate = document.getElementById("endDate")
let calcBtn = document.getElementById("calc")
let delBtn = document.getElementById("Reset")
let mainPage = document.querySelector(".mainCalc")
let autoAgePage = document.querySelector(".autoCalc")
let birthDate = document.getElementById("birthDate")
let autoAgeBtn = document.getElementById("autoAge")
let finalPage = document.querySelector(".final")
let finalAge = document.getElementById("finalAge")
let finalAgePage = document.querySelector(".finalAgePage")
let finalAgeP = document.getElementById("finalAgeFinal")
let backAgainBtn = document.getElementById("backAgain")
let backBtn = document.getElementById("back")
let frontPage = document.querySelector(".frontPage")
let startBtn = document.getElementById("start")

startBtn.onclick = function() {
    frontPage.classList.add("slide-top")
    console.log("shit")
}

autoAgeBtn.onclick = function() {
    if (birthDate.value) {
        let startAutoDateArr = birthDate.value.split("-") 
        let todayDate = new Date().toISOString().slice(0, 10)
        let todayDateArr = new Date().toISOString().slice(0, 10).split("-") 
        let yearCount = todayDateArr[0]- startAutoDateArr[0]
        let monthCount = todayDateArr[1]- startAutoDateArr[1]
        let daysCount = todayDateArr[2]- startAutoDateArr[2]
        if (todayDate > birthDate.value) {
            if (todayDateArr[1] < startAutoDateArr[1]) {
                if (todayDateArr[2] < startAutoDateArr[2]) {
                    finalAgeP.textContent = ` ${yearCount - 1} Years _ ${(12 - (-monthCount)) - 1} Month _ ${30 - (-daysCount)} Day `
                    finalAgePage.classList.remove("hide")
                    mainPage.classList.add("hide")   
                    autoAgePage.classList.add("hide")
                } else {
                    finalAgeP.textContent = ` ${yearCount - 1} Years _ ${12 - (-monthCount)} Month _ ${todayDateArr[2]- startAutoDateArr[2]} Day `
                    finalAgePage.classList.remove("hide")
                    mainPage.classList.add("hide")
                    autoAgePage.classList.add("hide")
                }
            } else if (todayDateArr[1] > startAutoDateArr[1] && todayDateArr[2] < startAutoDateArr[2] ){
                finalAgeP.textContent = ` ${yearCount } Years _ ${(todayDateArr[1]- startAutoDateArr[1] ) - 1} Month _ ${30 - (-daysCount)} Day `
                finalAgePage.classList.remove("hide")
                mainPage.classList.add("hide")        
                autoAgePage.classList.add("hide")
        } else {
            finalAgeP.textContent = ` ${todayDateArr[0]- startAutoDateArr[0]} Years _ ${todayDateArr[1]- startAutoDateArr[1] } Month _ ${todayDateArr[2]- startAutoDateArr[2]} Day `
                finalAgePage.classList.remove("hide")
                mainPage.classList.add("hide")    
                autoAgePage.classList.add("hide")
            }
        } else if (todayDate === birthDate.value) {
            swal("Hello There!", "Welcome Project Zero ;) ", "warning");
        } else {
            swal("Error!", "Start Date is Bigger Than End Date!", "error");
        }
    } else {
        swal("Error!", "Please Fill In All The Information!", "error");
    }
}

calcBtn.onclick = function(){
    if (startDate.value && endDate.value) {
        let startDateArr = startDate.value.split("-")
        let endDateArr = endDate.value.split("-")
        let yearCount = endDateArr[0]- startDateArr[0]
        let monthCount = endDateArr[1]- startDateArr[1]
        let daysCount = endDateArr[2]- startDateArr[2]
        if (endDate.value > startDate.value) {
            if (endDateArr[1] < startDateArr[1]) {
                if (endDateArr[2] < startDateArr[2]) {
                    finalAge.textContent = ` ${yearCount - 1} Years _ ${(12 - (-monthCount)) - 1} Month _ ${30 - (-daysCount)} Day `
                    finalPage.classList.remove("hide")
                    mainPage.classList.add("hide")
                    autoAgePage.classList.add("hide")        
                } else {
                    finalAge.textContent = ` ${yearCount - 1} Years _ ${12 - (-monthCount)} Month _ ${endDateArr[2]- startDateArr[2]} Day `
                    finalPage.classList.remove("hide")
                    mainPage.classList.add("hide")
                    autoAgePage.classList.add("hide")
                }
            } else if (endDateArr[1] > startDateArr[1] && endDateArr[2] < startDateArr[2] ){
                finalAge.textContent = ` ${yearCount } Years _ ${(endDateArr[1]- startDateArr[1] ) - 1} Month _ ${30 - (-daysCount)} Day `
                finalPage.classList.remove("hide")
                mainPage.classList.add("hide")
                autoAgePage.classList.add("hide")
        } else {
                finalAge.textContent = ` ${endDateArr[0]- startDateArr[0]} Years _ ${endDateArr[1]- startDateArr[1] } Month _ ${endDateArr[2]- startDateArr[2]} Day `
                finalPage.classList.remove("hide")
                mainPage.classList.add("hide")
                autoAgePage.classList.add("hide")
            }
        } else if (endDate.value === startDate.value) {
            swal("Hello There!", "Welcome Project Zero ;) ", "warning");
        } else {
            swal("Error!", "Start Date is Bigger Than End Date!", "error");
        }
    } else {
        swal("Error!", "Please Fill In All The Information!", "error");
    }
}

delBtn.onclick = function(){
    startDate.value = "mm/dd/yyyy"
    endDate.value = "mm/dd/yyyy"
}

backAgainBtn.onclick= function() {
    finalAgePage.classList.add("hide")
    mainPage.classList.remove("hide")
    autoAgePage.classList.remove("hide")

}

backBtn.onclick = function(){
    finalPage.classList.add("hide")
    mainPage.classList.remove("hide")
    autoAgePage.classList.remove("hide")
}
