

const dates = document.getElementsByClassName("date");
const bookeddate = document.getElementById("booked-date");
const slot = document.getElementById("slot");
const options = document.getElementsByClassName("options");
const bookedSlot = document.getElementById("booked-slot");

const formdate = document.getElementById("date");
const formtime = document.getElementById("time");
const frombtn = document.getElementById("btn");

const station=document.getElementById("station").value;
const level = document.getElementById("type").value

for(let i=0;i<dates.length;i++){
    dates[i].addEventListener("click",function(event){
        bookeddate.innerHTML= dates[i].innerHTML +"-03-2023";
        formdate.value = bookeddate.innerHTML;
        const date = formdate.value;
        fetch(`/bookings/${station}/${level}/${date}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for(let j=0;j<options.length;j++){
                options[j].removeAttribute("disabled");
            }
            // options.forEach(function(option){
                
            // })
            for(let j=0;j<options.length;j++){
                if(data.includes(options[j].value)){
                    console.log("undi");
                    slot.removeChild(options[j]);
                    j=0;
                }
                else{
                    console.log("Ledu");
                    options[j].removeAttribute("disabled");
                }
            }



        })
        .catch(error => console.log(error));
    });
}

slot.addEventListener("change",function(event){
    formtime.value = slot.value;
    bookedSlot.innerHTML = slot.value;

});

frombtn.addEventListener("submit",function(event){
    windows.alert("Booked successfully");
});

