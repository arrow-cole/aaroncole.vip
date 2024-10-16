// Set the target launch date
let launchDate = new Date("December 31, 2025 23:59:59").getTime();

let countdown = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = launchDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Stop countdown when we reach the launch date
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "We're live now!";
    }
}, 1000);
