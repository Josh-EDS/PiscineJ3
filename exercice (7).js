let country = [];
let cities = []
let housings = [];
let characteristics = [];

function createCity(country,city) { cities.push(city) }
function createHousing(country,city,house) { housings.push(house) }
function addCharacteristics (country,city,house,...chars) { characteristics.push(...chars), country.push([cities[0], [housings[0], characteristics]]); }
function getCharacteristicsOfHousing( country , city , house) { if ( country[0][0] == city && country[0][1][0] == house ) return(country[0][1][1]) }


createCity ( country , " Nantes ") ;
createHousing ( country , " Nantes " , " Apartment1 ") ;
addCharacteristics ( country , " Nantes ", " Apartment1 " , "100 m2 " , "2 bathrooms " , " Red paint " , "14 rue Arthur III ") ;

console.log(getCharacteristicsOfHousing(country," Nantes "," Apartment1 "));
console.log(country);

// Ne donne pas le meme resultat sur la console VSCode et Fiddle. /!\