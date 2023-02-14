"use strict";
const theEnd = Date.parse(new Date(2023, 4, 20));

function timeCreate(end) {
    const timeDifference = theEnd - Date.parse(new Date()),
          days = Math.floor((timeDifference / 86400000)),
          hours = Math.floor((timeDifference / 3600000)) % 24,
          minutes = Math.floor((timeDifference / 60000)) % 60,
          seconds = Math.floor((timeDifference / 1000)) % 60;

    return {
        'endTime': timeDifference,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function timeTechnicalMoments(end) {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          intervalId = setInterval(timeAdd, 1000);

    timeCreate(end);

    timeAdd(end);

    function timeAdd(end) {
        const time = timeCreate(end),
              digitsDays = time["days"].toString().split(''),
              digitsHours = time["hours"].toString().split(''),
              digitsMinutes = time["minutes"].toString().split(''),
              digitsSeconds = time["seconds"].toString().split('');

        if (time.days < 100) {
            digitsDays.unshift(0);
        }

        if (time.days < 10) {
            digitsDays.unshift( 0);
        }

        if (time.hours < 10) {
            digitsHours.unshift(0);
        }

        if (time.minutes < 10) {
            digitsMinutes.unshift(0);
        }

        if (time.seconds < 10) {
            digitsSeconds.unshift(0);
        }

        if (time["endTime"] === 0) {
            clearInterval();
        }

        days.innerHTML = `<span>${digitsDays["0"]}</span><span>${digitsDays["1"]}</span><span>${digitsDays["2"]}</span>`;
        hours.innerHTML = `<span>${digitsHours["0"]}</span><span>${digitsHours["1"]}</span>`;
        minutes.innerHTML = `<span>${digitsMinutes["0"]}</span><span>${digitsMinutes["1"]}</span>`;
        seconds.innerHTML = `<span>${digitsSeconds["0"]}</span><span>${digitsSeconds["1"]}</span>`;
    }
}

timeTechnicalMoments(theEnd);
