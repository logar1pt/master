function sendXML() {
    var xmlHttp = new XMLHttpRequest;
    xmlHttp.onreadystatechange = function () {
        document.getElementById("itemSchool").innerHTML = xmlHttp.responseText;
    };
    xmlHttp.open("GET", "http://127.0.0.1:8080/master/php/RegPHP.php?id=" + str, true);
    xmlHttp.send();
}

var event = {
    title: "Конференция",
    date : "today"
};

var str = JSON.stringify(event);
console.log(">>" + str);