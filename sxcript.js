const days=document.querySelector("#days")
const hours=document.querySelector("#hour")
const minu=document.querySelector("#minu")
const secon=document.querySelector("#seco")

function updateTime() {
    //find cuurent year
const currentYear=new Date().getFullYear();
//find next year
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
const currentDate=new Date();
const diff=newYear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);



days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minu.innerHTML=m<10?"0"+m:m;
secon.innerHTML=s<10?"0"+s:s;


}

setInterval(updateTime,1000)