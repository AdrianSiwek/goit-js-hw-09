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

