function topla(x: number, y: number) { // parametrelerin tipini belirledik 
    return x + y;
}

let sonuc: number = topla(3, 4);
console.log(sonuc);
console.log(topla(5, 12));

function selamla(isim: string) {
    console.log(`Selam ` + isim)
}

function carp(x: number, y: number = 4) { // y parametresinin DEFAULT değerini belirledik.
    return x * y;
}

function böl(x: number, y?: number) { // değişkenAdi? -> tanımlanmasa da olur. OPTIONAL tanımlama denir bu olaya
    if (y) { // eğer y defined yani tanımlı ise bu bloğu çalıştır
        return x / y;
    }
    console.log("y değişkeni tanımlamadığı için tek başına x değeri = " + x);
}
// OPTIONAL VEYA DEFAULT PARAMETRELERİN SON PARAMETREDE OLMASI ŞARTTIR!
// 'rest' parametresi -> parametrelerde sınır sayısı yoksa rest parametreler kullanılır(bkz. C# params)
function davetEt(ilkDavetli: string, ...digerleri: string[]) { // rest parametre denir. parametre sayısı bilinmediğinde olur.
    return ilkDavetli + " " + digerleri.join(" ");
}
selamla("Enes");
console.log(carp(3)); // 3 * 4 olacak çünkü fonksiyonda 2. parametreye default 4 verdik.
console.log(carp(2, 6));
console.log(böl(4, 5)); // opsiyonel fonk
console.log(böl(6));
console.log(davetEt("Enes", "Baysan"));