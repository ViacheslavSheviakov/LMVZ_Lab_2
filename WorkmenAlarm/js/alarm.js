var toDayOfWeek = function (day) {
    if (day <= 0) {
        console.error('Wrong value!');
    }

    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return days[day - 1];
};

var curDayOfWeek = toDayOfWeek(new Date().getDay());

$('.clockpicker').clockpicker({
    placement: 'bottom',
    align: 'right',
    donetext: 'Done'
});

setInterval(function() {
    var currentdate = new Date();

    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var timeLabel = hours + ':' + minutes;

    document.getElementById('time').innerHTML = timeLabel;
}, 1000);