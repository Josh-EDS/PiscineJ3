

const Apartments = new Map([
    ["Apartment 75008", 90],
    ["Apartment 94300", 105],
    ["Apartment 92300", 140],
    ["Apartment 75015", 65],
    ]);
    
function getHousesPrototype() { return Apartments }

console.log(getHousesPrototype())