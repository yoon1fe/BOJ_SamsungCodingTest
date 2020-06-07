var time = 0;
var running = 0;

function start(){
    running = 1;
    increment();
}

function pause() {
    if(time != 0){
        if (running == 0) {
            running = 1;
            increment();
            $("#pause").html("중지");
        } 
        else {
            running = 0;
            $("#pause").html("시작");
        }
    }
}

function reset() {
    running = 0;
    time = 0;
    $("#pause").html("중지");
    $("#output").html("00:00:0");
}

function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;

            if(time > 54000){
                alert('1시간 30분 초과!!');
                reset();
            }
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10);
            var millisecs = time % 10;

            if (mins < 10) mins = "0" + mins;
            if (secs > 59) secs = secs - (mins * 60);
            if (secs < 10) secs = "0" + secs;

            document.getElementById('output').innerHTML = mins + ":" + secs + ":" + "" + millisecs;
            increment();
        }, 100);
    }
}