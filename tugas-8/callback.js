function readBooks(time, book, callback){
    console.log(`saya membaca ${book.name}`)
    setTimeout(function() { 
        let sisaWaktu = 0
        if (time > book.timeSpent){
            sisaWaktu = time - book.timeSpent
            console.log(`saya telah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu)
        }else {
            console.log('waktu habis')
            callback(time)
        }
    }, book.timeSpent)
}

module.exports = readBooks