

// const whakaritea = document.getElementById('button1');
// whakaritea.addEventListener('mouseover', myFunction);
// console.log(whakaritea);

// function myFunction(){
//     document.getElementById('tipua').innerHTML = 'HAUTIPUA';
//     console.log('tipua');
// }

// // // / Set the date we're counting down to
// let countDownDate = new Date("Feb 14, 2023 14:13:25").getTime();

// // // Update the count down every 1 second
// let x = setInterval(function() {

// //   // Get today's date and time
//   let now = new Date().getTime();
    
// //   // Find the distance between now and the count down date
//   let distance = countDownDate - now;
    
// //   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// //   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

const countdown = document.querySelector('.countdown');

const interval = setInterval(()=> {
    const deadline = new Date(2023, 01, 23, 09, 00, 00);

const current = new Date();

// gives us the 'countdown' from the current date to the actual event
const diff = deadline-current;

// must use Math.floor so there's no decimals reagrding days e.g 35.67etc
const days =Math.floor(diff/(1000*60*60*24))+ "";

// // this operation will give the remaining hours and will not exceed 24
// //                modulus ^
const hours =Math.floor(diff/(1000*60*60)%24)+ "";

const minutes =Math.floor(diff/(1000*60)%60)+ "";

const seconds =Math.floor((diff/1000)%60)+ "";

countdown.innerHTML = `
<div data-content="Days">${days.length === 1 ? `0${days}` :days}</div>
<div data-content="Hours">${hours.length === 1? `0${hours}`: hours}</div>
<div data-content="Minutes">${minutes.length === 1? `0${minutes}`: minutes}</div>
<div data-content="Seconds">${seconds.length === 1? `0${seconds}`: seconds}</div>
`;


if (diff < 0){
    clearInterval(interval);
    countdown.innerHTML= '<h1>Herenga Waka Herenga Tangata </h1>';
}
}, 1000);

