function selamla(isim: string) {
    return "Merhaba " + isim;
} // burada olduğu gibi typescript içinde normal javascript de yazabiliriz.

let mesaj = selamla("Enes");
console.log(mesaj);


let sayi: number; // sayi değişkeninin tipi number'dir.
sayi = 10;
sayi = 10.4;
let sehir: string; // string tipinde
sehir = "Ankara";
sehir = "Enes";
// TS değişken tipi oluşturma -> let değişkenAdi : tipi

let dogruMu: boolean;
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

let dizi: number[]; // number tipinde bir dizi oluşturduk
dizi = [1, 2, 3, 4];

let sayilar: Array<number> = [12, 32, 123, 431]; // generic tip oluşturduk.

let denemeDizi: [number, string] = [2, "Deneme"]; // tuple

enum Renk { Red = 1, Black, Blue }
let renk: Renk = Renk.Blue; // Renk tipinde bir değişken

let notSure: any = "Ankara"; 
notSure = 3;

let yap : void = undefined; 

function merhaba():void {
    console.log("Kaydedildi!");
}
