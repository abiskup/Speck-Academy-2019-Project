var halls = [];
var hall1 = {
    id:1,
    name: 'DvoranaGlavna',
    reservation : {
    isReserved:true,
    reservedFrom:new Date (2019,06,27),
    reservedUntil:new Date (2019,06,29),
    }
}

var hall2 = {
   id:2,
   name: 'DvoranaSporedna',
   reservation : {
   isReserved:true,
   reservedFrom:new Date (2019,06,17),
   reservedUntil:new Date (2019,06,23),
   }
   }

var hall3 = {
    id:3,
    name: 'DvoranaSkolska',
    reservation : {
    isReserved: false,
    reservedFrom:null,
    reservedUntil:null,
    }
}

var hall4 = {
    id:4,
    name: 'DvoranaMala',
    reservation : {
    isReserved: false,
    reservedFrom:null,
    reservedUntil:null,
    }
}

var hall5 = {
    id:5,
    name: 'DvoranaMala',
    reservation : {
    isReserved:false,
    reservedFrom:null,
    reservedUntil:null,
    }
}
halls.push(hall1, hall2, hall3, hall4, hall5);
module.exports =halls;
