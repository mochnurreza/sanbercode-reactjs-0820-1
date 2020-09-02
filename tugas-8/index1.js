var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let a = 1;
let b = 0;

function read(buku){
    readBooksPromise(10000,books[0])
    .then((sisaWaktu)=> readBooksPromise (sisaWaktu, books[1]))
    .then((sisaWaktu)=> readBooksPromise (sisaWaktu, books[2]))
}

read();
