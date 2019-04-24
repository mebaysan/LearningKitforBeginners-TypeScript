let cities : string[] = ["İstanbul", "Ankara", "İzmir"];

for (let i in cities) { // 1. kullanım -> 'in' ile index numarasına ulaşılır
    console.log(i);
}

for (let i of cities) { // 2. kullanım -> 'of' ile datadaki değere ulaşılır
    console.log(i);
}