const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated

console.log('Hello I am a %s string!','💩');

// Styled

console.log('%c I am a text','font-size:50px;background:blue;');

// warning!

console.warn("Danger!!");

// Error :|

console.error("404!!");

// Info

console.info("CSS web sitesini şekillendirmemize yardım eder.");


// Testing

console.assert(1===2, "Bu ifade yanlış!");

// clearing

console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');

console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`isim: ${dog.name}`);
    console.log(`${dog.name} 'nun yaşı: ${dog.age}`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count("Deniz");
console.count("Naim");
console.count("Deniz");
console.count("Deniz");
console.count("Deniz");
console.count("Naim");

// timing

console.time("Bilgiler yükleniyor...");

fetch("https://api.github.com/users/DenizOk20")

.then(data => data.json())
.then(data => {
        console.timeEnd("Bilgiler yükleniyor...");
        console.log(data);
});