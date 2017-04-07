jQuery(document).ready(function ($) {
    //$.ajax({
    //    methode: "get",
    //    url: "https://164.132.194.235:8080/valeur/temperature",
    //    dataType: "json"
    //}).done(function(data) {

    $.ajax({
        url: "http://164.132.194.235:8080/valeur",
        //method: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
        //beforeSend: setHeader
    }).done(function(data){
        console.log(data);
        var temp = data['temperature'];
        var humi = data['humidite'];
        $("#temp").append(temp+"°C");
        $("#humi").append(humi+"%");
    });

        /*$('#humidite').append("<table class='table-hover table-bordered table-striped'></table>");
        "<caption>Liste des relevés de température</caption>";
        ligne = "<thead><tr>";
        ligne += "<th class=\"danger\">Temérature</th>";
        ligne += "<th class=\"danger\">Humidité</th>";
        ligne += "</tr></thead>";
        $('#humidite table').append(ligne);
        $('#humidite table').append("<tbody>");

        for (i = 0; i < data.length; i++) {
            parrain = data[i];
            ligne = "<tr>";
            ligne += "<td>" + temp + "</td>";
            ligne += "<td>" + humi  + "</td>";
            ligne += "</tr>";
            $('#humidite table').append(ligne);



        }


        $('#humidite table').append("</tbody>");
        $('table').tablesorter();

        $('#humidite').append("<hr>");

        for (var key in compteur) {
            var value = compteur[key];
            $('#humidite').append(key + " = " + value + "<br>");
        }





    });   */
});
