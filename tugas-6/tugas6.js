// soal1

const luas = (a = 3.14, b, c) => {
    return a*b*c;
};
console.log(luas(3.14, 8, 8));

const keliling = (a=3.14, b) => {
    return a*b;
};
console.log(keliling(3.14, 16));

// soal2

let kata1 = "saya";
let kata2 = "adalah";
let kata3 = "seorang";
let kata4 = "frontend";
let kata5 = "developer";

let kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`

console.log(kalimat);

// soal3

const FullName = (firstname, lastname) => ({
    firstname: firstname,
    lastname: lastname
});
console.log(FullName("william", "imoh"));
     
  
// soal4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(firstName, lastName, destination, occupation, spell);
  


//   soal5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined);

