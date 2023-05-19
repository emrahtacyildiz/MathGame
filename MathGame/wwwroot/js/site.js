
$(document).ready(function firstStart() {
    var valString;
    let trueAnswer = 0;
    let falseAnswer = 0;
    let intervalId;
    let question;

    $("#txtQuestion").text("");
    $("#txtAnswer").text("");

    var number1 = Math.floor(Math.random() * 10) + 1;
    var number2 = Math.floor(Math.random() * 10) + 1;
    var operationMark = Math.floor(Math.random() * 4);

    $("#btnStart").prop("disabled", false);
    $("#btnStop").prop("disabled", true);
    $("#btnSend").prop("disabled", true);
    $("#txtAnswer").prop("disabled", true);

});

function operation() {
    number1 = Math.floor(Math.random() * 10) + 1;
    number2 = Math.floor(Math.random() * 10) + 1;
    operationMark = Math.floor(Math.random() * 4);

    switch (operationMark) {
        case 0:
            question = `${number1} + ${number2}`;
            break;
        case 1:
            question = `${number1 + number2} - ${number2}`;
            break;
        case 2:
            question = `${number1} x ${number2}`;
            break;
        case 3:
            question = `${number1 * number2} / ${number2}`;
            break;
    }

    return question;
}

$("#btnStart").click(function basla() {
    $("#btnStart").prop("disabled", true);
    $("#btnStop").prop("disabled", false);
    $("#btnSend").prop("disabled", false);
    $("#txtAnswer").prop("disabled", false);

    $("#txtQuestion").text(operation());

    startTimer();
});

function startTimer() {
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    intervalId = setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}

$("#btnSend").click(function () {
    var userAnswer = parseInt($("#txtAnswer").val());
    if (question === userAnswer) {
        trueAnswer++;
        /*$('#modaltrue').modal('show');*/
        /*basla();*/
    } else {
        falseAnswer++;
        /*$('#modalfalse').modal('show');*/
        /*basla();*/
    }
});

$("#btnStop").click(function bitir() {

    clearInterval(intervalId);

    let minutes = $("#minutes");
    let seconds = $("#seconds");   

    //$("#resultBody").text(`${minutes}.${seconds} zamanda,\n
    //${trueAnswer} doğru, ${falseAnswer} yanlış cevap verdin!\n
    //Tekrar denemek ister misin?`);

    //$("#modalClose").click(firstStart());
    //$("#modalRestart").click(basla());

    $('#result').modal('show');

    $("#btnStart").prop("disabled", false);
    $("#btnStop").prop("disabled", true);
    $("#btnSend").prop("disabled", true);
    $("#txtAnswer").prop("disabled", true);

    
    $("#minutes").text("00");
    $("#seconds").text("00");
    trueAnswer = 0;
    falseAnswer = 0;
});