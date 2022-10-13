const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')

let myInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getColor = () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
}

const onClickButtonStart = (event) => {
    startButton.disabled = true;
    myInterval = setInterval(getColor, 500)
}

startButton.addEventListener('click', onClickButtonStart);

const onClickButtonStop = () => {
    clearInterval(myInterval)
    startButton.disabled = false;
}

stopButton.addEventListener('click', onClickButtonStop);
