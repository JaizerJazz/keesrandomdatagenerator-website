const generateButton = document.getElementById("generateButton");
const randomNameElement = document.getElementById("randomName");
const randomSSNElement = document.getElementById("randomSSN");
const randomDOBElement = document.getElementById("randomDOB");

generateButton.addEventListener("click", function() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet[randomIndex];
  const randomFirstName = getRandomName(randomLetter);
  const randomLastName = getRandomName(randomLetter);
  const randomSSN = getRandomSSN();
  const randomDOB = getRandomDOB();

  randomNameElement.textContent = "Name: " + randomFirstName + " " + randomLastName;
  randomSSNElement.textContent = "SSN: " + randomSSN;
  randomDOBElement.textContent = "Date of Birth: " + randomDOB;
});

function getRandomName(startingLetter) {
  const vowels = "AEIOU";
  const consonants = "BCDFGHJKLMNPQRSTVWXYZ";

  const getRandomChar = (characters) => characters[Math.floor(Math.random() * characters.length)];

  const randomNameLength = Math.floor(Math.random() * 5) + 3; // Random length between 3 and 7 characters
  let name = startingLetter;

  for (let i = 1; i < randomNameLength; i++) {
    if (i % 2 === 0) {
      name += getRandomChar(vowels);
    } else {
      name += getRandomChar(consonants);
    }
  }

  return name;
}

function getRandomSSN() {
  const randomDigits = Math.floor(Math.random() * 10000000); // Generate a random 7-digit number
  const formattedSSN = String(randomDigits).padStart("", "");
  return formattedSSN.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3");
}

function getRandomDOB() {
  const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
  const randomYear = String(Math.floor(Math.random() * 50) + 1950);
  return randomMonth + "/" + randomDay + "/" + randomYear;
}