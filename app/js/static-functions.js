// Functions directly attached to constructor functons are Static functions
// Prototype methods are instance methods
function Customer(id, name, address, credit, status) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
}
Customer.createInstance = function (csvData) {
    var paresdCsvData = csvData.split(',');

    console.log("Parsed Data :==> " + paresdCsvData);

    return new Customer(paresdCsvData[0],
        paresdCsvData[1],
        paresdCsvData[2],
        paresdCsvData[3]);
};

var customer = Customer.createInstance('10,Sachin,bangalore,2300,true');

console.log(customer instanceof Customer);
console.log(customer.id + ' , ' + customer.name);
