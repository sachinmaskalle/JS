function generateRandom(minVal = 1, maxVal = 1000) {
    let randomNum = Math.floor(Math.random() * (maxVal - minVal) + minVal);

    return randomNum;
}

function calculate(inputA = generateRandom(), inputB = generateRandom(100)) {
    console.log(inputA + ', ' + inputB);
}

calculate();
calculate(10, 20);
calculate(500);