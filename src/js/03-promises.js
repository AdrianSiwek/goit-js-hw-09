import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
const inDelay = document.querySelector('input[name="delay"]');
const inStep = document.querySelector('input[name="step"]');
const inAmount = document.querySelector('input[name="amount"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}


form.addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
  event.preventDefault();
  let standDelay = Number(inDelay.value);
  let standStep = Number(inStep.value);
  let standAmount = Number(inAmount.value);

  for (let i=1, i<=standAmount, i++) {
    createPromise(i, standDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    standDelay += standStep;
  }
}