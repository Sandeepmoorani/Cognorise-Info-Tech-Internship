let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let cuurnttime = new Date();
    hrs.innerHTML = (cuurnttime.getHours()<10?"0":"")+cuurnttime.getHours() ;
    min.innerHTML = (cuurnttime.getMinutes()<10?"0":"")+cuurnttime.getMinutes() ;
    sec.innerHTML = (cuurnttime.getSeconds()<10?"0":"")+cuurnttime.getSeconds() ;
}

, 1000);