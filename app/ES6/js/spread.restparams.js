function calculate(inputA, inputB, inputC, inputD, ...remainingArgs) {
    console.log(inputA + ', ' + inputB + ', ' + inputC + ', ' + inputD);
    console.log(remainingArgs);
}

var values = [10, 20, 30, 40, 50, 60, 80, 70];
calculate(...values);