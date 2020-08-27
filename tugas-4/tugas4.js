// soal 1
var looping1 = 2;
var looping2 = 20;

while (looping1 <= 20){
    console.log( + looping1 +  " - I Love Coding");
    looping1 +=2;
  
}

while (looping2 >=2){
    console.log(+ looping2 + " - I will become a frontend developer");
    looping2 -=2;
}

// soal 2
var i = 1;
for ( var i = 1; i <= 20; i++){
    if ( i % 3 == 0 && i % 2 != 0){
        console.log(+ i + " - I Love Coding")
    }else if ( i % 2 === 0){
        console.log(+ i + " - Berkualitas")
    }else if( i % 1 === 0){
        console.log(+ i + " - Santai")
    }else{
        console.log("invalid")
    }    
}
// soal 3

for (var i = 1; i <= 7; i++) {
	var result = '#';
	for (var j = 2; j <= i; j++) {
		result += '#';
	}
	console.log(result);
}

// soal4
var kalimat="saya sangat senang belajar javascript"
var arr = kalimat.split(" " , 5);

console.log(arr);

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for(var i = 0 ; i < 5 ; i++){
    daftarBuah.sort();
    console.log(daftarBuah[i]);
}

