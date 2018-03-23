function Customer(id, name, address, credit, status) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
}
Customer.prototype.format = function (seperator, upperCaseFlag) {

    var DEFAULT_SEPERATOR = ', ';
    var message = '';
    seperator = seperator || DEFAULT_SEPERATOR;

    for (var property in this) {
        if (typeof this[property] !== 'function') {
            message += this[property] + seperator;
        }
    }

    if (upperCaseFlag) {
        message = message.toUpperCase();
    }
    return message;
};

var customer = new Customer(12, 'Nithin', 'Bangalore', 2300, true);
console.log(customer.format());

// Call, apply functions

var obj = {
    id: 007,
    name: 'Brad',
    address: 'Dunedin',
    credit: 230000,
    status: false
};

console.log('Formatted Output = ' + Customer.prototype.format.call(obj, ':', false));               // Faster
console.log('Formatted Output (Apply) = ' + Customer.prototype.format.apply(obj, ['^', true]));       // Flexible

obj.__proto__ = new Customer();

console.log(obj instanceof Customer);