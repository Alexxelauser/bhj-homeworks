const startTimerMeaning  = function(){
    const output = document.getElementById("timer");

    if (output.textContent >= 1){
        output.textContent --;
    }	else if(output.textContent = '0'){
        alert("Вы победили в конкурсе");
    }
}

setInterval(startTimerMeaning,1000);