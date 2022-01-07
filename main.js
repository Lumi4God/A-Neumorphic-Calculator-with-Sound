var display = document.querySelector('.display');
function insert(n){
    display.value += n;
}
// Sound on the button whenever it's clicked
var bleep = new Audio();
bleep.src = 'Audio/mixkit-arcade-game-jump-coin-216.wav';
// Sound on the = button whenever its's clicked
var bleep2 = new Audio();
bleep2.src = 'Audio/mixkit-quick-win-video-game-notification-269.wav';


function calc() {
    display.value = eval(display.value);
}

function clr() {
    display.value = "";
}

function sqr() {
    display.value = Math.pow(display.value, 2);
}

function qube() {
    display.value = Math.pow(display.value, 3);
}

function back() {
    display.value = display.value.substr(0,display.value.length-1);
}