function demo(callback) {
    let output = callback(10, 20);

    return (a, b) => output + a + b;
}

var res = demo((x, y) => x * y)(10, 10);

console.log(res);