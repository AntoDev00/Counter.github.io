// Tema iniziale: scuro
document.body.classList.add('body');

// Crea il contenitore del cambio tema (angolo in alto a destra)
const themeToggleContainer = document.createElement('div');
themeToggleContainer.id = 'themeToggleContainer';
document.body.appendChild(themeToggleContainer);

// Bottone icona per tema (inizialmente 🌙)
const themeToggleBtn = document.createElement('button');
themeToggleBtn.id = 'themeToggleBtn';
themeToggleBtn.innerHTML = '🌙';
themeToggleContainer.appendChild(themeToggleBtn);

// Etichetta contatore
const countLabel = document.createElement('label');
countLabel.id = 'countLabel';
countLabel.textContent = '0';
document.body.appendChild(countLabel);

// Container bottoni
const btnContainer = document.createElement('div');
btnContainer.id = 'btnContainer';
document.body.appendChild(btnContainer);

// Funzione per creare bottoni
function createButton(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = 'buttons';
    btn.textContent = text;
    return btn;
}

// Crea e aggiungi bottoni contatore
const decreaseBtn = createButton('decreaseBtn', 'Decrease');
const resetBtn = createButton('resetBtn', 'Reset');
const increaseBtn = createButton('increaseBtn', 'Increase');

btnContainer.appendChild(decreaseBtn);
btnContainer.appendChild(resetBtn);
btnContainer.appendChild(increaseBtn);

// Logica contatore
let count = 0;

increaseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = () => {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
};

// Funzione di animazione fade (opzionale per un effetto morbido)
function fadeBody(callback) {
    document.body.style.opacity = '0';  // Abbassa l'opacità
    setTimeout(() => {
        callback();  // Cambia il tema
        document.body.style.opacity = '1';  // Ripristina l'opacità
    }, 200);  // Tempo di durata del fade (200ms)
}

// Logica cambio tema con fade
let darkMode = true;

themeToggleBtn.onclick = () => {
    fadeBody(() => {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add('body');
            document.body.classList.remove('light');
            themeToggleBtn.innerHTML = '🌙';
        } else {
            document.body.classList.remove('body');
            document.body.classList.add('light');
            themeToggleBtn.innerHTML = '☀️';
        }
    });
};
