//console.time() demo
console.log("Time some processes...");
console.time('100-elements-iteration');
for (var i = 0; i < 100; i++) { }
console.timeEnd('100-elements-iteration');
console.time('multiply-two-numbers-five-times');
for (var i = 0; i < 5; i++) {
    console.log(i * (i + 1));
}
console.timeEnd('multiply-two-numbers-five-times');
