
                <form class="form-inline">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <label><input id="Date" value="Date" name="click" type="radio">Afficher les relevés du :</label>
                                <input type="date" class="form-control" placeholder="entrer date (AAAA-MM-JJ)" id="1date">
                                <div class="alert alert-block alert-danger" style="display:none">
                                    <h4>Erreur !</h4>
                                    Vous devez entrer au moins 4 caractères !
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <label><input id="Xvaleurs" value="Xvaleurs" name="click" type="radio">Afficher</label>
                                <input type="number" class="form-control" placeholder="X dernières valeurs" id="Nvaleurs">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <label><input id="Periode" value="Periode" name="click" type="radio">Afficher les relevés selon période :</label>

                                <input type="date" class="form-control" placeholder="1ère date (AAAA-MM-JJ)" id="date1">
                                <input type="date" class="form-control" placeholder="2ème date (AAAA-MM-JJ)" id="date2">
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary pull-left col-lg-offset-5 col-lg-2 col-md-offset-5 col-md-2 col-sm-offset-5 col-sm-2 col-xs-offset-5 col-xs-2" id="envoiHum">Envoyer</button>
                </form>


<div class="row indication">
    <h1 class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8">Veuillez remplir un des champs du formulaire ci-dessus</h1>
</div>
<div class="Tableau row">
    <article><h1>Tableau de relevés</h1>
        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8" id="Humidite2"></div>
    </article>
</div>
<div class="Graphique row fin">
    <article><h1>Graphique de relevés</h1>
        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8" id="graphdiv35"></div>
    </article>
</div>