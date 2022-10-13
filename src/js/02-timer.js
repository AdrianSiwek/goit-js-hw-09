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