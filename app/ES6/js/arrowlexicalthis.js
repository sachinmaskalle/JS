'use strict';

var obj = {
    id: 123,
    name: 'Sachin',
    address: 'Bangalore',
    display: () => this.name + ', ' + this.id + ', ' + this.address
};

console.log('Calling : ' + obj.display());
