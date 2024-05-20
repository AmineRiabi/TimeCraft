const ellipsisBtn = document.querySelector(".ellipsis-btn");
const checkMenu = document.querySelector(".check-menu");
//check if clicked button ellipsis in order to show check menu
ellipsisBtn.addEventListener("click",function(){
    checkMenu.classList.toggle("active");
});
//check if clicked outside  
document.addEventListener("click",function(e){
    if(checkMenu.classList.contains("active")){
        if(!checkMenu.contains(e.target) && e.target != ellipsisBtn){
            checkMenu.classList.remove("active");
        }
    }
});
// activate or deactivate the switch button
const formatSwitchBtn = document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click",function(){
    this.classList.toggle("active");
    this.getAttribute("data-format") == "12" ? this.setAttribute("data-format","24") : this.setAttribute("data-format","12");
});

setInterval(function(){
    let dateNow = new Date();   
    //add the day,month and year
    let monthsName = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("Day-Name").innerText = `${dayName[dateNow.getDay()]},`
    document.getElementById("Month").innerText = monthsName[dateNow.getMonth()];
    document.getElementById("Day-Number").innerText = `${dateNow.getDate()},`;
    document.getElementById("Year").innerText = dateNow.getFullYear();
    document.querySelectorAll(".day")[dateNow.getDay()].classList.add("active");
    // add the clock
    let hours = dateNow.getHours();
    let Minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let period = document.getElementById("period");
    period.innerText = "am";
    period.style.visibility = "hidden";
    if(formatSwitchBtn.getAttribute("data-format") === "12"){
        period.style.visibility = "visible";
        if(hours >= 12){
            period.innerText = "pm";
            hours = hours - 12;
        }
        if(hours == 0){
            hours = 12;
        }
    }
        if(hours < 10){
            hours = "0" + hours;
        }
        if(Minutes < 10){
            Minutes = "0" + Minutes;
        }
        if(seconds < 10){
            seconds = '0' + seconds;
        }
    

    document.getElementById("Hour").innerText = hours;
    document.getElementById("minutes").innerText = Minutes;
    document.getElementById("seconds").innerText = seconds;
},1000);


//analog clock


setInterval(function(){
    let hourHand =  document.querySelector(".hour");
    let minHand =  document.querySelector(".minute");
    let secondHand =  document.querySelector(".second");

    let dateNow = new Date();
    let hour = dateNow.getHours() * 30;
    let minute = dateNow.getMinutes() * 6;
    let second = dateNow.getSeconds() * 6;

    hourHand.style.transform = `rotate(${(hour) + (minute/12)}deg)`;
    minHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${second}deg)`;
},1000);

let clockContent = document.querySelector('.clock-content');
let btnClock = document.querySelector(".btn-clock");
btnClock.onclick = function(){
    if(clockContent.getAttribute("data-rotate") === "digital"){
        clockContent.setAttribute("data-rotate","analog");
        clockContent.style.transform = "rotateY(-180deg)";
        this.innerText = "digital clock";
    }else{
        clockContent.setAttribute("data-rotate","digital");
        clockContent.style.removeProperty('transform');
        this.innerText = "analog clock";
    }
}
