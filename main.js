jQuery(document).ready(function ($) {

    /* Fonction permettant de modifier
        l'écriture de la date
        qui s'affiche dans le tableau
    */
    function lissage(str){
        //var index=str.indexOf("T");
        str=str.replace("T"," à ");  // remplace le T contenu dans le jsonp par un à
        str=str.replace(":"," h "); // remplace le : contenu dans le jsonp par un h
        var res=str.substring(0, 20);  // on garde 20 valeurs du tableau en partant de 0 supprime les autres valeurs
        return res;
    }


    /* Fonction permettant de modifier
     l'écriture de la date
     qui sert pour la construction du graphe
     */
    function lissage2(str){
        str=str.replace("T"," ");  // remplace le T contenu dans le jsonp par un à espace
        var res=str.substring(0, 19);  // on garde 19 valeurs du tableau en partant de 0 supprime les autres valeurs
        return res;
    }


    //Cette fonction permet d'afficher les dernieres valeurs reçues: date+hum+temp
    // Cela va s'afficher dans accueil.php
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
        var date = data['date'];
        date=lissage(date);
        $("#temp").append(temp+"°C");  // dans la div dont l'id=temp on ajoute le contenu de la donnée temperature
        $("#humi").append(humi+"%");  // dans la div dont l'id=humi on ajoute le contenu de la donnée humidite
        $("#dernier").append(date);  // dans la div dont l'id=dernier on ajoute le contenu de la donnée humidite
    });


    //Cette fonction permet d'afficher les 10 dernieres valeurs reçues: date+hum+temp
    // Cela va s'afficher dans general.php dans la div dont l'id est General
    $.ajax({
        url: "http://164.132.194.235:8080/valeurs/10", // la routte
        //method: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
    }).done(function(data){
        //Construction du tableau
        $('#General').append("<table class='table table-condensed table-hover table-bordered table-striped'></table>");
        //L'en tete
        ligne = "<thead><tr>";
        ligne += "<th>Date</th>";
        ligne += "<th>Température</th>";
        ligne += "<th>Humidité</th>";
        ligne += "</tr></thead>";

        $('#General table').append(ligne);
        $('#General table').append("<tbody>");

        //Le corps du tableau
        // soit les 10 dernières valeurs :
        for(var i=0;i<10;i++){
            var date = data['date'][i];
            var Temp = data['humidite'][i];
            var Hum = data['temperature'][i];
            date=lissage(date);
            ligne = "<tr>";
            ligne += "<td>"+date+"</td>";
            ligne += "<td>"+Temp+"</td>";
            ligne += "<td>"+Hum+"</td>";
            ligne += "</tr>";
            $('#General table').append(ligne);
        }
        $('#General table').append("</tbody>");
        $('table').tablesorter();

        // construction des données à passer au graphique
        var chaine = "";
        for (var i = 0; i < 10; i++) {
            var date = data['date'][i];
            var hum2=data['humidite'][i];
            var temp2=data['temperature'][i];
            date=lissage2(date);
            chaine += date + "," + hum2 + "," + temp2 + "\n";
        }
        // Construction du graphique :
        // Cela va s'afficher dans general.php dans la div dont l'id est graphdiv10
        g = new Dygraph(document.getElementById("graphdiv10"),
            chaine,
            {
                title: 'Température et Humidité',
                labels: ["Date", "Température (°C)", "Humidité (%)"],
                labelsDivStyles: {'textAlign': 'right'},
                labelsDivWidth: 180,
                labelsSeparateLines: true,

                legend: 'always',
                ylabel: 'Température(°C) - Humidité(%)',
                showRoller: false,
                showRangeSelector: true,
                height: 400
            });
    });


    //Cette fonction permet d'afficher les valeurs de temperatures
    // Cela va s'afficher dans Temperature.php dans la div dont l'id est Temperature
    $.ajax({
        url: "http://164.132.194.235:8080/valeur/temperature",
        //method: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
    }).done(function(data){
        console.log(data);
        console.log(data['results'][0][['temperature']]);
        //Construction du tableau :
        $('#Temperature').append("<table class='table table-hover table-bordered table-striped'></table>");
        //L'en tête :
        ligne = "<thead><tr>";
        ligne += "<th>Date</th>";
        ligne += "<th>Température</th>";
        ligne += "</tr></thead>";

        $('#Temperature table').append(ligne);
        $('#Temperature table').append("<tbody>");

        //Le corps du tableau :
        for(var i=0;i<data['results'].length;i++){
            var date = data['results'][i][['date']];
            var Temp = data['results'][i][['temperature']];
            date=lissage(date);
            ligne = "<tr>";
            ligne += "<td>"+date+"</td>";
            ligne += "<td>"+Temp+"</td>";
            ligne += "</tr>";
            $('#Temperature table').append(ligne);
        }
        $('#Temperature table').append("</tbody>");
        $('table').tablesorter();


        // construction des données à passer au graphique
        var chaine = "";
        for (var i = 0; i < data['results'].length; i++) {
            var date = data['results'][i][['date']];
            var temp2= data['results'][i][['temperature']];
            date=lissage2(date);
            chaine += date + "," + temp2 + "\n";
        }

        // Construction du graphique :
        // Cela va s'afficher dans temperature.php dans la div dont l'id est graphdiv20
        g2 = new Dygraph(document.getElementById("graphdiv20"),
            chaine,
            {
                title: 'Température',
                labels: ["Date", "Température (°C)"],
                labelsDivStyles: {'textAlign': 'right'},
                labelsDivWidth: 180,
                labelsSeparateLines: true,

                legend: 'always',
                ylabel: 'Température(°C)',
                showRoller: false,
                showRangeSelector: true,
                height: 400
            });

    });


    //Cette fonction permet d'afficher les valeurs d'humidite
    // Cela va s'afficher dans Humidite.php dans la div dont l'id est Humidite
    $.ajax({
        url: "http://164.132.194.235:8080/valeur/humidite",
        //method: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
    }).done(function(data){
        console.log(data);
        console.log(data['results'][0][['humidite']]);
        //Construction du tableau:
        $('#Humidite').append("<table class='table table-condensed table-hover table-bordered table-striped'></table>");
        //L'en tête:
        ligne = "<thead><tr>";
        ligne += "<th>Date</th>";
        ligne += "<th>Humidite</th>";
        ligne += "</tr></thead>";

        $('#Humidite table').append(ligne);
        $('#Humidite table').append("<tbody>");
        // Le corps du tableau:
        for(var i=0;i<data['results'].length;i++){
            var date = data['results'][i][['date']];
            var Hum = data['results'][i][['humidite']];
            date=lissage(date);
            ligne = "<tr>";
            ligne += "<td>"+date+"</td>";
            ligne += "<td>"+Hum+"</td>";
            ligne += "</tr>";
            $('#Humidite table').append(ligne);
        }
        $('#Humidite table').append("</tbody>");
        $('table').tablesorter();

        // construction des données à passer au graphique
        var chaine = "";
        for (var i = 0; i < data['results'].length; i++) {
            var date = data['results'][i][['date']];
            var hum2= data['results'][i][['humidite']];
            date=lissage2(date);
            chaine += date + "," + hum2 + "\n";
        }

        // Construction du graphique :
        // Cela va s'afficher dans Humidite.php dans la div dont l'id est graphdiv30
            g3 = new Dygraph(document.getElementById("graphdiv30"),
            chaine,
            {
                title: 'Humidité',
                labels: ["Date", "Humidité (%)"],
                labelsDivStyles: {'textAlign': 'right'},
                labelsDivWidth: 180,
                labelsSeparateLines: true,

                legend: 'always',
                ylabel: 'Humidité(%)',
                showRoller: false,
                showRangeSelector: true,
                height: 400
            });

    });

    /*

    //$("#envoi").click(function(){
        alert("cdddd");
        var modif = $("input[name=Nvaleurs]").val();
        alert(modif);
        var url="http://164.132.194.235:8080/valeur/temperature/"+modif;
        alert(url);
        $.ajax({
            url: url,
            //method: 'GET',
            crossDomain: true,
            dataType: 'jsonp'
            //beforeSend: setHeader

        }).done(function(data) {
            console.log("coucoucoucocucocucoucocu"+data);
            alert("marche?");
        });

    //});

    */
});
