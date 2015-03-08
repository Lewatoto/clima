navigator.geolocation.getCurrentPosition(function(position) {
    var obj;
    var enlace = "http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
    alert(enlace);
    $.getJSON(enlace, function (datos){ //obtiene los datos y los guarda en la variable datos
        alert(datos.name);
    });

});
