var cities = ["İstanbul", "Ankara", "İzmir"];
for (var i in cities) { // 1. kullanım -> 'in' ile index numarasına ulaşılır
    console.log(i);
}
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) { // 2. kullanım -> 'of' ile datadaki değere ulaşılır
    var i = cities_1[_i];
    console.log(i);
}
