var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_firstName, _lastName, _age, _salary) {
        this.firstName = _firstName; // constructor'ın aldığı parametreyi this yardımı ile oluşan nesnenin propertysine attık.
        this.lastName = _lastName;
        this.age = _age;
        this.salary = _salary;
    }
    Person.prototype.faturaYatır = function () {
        this.salary -= 150; // bu nesnenin salary property'si 150 azalsın
        console.log("Fatura yat\u0131r\u0131ld\u0131!\nKalan maa\u015F = " + this.salary); // this.salary 11. satırdaki salary property'sine işaret eder
    };
    return Person;
}());
//INHERITANCE
var PersonManager = /** @class */ (function (_super) {
    __extends(PersonManager, _super);
    function PersonManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonManager.prototype.borcVer = function (miktar) {
        this.salary -= miktar; // extend olduğu için Person class ile aynı proplara sahip, salary propu parametre olarak gelen miktar değişkeni kadar azalsın dedik
        console.log(miktar + " tl bor\u00E7 verildi\u011Fi i\u00E7in " + this.salary + " tl kadar maa\u015F\u0131m\u0131z kald\u0131!");
    };
    return PersonManager;
}(Person));
// GETTER & SETTER
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
// ABSTRACT CLASS -> tek başlarına bir anlam ifade etmezler(eksik class) ancak inheritance yöntemiyle kullanılırlar.
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi!");
    };
    return KrediBase;
}());
var EmekliKredisi = /** @class */ (function (_super) {
    __extends(EmekliKredisi, _super);
    function EmekliKredisi() {
        return _super.call(this) || this;
    }
    EmekliKredisi.prototype.hesapla = function () {
        console.log("Emekli Kredisine Göre Hesap Yapıldı!");
    };
    return EmekliKredisi;
}(KrediBase));
var ÖğrenciKredisi = /** @class */ (function (_super) {
    __extends(ÖğrenciKredisi, _super);
    function ÖğrenciKredisi() {
        return _super.call(this) || this;
    }
    ÖğrenciKredisi.prototype.hesapla = function () {
        console.log("Öğrenci Kredisine Göre Hesaplandı!");
    };
    ÖğrenciKredisi.prototype.bursVer = function () {
        console.log("ÖğrenciKredisine özel burs verildi!"); // -> sadece inherit edilen class'a özel method/fonksiyonları da yazabiliriz
    };
    return ÖğrenciKredisi;
}(KrediBase));
var EmployeService = /** @class */ (function () {
    function EmployeService() {
    }
    EmployeService.prototype.save = function () {
        console.log("Employee kaydedildi!");
    };
    return EmployeService;
}());
function save(product) {
    console.log(product.name + " kaydedildi!");
}
var kişi = new Person("Enes", "Baysan", 19, 3500); // kişi oluşturduk(Person nesnesinden)
console.log(kişi.lastName);
kişi.faturaYatır();
var manager = new PersonManager("Yavuz", "Baysan", 39, 5000);
manager.borcVer(15);
manager.faturaYatır(); // Person class ile aynı proplar kullanılabilir çünkü ondan extend(kalıtım) yaptık
var hayvan = new Animal();
hayvan.type = "köpek"; // set ettik
console.log(hayvan.type); // get ettik
var emekliKredisi = new EmekliKredisi();
emekliKredisi.hesapla(); // abstract sınıf sayesinde bu kadar rahat işlem yapabildik
var öğrenciKredisi = new ÖğrenciKredisi();
öğrenciKredisi.hesapla();
öğrenciKredisi.bursVer(); // ÖğrenciKredisi class'ına özel methodu çağırdık
save({ id: 1, name: "Ürün", unitPrice: 1500 }); // -> parametre olarak interface bir parametre isteyen fonksiyonlarda parametre içine istediği Tür'ün bütün proplarını vermeliyiz.
var employe = new EmployeService();
employe.save();
