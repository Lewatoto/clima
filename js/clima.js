navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var enlace = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=7&APPID=d17f9da8c5afba9cfe7f4f1c63b24a71";
    alert(enlace);
    $.getJSON(enlace, function (datos) { //obtiene los datos y los guarda en la variable datos
        var temp = datos.list[0].temp.day - 273.15; //temperatura actual
        alert(datos.city.name);
        $("#ciudad").append(datos.city.name);
        $("#temperatura").append(temp.toFixed(2)+"°C");
    });

});
