setInterval(function() {
    var currentdate = new Date();
    var timeLabel = currentdate.getHours() + ':' + currentdate.getMinutes();

    document.getElementById("time").innerHTML = timeLabel;
}, 1000);