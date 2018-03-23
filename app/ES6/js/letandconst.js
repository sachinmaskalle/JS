function doWork() {
    console.log('Work started ...');

    var a = 10;
    let b = 30;             // let uses block scope as well 
    const PI = 3.24;

    for (var i = 0; i < a; i++) {
        let c = 100;
        console.log('Value of i is = ' + i);
    }
    //PI = true;
    console.log("B :" + b);
    console.log("C :" + c);
    console.log("PI :" + PI);
}

doWork();