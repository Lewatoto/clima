var dias = new Array('Dom','Lun','Mar','Mie','Jue','Vie','Sab');
var fecha = new Date();

navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var enlace = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=7&APPID=d17f9da8c5afba9cfe7f4f1c63b24a71&lang=sp";
    //alert(enlace);
    $.getJSON(enlace, function (datos) { //obtiene los datos y los guarda en la variable datos
        // ==============================================================
        // =                  Datos día actual                          =
        // ==============================================================
        
        // Ingresando los datos a las variables
        var temp_a = datos.list[0].temp.day - 273.15; //temperatura actual
        var temp_min = datos.list[0].temp.min - 273.15; //temperatura minima del dia
        var temp_max = datos.list[0].temp.max - 273.15; //temperatura maxima del dia
        var cond = datos.list[0].weather[0].main; //descripción del estado lluvia, soleado, etc.
        var cond_d = datos.list[0].weather[0].description; //descripción del estado mas detallado "el cielo está despejado".
        var icon_d = datos.list[0].weather[0].icon; //indica que icono usar.
        //alert(datos.city.name);
        
        // Mostrando los datos en la aplicación
        $("#ciudad").append(datos.city.name);
        $("#temp_a").append(temp_a.toFixed(2)+"°C");
        $("#temp_min").append(temp_min.toFixed(2)+"°C");
        $("#temp_max").append(temp_max.toFixed(2)+"°C");
        $("#descripcion").append(cond + ", " + cond_d);
        var cambio = './img/svg/' + icon_d + '.svg';
        //alert(cambio);
        $('#hoy_i').attr('src',cambio);
        
        // ==============================================================
        // =                      Datos día 1                           =
        // ==============================================================
        
        // ingresando los datos en variables
        var temp_min_1 = datos.list[1].temp.min - 273.15; //temperatura minima del dia 1
        var temp_max_1 = datos.list[1].temp.max - 273.15; //temperatura maxima del dia 1
        var icon_d_1 = datos.list[1].weather[0].icon; //indica que icono usar.día 1
        var cambio_1 = './img/svg/' + icon_d_1 + '.svg';
        
        // Mostrando los datos
        $("#min_1").append(temp_min_1.toFixed(2)+"°C");
        $("#max_1").append(temp_max_1.toFixed(2)+"°C");
        $("#dia_1_i").attr("src",cambio_1);
        $("#dia_1n").append(dias[fecha.getDay()+1]);
        
        // ==============================================================
        // =                      Datos día 2                           =
        // ==============================================================
        
        // ingresando los datos en variables
        var temp_min_2 = datos.list[2].temp.min - 273.15; //temperatura minima del dia 2
        var temp_max_2 = datos.list[2].temp.max - 273.15; //temperatura maxima del dia 2
        var icon_d_2 = datos.list[2].weather[0].icon; //indica que icono usar.día 2
        var cambio_2 = './img/svg/' + icon_d_2 + '.svg';
        
        // Mostrando los datos
        $("#min_2").append(temp_min_2.toFixed(2)+"°C");
        $("#max_2").append(temp_max_2.toFixed(2)+"°C");
        $("#dia_2_i").attr("src",cambio_2);
        $("#dia_2n").append(dias[fecha.getDay()+2]);
        
        //cambiar el color de fondo
        
        $('body').css({"background-color": "#0b2b42"},
                      {"background": "@include filter-gradient(#0b2b42, #467ea3, vertical)"},
                      {"background": "@include background-image(linear-gradient(top, #0b2b42 0%, #467ea3 100%))"}
                     );
    });

}, geo_options);

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};



alert


//iconos del clima
//https://github.com/erikflowers/weather-icons
//http://merlinthered.deviantart.com/art/plain-weather-icons-157162192
//https://github.com/jgillich/brackets-rpm