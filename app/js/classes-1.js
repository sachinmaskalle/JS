function Customer(id, name, address, credit, status) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;

    this.format = function () {
        var message = '';

        for (var prop in this) {
            if (typeof this[prop] !== 'function') {
                message += this[prop] + ', ';
            }
        }
        return message;
    }
}

var customer = new Customer(12, 'Sachin', 'Bangalore', 2300, true);
var customer1 = Customer(12, 'Sachin', 'Bangalore', 2300, true);

console.log(customer1);
//console.log(customer1);

console.log(customer.format());