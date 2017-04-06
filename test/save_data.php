<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>save data php</title>
<link rel="stylesheet" href="" />
</head>
<body>
      <?php				// data est transmis par le NodeMCU
						$donnees = $_GET ['data'] . "\n";
						echo ("Données transmises : " . $donnees);
						
						$date_gd = date ( 'd-m-Y_H:i.s' );
						echo ("<br />" . $date_gd);
						
						
						if ($donnees == "") {
							echo "<br />pas de données";
						} else {
							require ('Fichier.php');
							$donnees_gd = $date_gd . ";" . $donnees;	// concaténation des données
							$nom = "data";								// nom générique du fichier
							$fichier = new Fichier ( "", $nom, ".csv" );		// création de l'instance
							
							$fichier->ecrire ( $donnees_gd );					// écriture
							
							echo ("<br />Données du fichier : "); 				// lecture d'un fichier
							$tableau = $fichier->lire_array ();
							foreach ( $tableau as $value ) {
								echo ($value . "<br />");
							}
							
							// header("Location: index.php?page=$nom_fichier");
						}
						?>
   </body>
</html>
