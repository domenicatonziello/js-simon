// Prendo elementi dal DOM
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


//creo costante per la data 
const countdownDate = new Date('Dec 25, 2022 00:00:00').getTime();

const countdown = setInterval (() => {
    // creo costante giorno attuale
    const now = new Date().getTime();
    
    // calcolo distanza tra le due date
    const distance = countdownDate - now; 

    // calcolo secondi, minuti, ore e giorni
    const countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    const countdownMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const countdownHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const countdownDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    // stampo in pagina
    days.innerText = countdownDays;
    hours.innerText = countdownHours;
    minutes.innerText = countdownMinutes;
    seconds.innerText = countdownSeconds;

    if (distance === 0){
        clearInterval(countdown);
    }
}, 1000);


