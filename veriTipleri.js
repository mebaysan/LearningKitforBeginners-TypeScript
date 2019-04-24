function selamla(isim) {
    return "Merhaba " + isim;
} // burada olduğu gibi typescript içinde normal javascript de yazabiliriz.
var mesaj = selamla("Enes");
console.log(mesaj);
var sayi; // sayi değişkeninin tipi number'dir.
sayi = 10;
sayi = 10.4;
var sehir; // string tipinde
sehir = "Ankara";
sehir = "Enes";
// TS değişken tipi oluşturma -> let değişkenAdi : tipi
var dogruMu;
dogruMu = true;
dogruMu = false;
/*
string
number
boolean
--------
enum
array
-------
any   // any veri tipi atamakta kararsız kaldığımız tipler içindir. any ile tanımladığın bir değişkene daha sonra istediğin her şeyi tanımlayabilirsin.
void // void veri tipi bir şey döndürmek istemediğimizde işe yarar, c# ve java'daki void ile aynı düşünnebiliriz mesela veri tabanı kaydı yaparken bir değer döndürmeyiz de işlem yaptırırız.
null // referans tiplerde kullanılır -> yani onun referansını oluşturmadık demektir.
undefinied // değeri oluşmadı demektir.
*/
var dizi; // number tipinde bir dizi oluşturduk
dizi = [1, 2, 3, 4];
var sayilar = [12, 32, 123, 431]; // generic tip oluşturduk.
var denemeDizi = [2, "Deneme"]; // tuple
var Renk;
(function (Renk) {
    Renk[Renk["Red"] = 1] = "Red";
    Renk[Renk["Black"] = 2] = "Black";
    Renk[Renk["Blue"] = 3] = "Blue";
})(Renk || (Renk = {}));
var renk = Renk.Blue; // Renk tipinde bir değişken
var notSure = "Ankara";
notSure = 3;
var yap = undefined;
function merhaba() {
    console.log("Kaydedildi!");
}
