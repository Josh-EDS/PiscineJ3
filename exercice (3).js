
function fillBus(peopleAtBusStops, busSeats) {
    let count = 0;
    for (var i = 0; i < peopleAtBusStops.length; i++) { 
        count += peopleAtBusStops[i];
        if (count > busSeats) return i }
    return -1 }


// console.log(fillBus([1, 3, 10, 1], 12))