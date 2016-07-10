var $j = jQuery.noConflict();
var population = {};
var buildings = {};
var global = 1-0;
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
	for (var inp in buildings) {
		console.log('buildings['+inp+']>>'+buildings[inp]);
	}
	setAllPeople();
	for (var inp in population) {
		console.log('population['+inp+']>>'+population[inp]);
	}
}
function setAllPeople() {
	return {
		maxPeople : setMaxPeople(),
		healthPeople : setHealthPeople(),
		sickPeople : setSickPeople()
	}
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
function setAllBuildings () {
	return {
		allBuilding : setAllBuilding(),
		operBuilding : setOperBuldings(),
		pBuilding : setPBuildings()
	}
	function setAllBuilding () {
		$j('#allBuildings').val(buildings["allBuildings"]);
	}
	function setOperBuldings () {
		$j('#operBuildings').val(buildings["operBuildings"]);
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
function addOperBuild () {
	buildings["operBuildings"]++;
	$j('#queueItem').append('<tr><td>'+ (global++) +'</td><td>Операционная</td><td><div id=/"progressBar/"></td></tr>')
	$j('#progressBar').progressbar({value: 75});
	setAllBuildings();
}
function addPBuild () {
	buildings["pBuildings"]++;
	$j('#queueItem').append('<tr><td>'+ (global++) +'</td><td>Палата</td></tr>')
	setAllBuildings();
}
function actionButton () {
	console.log('>>Start actionButton');
}
function clearQueue () {
	$j('#queueItem').empty();
	global = 1;
}