let startDate = document.getElementById("startDate")
let endDate = document.getElementById("endDate")
let calcBtn = document.getElementById("calc")
let delBtn = document.getElementById("Reset")
let mainPage = document.querySelector(".mainCalc")
let finalPage = document.querySelector(".final")
let finalAge = document.getElementById("finalAge")
let backBtn = document.getElementById("back")

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
                } else {
                    finalAge.textContent = ` ${yearCount - 1} Years _ ${12 - (-monthCount)} Month _ ${endDateArr[2]- startDateArr[2]} Day `
                    finalPage.classList.remove("hide")
                    mainPage.classList.add("hide")        
                }
            } else if (endDateArr[1] > startDateArr[1] && endDateArr[2] < startDateArr[2] ){
                finalAge.textContent = ` ${yearCount } Years _ ${(endDateArr[1]- startDateArr[1] ) - 1} Month _ ${30 - (-daysCount)} Day `
                finalPage.classList.remove("hide")
                mainPage.classList.add("hide")        
        } else {
                finalAge.textContent = ` ${endDateArr[0]- startDateArr[0]} Years _ ${endDateArr[1]- startDateArr[1] } Month _ ${endDateArr[2]- startDateArr[2]} Day `
                finalPage.classList.remove("hide")
                mainPage.classList.add("hide")    
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

backBtn.onclick = function(){
    finalPage.classList.add("hide")
    mainPage.classList.remove("hide")
}