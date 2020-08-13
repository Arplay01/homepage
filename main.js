/* alert('Hello!') */
console.log('hello! nice to see you')

const x = 25
console.log(x)
let y = 'hi'
console.log(y)
/* let y = 32
console.log(y) */

const dogName = 'Nel';
const dogAge = 2;
console.log(`Cześć! Poznaj mojego psiaka ${dogName}, która ma ${dogAge} lata. Żałuj, że jej nie znasz... :D `);

const note = document.querySelector('.note__description--js');
note.innerHTML = 'Ten tekst dodałem dzięki js. Mam nadzieje że to działa, bo jak nie to dupa';

const noteSucceed = document.querySelector('.note__description--js-succeed');
noteSucceed.innerHTML = `Udało się! A mój pies to ${dogName} i ma ${dogAge} lata.`;

const noteSucceedDescription = document.querySelector('.note__description--js-succeed-description');
noteSucceedDescription.innerHTML = '🎉🎉 Z programowaniem jest jak z gotowaniem. Serio. Ważne! Uważnie zatrzymać się na początku i precyzyjnie i łopatologicznie ustalić co chcę osiągnąć - jakie aktywności muszę wykonać, w jakiej kolejności. Czego potrzebuję do ugotowania tego rozwiązania? 🏀🎉';