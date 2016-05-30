var xmlHttp = new XMLHttpRequest();
if (!xmlHttp) {
    alert('Error creating the XMLHttpRequest');
}

function request(str) {
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("LoginError").innerHTML = xmlHttp.responseText;
        }
    };
    xmlHttp.open("GET", "http://127.0.0.1:8080/master/php/RegPHP.php?q=" + str, true);
    xmlHttp.send();
}