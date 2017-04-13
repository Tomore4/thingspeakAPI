// //L'application requiert l'utilisation du module Express.
// //La variable express nous permettra d'utiliser les fonctionnalités du module Express.
// var express = require('express');
// // Nous définissons ici les paramètres du serveur.
// var hostname = '164.132.194.235';
// var port = 8080;
// var querystring = require('querystring');
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'HJKLM4785',
//   database : 'meteo'
// });
// /////////CONNEXION BDD///////
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });
//
// // Nous créons un objet de type Express.
// var app = express();
//
// //Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
// //C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes.
// var myRouter = express.Router();
//
// ////////Heure du jour/////
// var offset = -8;
// var date=new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
// var time=date[17]+date[18];
//
// // Je vous rappelle notre route (/piscines).
// myRouter.route('/donnee')
// // J'implémente les méthodes GET, PUT, UPDATE et DELETE
// // GET
// .get(function(req,res){
//   var firstResult;
//   ////requête//////
//   var selectQuery = 'SELECT * FROM donnee WHERE heure='+time;
//   connection.query(
//     selectQuery,
//     function select(error, results, fields) {
//       if (error) { //verification aucune erreur
//         console.log(error);
//         //connection.end();
//         return;
//       }
//       if ( results.length > 0 )  {
//         firstResult = results[ 0 ];
//          console.log('heure: ' + firstResult['heure']);
//          console.log('humidite: ' + firstResult['humidite']);
//          console.log('temperature: ' + firstResult['temperature']);
//          res.jsonp({temperature : firstResult['temperature'], humidite : firstResult['humidite']});
//        } else {
//          console.log("Pas de données");
//        }
//        //connection.end();
//      }
//    );
//    //console.log(firstResult['temperature']);
// 	  //res.jsonp({message : "La temperature est de :" , methode : req.method});
// })
// //POST
// .post(function(req,res){
//       res.jsonp({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
// })
// //PUT
// .put(function(req,res){
//       res.jsonp({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
// })
// //DELETE
// .delete(function(req,res){
// res.jsonp({message : "Suppression d'une piscine dans la liste", methode : req.method});
// });
//
// myRouter.route('/')
// // all permet de prendre en charge toutes les méthodes.
// .all(function(req,res){
//       res.jsonp({message : "Bienvenue sur notre API Météo ", methode : req.method});
// });
//
// // Nous demandons à l'application d'utiliser notre routeur
// app.use(myRouter);
//
// // Genere une page 404
// app.use(function(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(404, 'Page introuvable !');
// });
//
// // Démarrer le serveur
// app.listen(port, hostname, function(){
// 	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
// });


//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.
var express = require('express');
// Nous définissons ici les paramètres du serveur.
var hostname = '164.132.194.235';
var port = 8080;
var querystring = require('querystring');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'HJKLM4785',
  database : 'meteo'
});
/////////CONNEXION BDD///////
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Nous créons un objet de type Express.
var app = express();

// Pour récupérer du jsonp dans le body
app.use(bodyParser.json());

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes.
var myRouter = express.Router();

////////Heure du jour/////
var offset = -8;
var date=new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
var time=date[17]+date[18];

// Je vous rappelle notre route (/piscines).
myRouter.route('/donnee')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
.get(function(req,res){
  var firstResult;
  ////requête//////
  var selectQuery = 'SELECT * FROM donnee WHERE heure='+time;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        firstResult = results[ 0 ];
         console.log('heure: ' + firstResult['heure']);
         console.log('humidite: ' + firstResult['humidite']);
         console.log('temperature: ' + firstResult['temperature']);
         res.jsonp({temperature : firstResult['temperature'], humidite : firstResult['humidite']});
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
       //connection.end();
     }
   );
   //console.log(firstResult['temperature']);
	  //res.jsonp({message : "La temperature est de :" , methode : req.method});
})
//POST
.post(function(req,res){

  var firstResult;
  ////requête//////
  var selectQuery = 'INSERT INTO post values(null,20,25,null)';
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      else {
        res.jsonp({message : "Vos données ont bien été ajoutées", methode : req.method});
        //connection.end();
      }
   });
      //res.jsonp({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
})
//PUT
.put(function(req,res){
      res.jsonp({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
})
//DELETE
.delete(function(req,res){
res.jsonp({message : "Suppression d'une piscine dans la liste", methode : req.method});
});

app.post('/valeur', function(req, res) {
    console.log(req.body);      // your JSON
    var temp = req.body['value1'];
    var humi = req.body['value2'];
    console.log("la température : "+temp);
    console.log("l\'humidite : "+humi);

    var firstResult;
    ////requête//////
    var selectQuery = 'INSERT INTO post values(null,'+temp+','+humi+',null)';
    connection.query(
      selectQuery,
      function select(error, results, fields) {
        if (error) { //verification aucune erreur
          console.log(error);
          connection.end();
          return;
        }
        else {
          res.jsonp({message : "Vos données ont bien été ajoutées", methode : req.method});
          console.log("succes post");
          //connection.end();
          }
     });
});

app.get('/valeur', function(req, res) {

  var firstResult;
  ////requête//////
  var selectQuery = 'SELECT * FROM post WHERE id =(SELECT max(id) FROM post)';
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        firstResult = results[ 0 ];
         console.log('humidite: ' + firstResult['humidite']);
         console.log('temperature: ' + firstResult['temperature']);
         res.jsonp({temperature : firstResult['temperature'], humidite : firstResult['humidite'],date : firstResult['date']});
         console.log("succes get");
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
       //connection.end();
     }
   );
});

