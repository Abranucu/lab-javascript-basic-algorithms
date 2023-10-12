// Iteration 1: Names and Input

let hacker1Name = "maria";
const hacker1 = `The driver's name is ${hacker1Name}`;
console.log(hacker1);

let hacker2Name = "xxx";
const hacker2 = `The navitator's name is ${hacker2Name}`;
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1Name.length > hacker2Name.length) {
  console.log(
    `The driver has the longest name, it has ${
      hacker1Name.length - hacker2Name.length
    } more characters.`
  );
} else if (hacker1Name.length < hacker2Name.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${
      hacker2Name.length - hacker1Name.length
    } more characters.`
  );
} else if (hacker1Name.length === hacker2Name.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1Name.length} characters!`
  );
}

// Iteration 3: Loops

let hacker1NameMayusEspacio = "";

for (let i = 0; i < hacker1Name.length; i++) {
  hacker1NameMayusEspacio += hacker1Name[i] + " ";
}
console.log(hacker1NameMayusEspacio.toUpperCase());

let hacker1AlReves = "";

for (let i = hacker1Name.length - 1; i >= 0; i--) {
  hacker1AlReves += hacker1Name[i];
}
console.log(hacker1AlReves);

/*
for (let i = 0; i < hacker1Name.length && i < hacker2Name.length; i++) {
  if (hacker1Name[i] > hacker2Name[i]) {
    console.log("Yo, the navigator goes first definitely.")
    break;
  } else if (hacker1Name[i] < hacker2Name[i]) {
    console.log("The driver's name goes first.")
    break;
  } else if (hacker1Name[i] === hacker2Name[i]) {
    continue;
  } else if (hacker1Name === hacker2Name) {
console.log("What?! You both have the same name?")
  } 
}
*/

let minLength = Math.min(hacker1Name.length, hacker2Name.length);
let i;

for (i = 0; i < minLength; i++) {
  if (hacker1Name[i] < hacker2Name[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1Name[i] > hacker2Name[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}
if (i === minLength) {
  if (hacker1Name.length < hacker2Name.length) {
    console.log("The driver's name goes first.");
  } else if (hacker1Name.length > hacker2Name.length) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

// Bono 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra est lorem, tempus egestas nisl semper quis. Vestibulum nulla sem, dictum eget elementum vitae, sodales vitae quam. Mauris eget tellus vel tellus rhoncus blandit a in ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis rutrum tellus, et consectetur nisi ultricies ac. Maecenas vel egestas arcu. Pellentesque et dolor eget neque vestibulum fermentum id non quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. In semper ligula tristique eros laoreet condimentum. In ut nisi ipsum. Curabitur blandit gravida ante et pharetra. Phasellus id tempor augue, ut aliquam est.Nunc hendrerit est ac arcu gravida, nec accumsan libero congue. In accumsan condimentum velit eget pulvinar. Suspendisse mattis suscipit enim, id ornare nulla malesuada vitae. Quisque commodo neque eu tortor rutrum, ut sollicitudin quam vulputate. Maecenas varius magna ante, sed malesuada nisl congue nec. Vestibulum sit amet ante a risus vestibulum lacinia sit amet eu magna. Etiam sodales facilisis magna eget suscipit. In quis nisl a nisl viverra maximus in sit amet nibh. Proin nec magna eu lectus pulvinar dignissim. Praesent diam nisl, fermentum maximus dolor laoreet, malesuada eleifend magna.Sed ac vestibulum enim, sit amet euismod augue. Phasellus semper metus elit, ac mattis est semper nec. In suscipit, risus sed ullamcorper ultricies, velit massa euismod sem, eget malesuada lectus magna eget massa. Nam eget turpis risus. Aenean eros libero, feugiat consequat lacus pulvinar, sodales feugiat odio. Nullam ac est dui. Pellentesque tincidunt ipsum id massa volutpat, vulputate aliquet est euismod.";

let palabras = longText.split(" ");
let countPalabras = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i] !== " ") {
    countPalabras++;
  }
}

console.log(`El texto tiene ${countPalabras + 1} palabras`);

let palabraEt = longText.split(" et", " Et");
let countEt = 0;

for (let i = 0; i < palabraEt.length; i++) {
  if (palabraEt[i] === " et" && " Et") {
    countEt++;
  }
}

console.log(`El texto tiene ${countEt} palabras et`);

// Bono 2

let fraseAComprobar = "race car";
let esPalindromo = true;
let longitud = fraseAComprobar.length;

for (let i = 0; i < Math.floor(longitud / 2); i++) {
  if (fraseAComprobar[i] === " ") {
    continue;
  }
  if (fraseAComprobar[longitud - 1 - i] === " ") {
    continue;
  }
  if (fraseAComprobar[i] !== fraseAComprobar[longitud - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

if (esPalindromo) {
  console.log("Esta frase es un palindromo");
} else {
  console.log("Esta frase no es un palindromo");
}
