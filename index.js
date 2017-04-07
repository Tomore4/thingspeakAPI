// Using requirejs
// require(['/var/www/html/api/node_modules/chart.js/dist/Chart.js'], function(Chart){
//  var myChart = new Chart({...});
// });

// // Using CommonJS
// var Chart = require('chart.js');
// var myChart = new Chart({...});

// import Chart from 'chart.js';
// let myChart = new Chart({...});

// var ctx = document.getElementById("myChart");
// var ctx = document.getElementById("myChart").getContext("2d");
// var ctx = $("#myChart");
// var ctx = "myChart";

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Orange","Orange","Orange","Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 50, 3, 5, 2, 3,3,3,3,3,3],
            backgroundColor: [
                'rgba(255, 200, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,200,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// var ctx = $("#myChart").get(0).getContext("2d");
//
// var data = {
// labels : ["January","February","March","April","May","June","July"],
// datasets : [
// {
// fillColor : "rgba(220,220,220,0.5)",
// strokeColor : "rgba(220,220,220,1)",
// pointColor : "rgba(220,220,220,1)",
// pointStrokeColor : "#fff",
// data : [65,59,90,81,56,55,40]
// },
// {
// fillColor : "rgba(151,187,205,0.5)",
// strokeColor : "rgba(151,187,205,1)",
// pointColor : "rgba(151,187,205,1)",
//
// pointStrokeColor : "#fff",
//
// data : [28,48,40,19,96,27,100]
//
// }
//
// ]
//
// }

// var myNewChart = new Chart(ctx).Line(data,options);

//var url= "http://164.132.194.235:8080/valeur";  //url
//requête GET

// $.ajax({
//     url: "http://164.132.194.235:8080/valeur",
//     //method: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp'
//     //beforeSend: setHeader
// }).done(function(data){
//   console.log(data);
//   var temp = data['temperature'];
//   var humi = data['humidite'];
//   $("#demo").append(temp+"<br>"+humi);
// });

// $.ajax({
//     url: "http://164.132.194.235:8080/valeur/humidite",
//     //method: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp'
//     //beforeSend: setHeader
// }).done(function(data){
//   console.log(data);
//   console.log(data['results'][0][['humidite']]);
//   var tab="<table><tr><td>Humidité</td>";
//   for(var i=0;i<10;i++){
//     tab += "<td>"+data['results'][i][['humidite']]+"</td>";
//   }
//   tab +="</tr></table>";
//   $("#humi").append(tab);
// });



$.ajax({
    url: "http://localhost:8080/date/2017-03-10/2017-03-30",
    //method: 'GET',
    crossDomain: true,
    dataType: 'jsonp'
    //beforeSend: setHeader
}).done(function(data){
  console.log(data);
  console.log(data['temperature'].length);
  console.log(data['temperature'][0]);
  var tab="<table><tr><td>Humidité</td>";
  // for(var i=0;i<10;i++){
  //   tab += "<td>"+data['results'][i][['humidite']]+"</td>";
  // }

  $("#humi").append(tab);
});
