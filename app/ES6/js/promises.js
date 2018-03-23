'use strict';

function doWork(inputA) {
    const TIME_INTERVAL = 5000;
    let promise = new Promise(

        (resolve, reject) => {
            setTimeout(() => {
                if (inputA <= 10) {
                    reject('Failed !');
                } else {
                    resolve(inputA);
                }
            }, TIME_INTERVAL)
        }
    );
    return promise;
}

function doHeavyWork(inputA) {
    const TIME_INTERVAL = 8000;
    let promise1 = new Promise(

        (resolve, reject) => {
            setTimeout(() => {
                resolve(20);
            }, TIME_INTERVAL)
        }
    );
    return promise1;
}

let doWorkPromise = doWork(100);
let doHeavyWorkPromise = doHeavyWork(200);

doWorkPromise.catch(function (error) {
    console.log('Do work promise is failed .... error details ..' + error);
});

doHeavyWorkPromise.catch(function (error) {
    console.log('Do Heavy Work promise is failed .... error details ..' + error);
});

Promise
    .all([doWorkPromise, doHeavyWorkPromise])
    .then(
        function (result) {
            console.log('Both Promises successfully completed !!' +
                JSON.stringify(result));
        },
        function (error) {
            console.log('a promise failed ..' + error);
        });
