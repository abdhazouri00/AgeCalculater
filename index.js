let circle = document.querySelector(".circle");
let day = document.querySelector(".day");
let dayInput = document.querySelector(".dayInput");
let monthInput = document.querySelector(".monthInput");
let yearInput = document.querySelector(".yearInput");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let redd = document.querySelector(".redd");
let redm = document.querySelector(".redm");
let redy = document.querySelector(".redy");
let years = document.querySelector(".years");
let months = document.querySelector(".months");
let days = document.querySelector(".days");




circle.onclick = function(){

    if((dayInput.value  !== "" && isNaN(dayInput.value)) || dayInput.value > 31 || dayInput.value <1){
        redd.style.display = "block";
        redd.innerHTML = "Please enter a valid date";
        day.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    }

    if((monthInput.value  !== "" && isNaN(monthInput.value)) || monthInput.value > 12 || monthInput.value <1){
        redm.style.display = "block";
        redm.innerHTML = "Please enter a valid date";
        month.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    }

    if((yearInput.value  !== "" && isNaN(yearInput.value)) || yearInput.value > 2023 || yearInput.value <1900){
        redy.style.display = "block";
        redy.innerHTML = "Please enter a valid date";
        year.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    }


    if(dayInput.value  == ""){
        redd.style.display = "block";
        redd.innerHTML = "Cannot be empty";
        day.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    }

    if(monthInput.value == ""){
        redm.style.display = "block";
        redm.innerHTML = "Cannot be empty";
        month.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    }

    if(yearInput.value == ""){
        redy.style.display = "block";
        redy.innerHTML = "Cannot be empty";
        year.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    }

    else{

        let date = new Date();
        let yearr = date.getFullYear();
        let monthh = date.getMonth() + 1;
        let dayy = date.getDate();

        // console.log(date , year, month, day);

        let yearstobe = yearr - yearInput.value;

        let monthstobe = monthh - monthInput.value;

        console.log(dayy);

        let daystobe = dayy - dayInput.value;

            if(daystobe < 0){

            monthstobe--;
            const daysInPreviousMonth = new Date(yearr, monthh - 1, 0).getDate();

            daystobe = daysInPreviousMonth + daystobe;

            console.log(daystobe);
            }

        years.innerHTML = `<h1><span>${yearstobe}</span> Years</h1>`;
        months.innerHTML = `<h1><span>${monthstobe}</span> Months</h1>`;
        days.innerHTML = `<h1><span>${daystobe}</span> Days</h1>`;
    }

    
};

