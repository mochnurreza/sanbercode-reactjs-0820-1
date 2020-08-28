// soal1

function halo (a) {

    return a;
};

var hasil = console.log (halo("Halo Sanbers !"));

// soal 2
function kalikan (a,b) {
    
    return a * b
}
var hasilKali = kalikan(12, 4);
console.log(hasilKali);

// soal 3
function introduce (name, age, address, hobby) {
    return  "nama saya "+ name + ", umur saya " + age + " tahun," + " alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan);

// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var personObj = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}
 
console.log(personObj)

// soal5
var buah = [{nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: "9000"}, {nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: "8000"}, {nama: "semangka", warna: "hijau & merah", ada_bijinya: "ada", harga: "10000"}, {nama: "kuning", warna: "kuning", ada_bijinya: "tidak", harga: "5000"}]

var buahFilter = buah.filter(function(item){
    return item.harga == "9000"
});

console.debug(buahFilter);

// soal 6
var dataFilm = [];
function Nonton(nama, durasi, genre, tahun){
    this.nama = nama;
    this.durasi = durasi;
    this.genre = genre;
    this.tahun = tahun;
    return (this.nama, durasi, genre, tahun);
}
dataFilm.push(new Nonton("John Wick", "120 menit", "Action", "2014"));
dataFilm.push(new Nonton("Agent 47", "90 menit", "Action", "2015"));

console.log(dataFilm);
