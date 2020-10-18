//  ex6
var btnBlue = document.querySelector("div#ex6 button#js-btn-blue")
var btnRed = document.querySelector("div#ex6 button#js-btn-red")
var eX = document.getElementById("ex6")
 btnBlue.addEventListener("click"  ,() => {
   eX.style.backgroundColor = "blue";
 })

 btnRed.addEventListener("click"  ,() => {
    eX.style.backgroundColor = "red";
  })

// ex 10
// var btnShow = document.querySelector("div#ex10 button#js-btn-show")

// var eX10= document.querySelector("ex10")
//  var p = document.getElementById("ex")
//  var pContent = p.innerHTML
//  var click = 0;
//  var c = pContent.length ;
// //  console.log(c)
// btnShow.addEventListener('click', ()=> {
//      clicks+=1;
//     if (c >300 &&clicks %2 !==0 ){
//         eX10.style.height="auto"
//     }else {
       
//         btnShow.value.innerText="Show less"
//     }

// })



// ex 13
//  var giay = 0,
//  var phut = 0,
//  var gio = 0;
//  function timerHandler() {
//      giay++;
//      if (giay == 60) {
//          giay =0;
//          phut++;
//      }
//      if (phut == 60) {
//          giay = 0 ;
//          gio++;
//      }
//      displayTime();
//  }
//  setInterval(timerHandler,1000)
//  var timer = document.getElementById("timer");
//  function displayTime() {
//      timer.innerHTML = gio + ":" +phut +":"+ giay;
//  }
var start = document.querySelector("div#ex13 button#js-button-start")
var stop = document.querySelector("div#ex13 button#js-button-stop")
var reset = document.getElementById("js-button-reset")
var h3= document.getElementById("display")
var h =0, m=0,s=0,ms=0,t

function add(){
    ms++;
    if (ms>=1000){
        ms=0;
        s++;
        if (s>=60){
            s=0;
            m++;
            if (m>=60){
                m=0;
                h++;
                if (h>=24){
                    h=0
                }
            }
        }
    }
    h3.textContent= (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s)+ ":" + (ms > 9 ? ms : "00" + ms ||ms>99 ? ms:"0");
}
function run(){
    t = setInterval(add,1)
}
start.addEventListener('click',function (){
        run();
})
stop.addEventListener("click",function (){
    clearInterval(t);
})
reset.onclick = function (){
    h3.textContent="00:00:000";
    h=0;m=0;s=0;ms=0;
}