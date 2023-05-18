
$(document).ready(function firstStart() {
    var valString;
    let dogruCevap = 0;
    let yanlisCevap = 0;
    let intervalId;
    let soru;

    $("#txtSoru").text("");
    $("#txtCevap").text("");

    var rastgeleSayi1 = Math.floor(Math.random() * 10) + 1;
    var rastgeleSayi2 = Math.floor(Math.random() * 10) + 1;
    var islemIsareti = Math.floor(Math.random() * 4);

    $("#btnBasla").prop("disabled", false);
    $("#btnDurdur").prop("disabled", true);
    $("#btnGonder").prop("disabled", true);
    $("#txtCevap").prop("disabled", true);

});

function islem() {
    rastgeleSayi1 = Math.floor(Math.random() * 10) + 1;
    rastgeleSayi2 = Math.floor(Math.random() * 10) + 1;
    islemIsareti = Math.floor(Math.random() * 4);

    switch (islemIsareti) {
        case 0:
            soru = `${rastgeleSayi1} + ${rastgeleSayi2}`;
            break;
        case 1:
            soru = `${rastgeleSayi1 + rastgeleSayi2} - ${rastgeleSayi2}`;
            break;
        case 2:
            soru = `${rastgeleSayi1} x ${rastgeleSayi2}`;
            break;
        case 3:
            soru = `${rastgeleSayi1 * rastgeleSayi2} / ${rastgeleSayi2}`;
            break;
    }

    return soru;
}

$("#btnBasla").click(function basla() {
    $("#btnBasla").prop("disabled", true);
    $("#btnDurdur").prop("disabled", false);
    $("#btnGonder").prop("disabled", false);
    $("#txtCevap").prop("disabled", false);

    $("#txtSoru").text(islem());

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

$("#btnGonder").click(function () {
    var kullaniciCevabi = parseInt($("#txtCevap").val());
    if (soru == kullaniciCevabi) {
        dogruCevap++;
        /*$('#modalDogru').modal('show');*/
        /*basla();*/
    } else {
        yanlisCevap++;
        /*$('#modalYanlis').modal('show');*/
        /*basla();*/
    }
});

$("#btnDurdur").click(function bitir() {

    clearInterval(intervalId);

    let minutes = $("#minutes");
    let seconds = $("#seconds");   

    //$("#sonucBildirBody").text(`${minutes}.${seconds} zamanda,\n
    //${dogruCevap} doğru, ${yanlisCevap} yanlış cevap verdin!\n
    //Tekrar denemek ister misin?`);

    //$("#modalKapat").click(firstStart());
    //$("#modalRestart").click(basla());

    $('#sonucBildir').modal('show');

    $("#btnBasla").prop("disabled", false);
    $("#btnDurdur").prop("disabled", true);
    $("#btnGonder").prop("disabled", true);
    $("#txtCevap").prop("disabled", true);

    
    $("#minutes").text("00");
    $("#seconds").text("00");
    dogruCevap = 0;
    yanlisCevap = 0;
});