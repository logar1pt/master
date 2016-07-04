var $j = jQuery.noConflict();
var startVirus = function () {
    setTimeout(changePeople, 3000);
}
var changePeople = function () {
    var addPeople = $j('#maxPeople').val();
    $j('#maxPeople').val(addPeople*1.1);
}