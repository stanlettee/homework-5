const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let currentKeyIndex = 0;
const keyElement = document.querySelector('#key');
const statusElement = document.querySelector('#status');
const newGameButton = document.querySelector('#new-game');
keyElement.innerHTML = keys[0]

function updateKey() {
    if (currentKeyIndex < keys.length) {
        keyElement.textContent = keys[currentKeyIndex];
    } else {
        keyElement.textContent = '';
        statusElement.textContent = 'Ви завершили гру';
        PNotify.success({
            text: 'Гру завершено',
        });
    }
}

function startNewGame() {
    currentKeyIndex = 0;
    statusElement.textContent = 'Натисни вказану клавішу:';
    updateKey();
    PNotify.info({
      text: 'Нова гра розпочалась',
    });
  }

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey === keys[currentKeyIndex]) {
        currentKeyIndex += 1;
        updateKey();
    } else {
        PNotify.error({
        text: `Помилка. Очікувалась клавіша "${keys[currentKeyIndex]}", але ви натиснули "${pressedKey}"`,
        });
    }
});

newGameButton.addEventListener('click', startNewGame);

  