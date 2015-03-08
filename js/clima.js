
    var obj;
    var enlace = "http://api.openweathermap.org/data/2.5/weather?q=Guatemala,gt";
    $.getJSON(enlace, function (datos){ //obtiene los datos y los guarda en la variable datos
        alert(datos.sys.country);
    });
