class Person {
    firstName: string;
    lastName: string;
    salary: number;
    age: number;

    constructor(_firstName: string, _lastName: string, _age: number, _salary: number) {
        this.firstName = _firstName // constructor'ın aldığı parametreyi this yardımı ile oluşan nesnenin propertysine attık.
        this.lastName = _lastName
        this.age = _age
        this.salary = _salary
    }

    faturaYatır() {
        this.salary -= 150; // bu nesnenin salary property'si 150 azalsın
        console.log(`Fatura yatırıldı!\nKalan maaş = ${this.salary}`); // this.salary 11. satırdaki salary property'sine işaret eder
    }
}

//INHERITANCE
class PersonManager extends Person { // inheritance -> kalıtım yapmak için 'extends' keyword kullanılır
    borcVer(miktar: number) {
        this.salary -= miktar; // extend olduğu için Person class ile aynı proplara sahip, salary propu parametre olarak gelen miktar değişkeni kadar azalsın dedik
        console.log(`${miktar} tl borç verildiği için ${this.salary} tl kadar maaşımız kaldı!`);
    }
}
// GETTER & SETTER
class Animal {
    private _type: string;
    private _age: number;
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

}
// ABSTRACT CLASS -> tek başlarına bir anlam ifade etmezler(eksik class) ancak inheritance yöntemiyle kullanılırlar.
abstract class KrediBase {
    constructor() {


    }
    kaydet(): void { // bu işlem inherit edilen class'larda aynıdır
        console.log("Kaydedildi!");
    }

    abstract hesapla(): void; // fakat bu işlem inherit edilen class'larda aynı değildir. Ör: herkese aynı kredi hesaplama yöntemi uygulanmaz bu inherit edilen sınıflarda kendi içinde o class'a özel yazılır
}


class EmekliKredisi extends KrediBase {

    constructor() {
        super(); // -> abstract sınıflardan inherit edilen classlarda constructor içine MUTLAKA YAZILMALIDIR! bir nevi abstract class'tan inherit edildiğini göstermek için diyebiliriz.
    }
    hesapla(): void { // -> abstract sınıftan inherit edilen class'ta mutlaka abstract olan method/fonksiyon tanımlanmalıdır yeniden yazılmalıdır.
        console.log("Emekli Kredisine Göre Hesap Yapıldı!");
    }
}

class ÖğrenciKredisi extends KrediBase {
    constructor() {
        super();
    }
    hesapla(): void { // burada fark şudur -> yarın öbür gün başka bir şeye göre kredi hesaplamamız gerekse tekrar uğraşmadan bunu yapabiliriz yeni bir class oluşturur onun kredi tarifesini onun içine yazabiliriz.
        console.log("Öğrenci Kredisine Göre Hesaplandı!");
    }
    bursVer(): void {
        console.log("ÖğrenciKredisine özel burs verildi!"); // -> sadece inherit edilen class'a özel method/fonksiyonları da yazabiliriz
    }

}

// INTERFACES
interface Product {
    id: number;
    name: string;
    unitPrice: number;

}
interface CustomerManager { // bir interface tanımladık ve içine bir method yazdık
    save(): void;
}
class EmployeService implements CustomerManager{ // bir class'ı interface'den yararlandırmak için 'implements' keywordu kullanılır.
    save(): void { // aynı abstract class'lar gibi burda da o interface'e yazdığın methodları yazmak zorundasın.
        console.log("Employee kaydedildi!");
    }

}
function save(product: Product) { // fonksiyonda Product türünde bir parametre istedik
    console.log(`${product.name} kaydedildi!`);
}






let kişi = new Person("Enes", "Baysan", 19, 3500); // kişi oluşturduk(Person nesnesinden)
console.log(kişi.lastName);
kişi.faturaYatır();

let manager = new PersonManager("Yavuz", "Baysan", 39, 5000)
manager.borcVer(15);
manager.faturaYatır(); // Person class ile aynı proplar kullanılabilir çünkü ondan extend(kalıtım) yaptık

let hayvan = new Animal()
hayvan.type = "köpek" // set ettik
console.log(hayvan.type) // get ettik

let emekliKredisi = new EmekliKredisi();
emekliKredisi.hesapla(); // abstract sınıf sayesinde bu kadar rahat işlem yapabildik
let öğrenciKredisi = new ÖğrenciKredisi();
öğrenciKredisi.hesapla();
öğrenciKredisi.bursVer(); // ÖğrenciKredisi class'ına özel methodu çağırdık

save({ id: 1, name: "Ürün", unitPrice: 1500 }); // -> parametre olarak interface bir parametre isteyen fonksiyonlarda parametre içine istediği Tür'ün bütün proplarını vermeliyiz.

let employe = new EmployeService();
employe.save();