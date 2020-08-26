// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama.concat(" ", kataKedua.replace("senang", "Senang")," ", kataKetiga," ", kataKeempat.toUpperCase()));

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var int1 = Number.parseInt(kataPertama);
var int2 = Number.parseInt(kataKedua);
var int3 = Number.parseInt(kataKetiga);
var int4 = Number.parseInt(kataKeempat);
console.log(int1 + int2 + int3 + int4);

// soal3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15); // do your own! 
var kataKetiga = kalimat.substring(15, 19); // do your own! 
var kataKeempat = kalimat.substring(19, 25); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal4
var nilai = 85;
 if (nilai == 70){
     console.log("B")
 }else if (nilai == 60){
     console.log("C")
 }else if( nilai == 50){
     console.log("D")
 }else{
     console.log("A")
 }

// soal5
var tanggal = 18;
var bulan = 11;
var tahun = 1994;

switch(bulan){
    case  1: 
    bulan = "Januari";
    break;
    case  2: 
    bulan = "Februari";
    break;
    case  3: 
    bulan = "Maret";
    break;
    case  4: 
    bulan = "April";
    break;
    case  5: 
    bulan = "Mei";
    break;
    case  6: 
    bulan = "Juni";
    break;
    case  7: 
    bulan = "Juli";
    break;
    case  8: 
    bulan = "Agustus";
    break;
    case  9: 
    bulan = "September";
    break;
    case  10: 
    bulan = "Oktober";
    break;
    case  11: 
    bulan = "November";
    break;
    case  12: 
    bulan = "Desember";
    break;
}

var date = tanggal + " " + bulan + " " + tahun ;
console.log(date);

