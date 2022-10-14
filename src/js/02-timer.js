import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix, { Notify } from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


startBtn.disabled = true;
let previousDate = new Date();
let chosenDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < previousDate) {
          startBtn.disabled = true;
          Notify.warning("Proszę wybrać datę w przyszłości");
      } else if (selectedDates[0] > previousDate) {
          startBtn.disabled = false;
          Notify.success("Data jest poprawna. Rozpoczynamy odliczanie.");
          chosenDate = selectedDates[0].getTime();
      }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day) < 10 ? addLeadingZero(Math.floor(ms / day)) : Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

const startTimer = () => {
    startBtn.disabled = true;
    Notify.info("Czas odpalać");


    const timerId = setInterval(() => {
        let endTime = chosenDate - Date.now();
        let countdown = convertMs(endTime);
        if (endTime <= 0) {
            Notify.info("Koniec czasu");
            clearInterval(timerId);
        } else {
            clockTimer(countdown);
        }
    }, 1000)
}

const clockTimer = (countdown) => {
  days.textContent = countdown.days;
  hours.textContent = countdown.hours;
  minutes.textContent = countdown.minutes;
  seconds.textContent = countdown.seconds;
}

const addLeadingZero = (value) => {
    return String(value).padStart(2, '0');
}

const fp = flatpickr('input#datetime-picker', options);
startBtn.addEventListener('click', startTimer);