app.get('/valeur/temperature', function(req, res) {
  ////requête//////
  var selectQuery = 'SELECT temperature,date FROM ( SELECT * FROM post ORDER BY id DESC LIMIT 10 ) x ORDER BY id ASC' ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var temp=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          temp.push(results[i]['temperature']);
          date.push(results[i]['date']);
        }
        res.jsonp({temperature : temp, date: date});
        console.log("succes get");
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
     }
   );
});

app.get('/valeur/humidite', function(req, res) {
  ////requête//////
  var selectQuery = 'SELECT humidite,date FROM ( SELECT * FROM post ORDER BY id DESC LIMIT 10 ) x ORDER BY id ASC' ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var humi=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          humi.push(results[i]['humidite']);
          date.push(results[i]['date']);
        }
        res.jsonp({humidite : humi, date: date});
        console.log("succes get");
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
     }
   );
});

app.get('/valeur/temperature/:nb', function(req, res) {
  var nb = req.params.nb;
  ////requête//////
  var selectQuery = 'SELECT temperature,date FROM ( SELECT * FROM post ORDER BY id DESC LIMIT '+nb+' ) x ORDER BY id ASC' ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        //connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var temp=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          temp.push(results[i]['temperature']);
          date.push(results[i]['date']);
        }
        res.jsonp({temperature : temp, date: date});
        console.log("succes get");
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
     }
   );
});

app.get('/valeur/humidite/:nb', function(req, res) {
  var nb = req.params.nb;
  ////requête//////
  var selectQuery = 'SELECT humidite,date FROM ( SELECT * FROM post ORDER BY id DESC LIMIT '+nb+' ) x ORDER BY id ASC' ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var humi=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          humi.push(results[i]['humidite']);
          date.push(results[i]['date']);
        }
        res.jsonp({humidite : humi, date: date});
        console.log("succes get");
       } else {
         res.jsonp({message:"Pas de données"});
         console.log("Pas de données");
       }
     }
   );
});

app.get('/valeurs/:nb', function(req, res) {
  var nb = req.params.nb;
  ////requête//////
  var selectQuery = 'SELECT humidite,temperature,date FROM ( SELECT * FROM post ORDER BY id DESC LIMIT '+nb+' ) x ORDER BY id ASC' ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur  //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var temp=[];
        var humi=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          temp.push(results[i]['temperature']);
          humi.push(results[i]['humidite']);
          date.push(results[i]['date']);
        }
        res.jsonp({temperature : temp, humidite : humi, date: date});
        console.log("succes get");
      } else {
        console.log("Pas de données");
      }
     }
   );
});

app.get('/date/:date', function(req, res) {
  var date = req.params.date;
  var jour=date.substring(8, 10);
date=date.substring(0,8);
jour=parseInt(jour);
var jour1=jour-1;
var jour2=jour+1;
var date1=date+jour1;
var date2=date+jour2;
  var firstResult;
  ////requête//////
  var selectQuery = "SELECT * FROM post WHERE date BETWEEN '"+date1+"' AND '"+date2+"' " ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) {
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        var temp=[];
        var humi=[];
        var date=[];
        for(var i=0;i<results.length;i++){
          temp.push(results[i]['temperature']);
          humi.push(results[i]['humidite']);
          date.push(results[i]['date']);
        }
        res.jsonp({temperature : temp, humidite : humi, date : date});
        console.log("succes get");
       } else {
         console.log("Pas de données");
       }
     }
   );
});

app.get('/date/:date_debut/:date_fin', function(req, res) {
  var debut = req.params.date_debut;
  var fin = req.params.date_fin;
  console.log(req.params.date_debut);
  console.log(req.params.date_fin);
  var firstResult;
  ////requête//////
  var selectQuery = "SELECT * FROM post WHERE date BETWEEN '"+debut+"' AND '"+fin+"' " ;
  connection.query(
    selectQuery,
    function select(error, results, fields) {
      if (error) { //verification aucune erreur
        console.log(error);
        connection.end();
        return;
      }
      if ( results.length > 0 )  {
        //firstResult = results[ 0 ];
         //console.log('humidite: ' + firstResult['humidite']);
         //console.log('temperature: ' + firstResult['temperature']);
         var temp=[];
         var humi=[];
         var date=[];
         for(var i=0;i<results.length;i++){
           temp.push(results[i]['temperature']);
           humi.push(results[i]['humidite']);
           date.push(results[i]['date']);
         }
         res.jsonp({temperature : temp, humidite : humi, date : date});
         console.log("succes get");
       } else {
         console.log("Pas de données");
       }
     }
   );
});


myRouter.route('/')
// all permet de prendre en charge toutes les méthodes.
.all(function(req,res){
      res.jsonp({message : "Bienvenue sur notre API Météo ", methode : req.method});
});

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
