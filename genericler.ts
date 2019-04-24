function islem(x: number): number { // -> parametreler dışındaki number -> dönüş tipidir
    return x;
}

function islem2(x: string): string { // -> aynı işlemleri farklı tiplerle yapmak için ayrı ayrı methodlar yazmamıza gerek yok
    return x;
}

function islem3<T>(x: T): T { // yani biz burada dedik ki -> T tipi(generic) için bir fonksiyon içeri gelen parametrenin tipini T tipi yap ve döndürdüğü değerde T tipinde(parametrenin tipi neyse) olsun
    return x;
}


//GENERIC CLASS
class GenericClass<T>{ // T tipinde bir class oluştur
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}



let kelime = islem2("Cümlecik");
let deger = islem3<number>(12);
let deger2 = islem3<string>("Cümleleleleleler"); // -> aynı methodu farklı tipler için yaptık
console.log(deger+ "\n" + deger2);

let deneme = new GenericClass<number>();
deneme.fonksiyon(32); // class'ı bir üs satırda number tipinde tanımladığımız için fonksiyon'a parametre olarak number tipinde bir değer verebiliriz. 