const incrementBtn = document.querySelector('#increment')
const decrementbtn = document.querySelector('#decrement')
const counterEl = document.getElementById('counter')
let counter =0

function incrementCounter(){
    counter++
    counterEl.innerText = counter
}
function decrementCounter(){
    counter--
    counterEl.innerText = counter
}
incrementBtn.addEventListener('click', incrementCounter)
decrementbtn.addEventListener('click', decrementCounter)
///////////////////////////////
const summitBtn = document.querySelector('#summit')
const counterE2 = document.getElementById('mcounter')
let mcounter = 0
function summitCounter(){
    mcounter++
    counterE2.innerText=mcounter
}
summitBtn.addEventListener('click', summitCounter)
if(summitBtn===incrementBtn){
    document.write("yes")
}