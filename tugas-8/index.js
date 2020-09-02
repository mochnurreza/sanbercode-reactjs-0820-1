var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

let a = 1;
let b = 0;

function baca(book){
    readBooks(10000,book,function(){
        if (a < 4){
            baca(books[0 + a]);
            a = a + 1;
            b = b + 1;
            
        }
    })
}

baca(books[0]);
