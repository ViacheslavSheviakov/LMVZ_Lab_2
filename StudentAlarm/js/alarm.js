var startTorture = function() {
    var firtsNumer = Math.trunc((Math.random() * 100)) - 50;
    var secondNumer = Math.trunc((Math.random() * 100)) - 50;
    var result = firtsNumer + secondNumer;
    var label = firtsNumer;

    if(secondNumer < 0) {
        label += ' - ' + Math.abs(secondNumer);
    } else {
        label += ' + ' + secondNumer;
    }

    label += ' = ?';

    $('body').css('background-color', '#e7fc2d');
    $('body').css('color', '#000000');

    var answer = prompt(label);

    while(answer != result) {
        $('body').css('background-color', '#ef2828');
        $('body').css('color', '#ffffff');
        alert('Wrong! Try again');
        answer = prompt(label);
    }

    $('body').css('background-color', '#1fe239');
    $('body').css('color', '#ffffff');
    alert('OK! Good morning!');

    setInterval(function() {
        $('body').css('background-color', '#ffffff');
        $('body').css('color', '#000000');
    }, 5 * 1000);
}

$('.clockpicker').clockpicker({
    placement: 'bottom',
    align: 'right',
    donetext: 'Done'
});

$('#on').click(function() {
    $('#off').css('display', 'block');
    $(this).css('display', 'none');

    working = !working;
});

$('#off').click(function() {
    $('#on').css('display', 'block');
    $(this).css('display', 'none');

    working = !working;
});

var working = false;

setInterval(function() {
    var currentdate = new Date();

    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();
    var seconds = currentdate.getSeconds();

    var timeToCompare = document.getElementById('alarm').value + ':00';

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeLabel = hours + ':' + minutes + ':' + seconds;

    document.getElementById('time').innerHTML = timeLabel;

    if(working) {
        if (timeLabel  == timeToCompare) {
            startTorture();
        }
    }

}, 1000);
