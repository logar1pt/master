﻿var $j = jQuery.noConflict();
var population = {};
var buildings = {};
function init() {
	population["maxPeople"] = getMaxPeople();
	population["healthPeople"] = getHealthPeople();
	population["sickPeople"] = getSickPeople();
	buildings["allBuildings"] = getAllBuildings();
	buildings["operBuildings"] = getOperBuildings();
	buildings["pBuildings"] = getPBuildings();
}
function getMaxPeople () {
	return $j('#maxPeople').val();
}
function getHealthPeople () {
	return $j('#healthPeople').val();
}
function getSickPeople () {
	return $j('#sickPeople').val();
}
function getAllBuildings () {
	return $j('#allBuildings').val();
}
function getOperBuildings () {
	return $j('#operBuildings').val();
}
function getPBuildings () {
	return $j('#pBuildings').val();
}
function check () {
	init();
	for (var inp in population) {
		console.log('population['+inp+']>>'+population[inp]);
	}
	setAllPeople();
	for (var inp in population) {
		console.log('population['+inp+']>>'+population[inp]);
	}
}
function setAllPeople() {
	function setMaxPeople () {
		$j('#maxPeople').val(population["maxPeople"]);
	}
	function setHealthPeople () {
		$j('#healthPeople').val(population["healthPeople"]);
	}
	function setSickPeople () {
		$j('#sickPeople').val(population["sickPeople"]);
	}
}
function setAllBuilding () {
	function setAllBuilding () {
		$j('#allBuildings').val(buildings["allBuildings"]);
	}
	function setOperBuldings () {
		$j('#operBuilding').val(building["operBuildings"]);
	}
	function setPBuildings () {
		$j('#pBuildings').val(buildings["pBuildings"]);
	}
}
function changeMaxPeople (znach) {
	population["maxPeople"] = znach;
}
function changeHealthPeople (znach) {
	population["healthPeople"] = znach;
}
function changeSickPeople (znach) {
	population["sickPeople"] = znach;
}
function startVirus () {
	
}
