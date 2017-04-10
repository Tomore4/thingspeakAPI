<?php

    session_start();

    // Seul l'intérieur de la page se charge, navbar et footer non chargés
    // Au démarrage, on charge accueil.php
    if (!isset($_SESSION['page'])) { $_SESSION['page'] = "accueil.php"; }
    if (isset( $_GET['page'] )) { $_SESSION['page'] = $_GET['page']; }
    $choix = substr ( $_SESSION['page'], 0, strpos ( $_SESSION['page'], "." ) ); // tri du nom de la page

    //On peut changer le style de la page
    if (!isset($_SESSION['list'])) { $_SESSION['list'] = "view/styleDTA.css"; }
    if (isset( $_GET ['list'] )) { $_SESSION['list'] = $_GET ['list']; }

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Node</title>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="tablesorter.css">
        <link rel="stylesheet" href="<?php echo $_SESSION['list'];?>">
        <script src="dygraph-combined.js"></script>
        <link rel="stylesheet" src="//cdnjs.cloudflare.com/ajax/libs/dygraph/2.0.0/dygraph.min.css" />
        <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
        <script src="lib/jquery.tablesorter.js"></script>
        <script src="main.js"></script>
    </head>

    <body>
          <div id="main-body">
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="lib/dta.jpeg"><img src="lib/DTA_small.png" alt="logo" title="Logo DTA"/>Thingspeak - <?php echo ($choix);?></a>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" name="button">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="menu">
                            <ul class="nav navbar-nav">
                                <li ><a href="thingspeak.php?page=accueil.php">Accueil</a></li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" >Relevés<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="thingspeak.php?page=General.php">Les 10 derniers</a></li>
                                        <li><a href="thingspeak.php?page=Temperature.php">Température</a></li>
                                        <li><a href="thingspeak.php?page=Humidite.php">Humidité</a></li>
                                    </ul>
                                </li>
                                <li><a href="thingspeak.php?page=references.php">References</a></li>
                            </ul>
                            <form method="get" action="thingspeak.php" name="mon formulaire" class="form-inline Formstyle">
                                <select name="list">
                                    <option value="view/styleDTA.css" <?php if ($_SESSION['list']=="view/styleDTA.css"){ echo "selected";}?>>style dta</option>
                                    <option value="view/styleBoot.css" <?php if ($_SESSION['list']=="view/styleBoot.css"){ echo "selected";}?>>style boot</option>
                                </select>
                                <input type="submit" value="Appliquer" id="boutonmenu"/>
                            </form>
                        </div>
                    </div>
                </nav>
          </div>


          <div class="interieur">
              <?php
                    // On va charger uniquement l'intérieur de la page en fonction
                    // du lien choisi dans la barre de navigation
                    include ($_SESSION['page']);
              ?>
          </div>

          <footer>
              <nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
                  <div class="container">
                      <div class="navbar-header navbar-brand">
                          <p class="footer">© 2017 - Design Tech Academie. All right reserved (nan j'déconn' ;-) )</p>
                      </div>
                    </div>
              </nav>
          </footer>
      <!-- <footer class="footer2">
        <nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
        <div class="footer-bottom">
          <div class="container">
              <div class="pull-left">© 2017 - Design Tech Academie. All right reserved (nan j'déconn' ;-) )</div>
          </div>
        </div>
      </nav>
      </footer> -->
    </body>
</html>
