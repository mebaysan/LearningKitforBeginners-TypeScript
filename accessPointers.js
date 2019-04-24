/*
private   -> sadece tanımlandığı blok içerisinde kullanılabilir
protected -> private için olan geçerli her şey burda da geçerli aynı zamanda EXTENDS yaptığı class için de geçerli demek
public    -> her yerden kullanılabilir
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var kişi = new Person(); // kişi. dediğimizde lastName gelmez çünkü private tanımladık
kişi.firstName = "Enes";
console.log(kişi.firstName);
