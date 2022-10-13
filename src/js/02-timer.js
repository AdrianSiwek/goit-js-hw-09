import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix, { Notify } from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let myInterval = null;
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
  const days = addLeadingZero(Math.floor(ms / day));
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
}



const addLeadingZero = (value) => {
    return String(value).padStart(2, '0');
}

btnStart.addEventListener('click', startTimer);