let name = 'Sachin';
let id = 007;
let address = 'Bidar';
let keys = [12, 23, 34, 56, 78];

// Enhanced way of creating objecs dynamically
// Dynamically properties can be added , on the fly
let obj = {
    id,
    name,
    address,
    keys,
    format() {
        return this.id + ', ' + this.name + ', ' + this.address
    },
    [getName()]: 4000
};

function getName() {
    return 'ABC' + getNumber();
}
function getNumber() {
    return 10;
}

console.log(obj.format());
console.log(obj.ABC10);