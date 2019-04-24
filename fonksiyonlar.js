function topla(x, y) {
    return x + y;
}
var sonuc = topla(3, 4);
console.log(sonuc);
console.log(topla(5, 12));
function selamla(isim) {
    console.log("Selam " + isim);
}
function carp(x, y) {
    if (y === void 0) { y = 4; }
    return x * y;
}
function böl(x, y) {
    if (y) { // eğer y defined yani tanımlı ise bu bloğu çalıştır
        return x / y;
    }
    console.log("y değişkeni tanımlamadığı için tek başına x değeri = " + x);
}
// OPTIONAL VEYA DEFAULT PARAMETRELERİN SON PARAMETREDE OLMASI ŞARTTIR!
// 'rest' parametresi -> parametrelerde sınır sayısı yoksa rest parametreler kullanılır(bkz. C# params)
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
selamla("Enes");
console.log(carp(3)); // 3 * 4 olacak çünkü fonksiyonda 2. parametreye default 4 verdik.
console.log(carp(2, 6));
console.log(böl(4, 5)); // opsiyonel fonk
console.log(böl(6));
console.log(davetEt("Enes", "Baysan"));
