function Customer(id, name, address, credit, status) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
}

function InternetCustomer(id, name, address, credit, status, blogUrl) {
    Customer.apply(this, arguments);
    this.blogUrl = blogUrl;
}

Customer.prototype.formatMessage = function (seperator, upperCaseFlag) {

    var message = '';
    var DEFAULT_SEPERATOR = ', ';
    seperator = seperator || DEFAULT_SEPERATOR;

    for (var prop in this) {

        if (typeof this[prop] !== 'function') {
            message += this[prop] + seperator;
        }

        if (upperCaseFlag) {
            message = message.toUpperCase();
        }
    }
    return message;
};

InternetCustomer.prototype = new Customer();                // Establish Inheritance
InternetCustomer.prototype.constructor = InternetCustomer;  
// Change the constructor of prototype of derived const function to derived constructor function
// This step is important , which otherwise gives gives wrong meta information , when queried

var internetCustomer = new InternetCustomer(007, 'James', 'UK', 45000, true, 'http://james.orkut.com/james');

console.log(internetCustomer instanceof Customer);
console.log(internetCustomer instanceof InternetCustomer);
console.log(internetCustomer.formatMessage(':', false));
console.log(InternetCustomer.prototype.constructor);
