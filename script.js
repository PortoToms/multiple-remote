// Operator Komparasi
// ada beberapa jenis, yaitu:
//  >   Lebih besar dari
//  >=  Lebih besar sama dengan
//  <   Lebih kecil dari
//  <=  Lebih kecil sama dengan

//  ==   Equality / identik
//  !=   Inequality / tidak identik
//  ===  Strict equality
//  !==  Strict inequality

console.log(`10>7, hasilnya: ${10 > 7}`);
console.log(`10<7, hasilnya: ${10 < 7}`);
console.log(`10>=10, hasilnya: ${10 >= 10}`);
console.log(`8<=8, hasilnya: ${8 <= 8}`);

// Persamaan
// KETERANGAN: bisa membaca data berupa string, sehingga untuk input pada html dengan tipe text bisa terbaca. Tetapi tidak akurat, rawan salah, dan membingungkan.
console.log(`10=="10", hasilnya: ${10 == "10"}`);
console.log(`10!="10", hasilnya: ${10 != "10"}`);
    // CONTOH MASALAH:
console.log(`10!="9", hasilnya: ${10 != "9"}`); // malah terbaca true X
    // Lebih akurat pakai strick
    // Tetapi jenis data tidak boleh beda
console.log(`"5"==="5", hasilnya: ${"5" === "5"}`);
console.log(`5==="5", hasilnya: ${5 === "5"}`);
console.log(`5===5, hasilnya: ${5 === 5}`);
console.log(`"5"!=="5", hasilnya: ${"5" !== "5"}`);
console.log(`5!==4, hasilnya: ${5 !== 4}`);

