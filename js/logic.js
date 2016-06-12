var building = {
    "Medic": {Name : "Medic", count : 1, Health : 100}
};

var showSomething = function () {
    for (var inp in building) {
        for (var inp1 in building[inp]) {
            console.log('building['+inp+'][' + inp1 + ']=' + building[inp][inp1]);
        }
    }
}

var addBuilding = function () {
    building["House"] = {Name : "House", count : 1, Health : 199};
}

var today = new Date();
var yes = new Date();
yes.setDate(10);
console.log(today);
console.log(yes);
console.log((today - yes)/(1000*60*60*24));