function Calculate() {
    var parameters = arguments;
    var res = 0;

    return function () {
        return parameters[res++];
    }

}

var cal = new Calculate(10, 20, 30, 10);

console.log("OBJ " + cal());
