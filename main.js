/* alert('Hello!') */
console.log("hello! nice to see you");

const x = 25;
console.log(x);
let y = "hi";
console.log(y);
/* let y = 32
console.log(y) */

const dogName = "Nel";
const dogAge = 2;
console.log(
  `Cześć! Poznaj mojego psiaka ${dogName}, która ma ${dogAge} lata. Żałuj, że jej nie znasz... :D `
);

const note = document.querySelector(".note__description--js");
note.innerHTML =
  "Ten tekst dodałem dzięki js. Mam nadzieje że to działa, bo jak nie to dupa";

const noteSucceed = document.querySelector(".note__description--js2");
noteSucceed.innerHTML = `Udało się! A mój pies to ${dogName} i ma ${dogAge} lata.`;

const noteSucceedDescription = document.querySelector(
  ".note__description--js3"
);
noteSucceedDescription.innerHTML =
  "🎉🎉 Z programowaniem jest jak z gotowaniem. Serio. Ważne! Uważnie zatrzymać się na początku i precyzyjnie i łopatologicznie ustalić co chcę osiągnąć - jakie aktywności muszę wykonać, w jakiej kolejności. Czego potrzebuję do ugotowania tego rozwiązania? 🏀🎉";

const title = document.querySelector(".note__title--js");
title.innerHTML = "14.08.2020 have fun (added by js)";

/* const gree142 = (name, age) => {
    alert(`Hello, my name is ${name} i mam ${age}`);
    console.log(`Hello, my name is ${name} i mam ${age}`);
} 

gree142('Arek', 24) */

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".note__description--js4",
  "Hello World (contend created by function in JS) First function in my life 🍎"
);

const specialSection = (querySelectorContent, content) => {
  const special = document.querySelector(querySelectorContent);
  special.innerHTML = content;
};

specialSection(".special__heading--js", "To jest test i DZIAŁA");
specialSection(
  ".special__description--js",
  "Funkcja dodana przy pomocy => (Fat) arrow function!🔥"
);
specialSection(
  ".special__description--js2",
  "Mega mnie to jara i daje dużo przyjemności! 🔊"
);

/* const calculate = (myNumber) => {
    return myNumber*7

}

calculate(1)
console.log(myNumber) */

function calculate(myNumber) {
  console.log(`dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return `Mój wynik to ${myNumber}`;
}
const myResult = calculate(dogAge);
console.log(myResult);

console.log(dogAge);

const greet = (dogName, dogAge, addedAge) => {
  futureAge = dogAge + addedAge;
  console.log(
    `Cześć jestem ${dogName} i mam ${dogAge}. A za ${addedAge} lata będę miała ${futureAge}`
  );
};

greet("Nel", 2, 4);

/* OBJECT */

const nel = {
  age: 2,
  firstName: "Nel",
  lastName: 0,
  weight: 10,
  /*  weightWithMetrics: `${nel.weight}kg`, */
  sex: "female",
  isHungry: true,
};

console.log(nel);
console.log(nel.weight);

function js5(querySelectorContent, content) {
  const paragraph = document.querySelector(querySelectorContent);
  paragraph.innerHTML = content;
}

js5(
  ".note__description--js5",
  "Czy aby na pewno??? Monotonia niekoniecznie, ale rutyna jest jak najbardziej wskazana. Jak ma się gram ochoty, to monotonię można łatwo pożegnać. Urozmaicając sobie cokolwiek bym nie robił. :D Poza tym trzeba regularnie i wytrwale pracować."
);
