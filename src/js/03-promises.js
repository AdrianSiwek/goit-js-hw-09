import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
const inDelay = document.querySelector('input[name="delay"]');
const inStep = document.querySelector('input[name="step"]');
const inAmount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', submitHandler);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
        // Fulfill
      } else {
        reject({position, delay})
        // Reject
      }
    },)
  });
}