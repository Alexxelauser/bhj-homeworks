const startTimerMeaning  = function(){
const output = document.getElementById("timer");
    if (output.textContent >= 1){
        output.textContent --;
    }	else if (output.textContent = '0') {
        setTimeout(() => { clearInterval(timerID); }, 0);
        alert("Вы победили в конкурсе");
    }
}
let timerID = setInterval(startTimerMeaning, 1000);


