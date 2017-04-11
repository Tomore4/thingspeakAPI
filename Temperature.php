<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <div class="collapse navbar-collapse" id="sibesoin">
                <form class="form-inline">
                    <div class="form-group">
                        <div class="input-group">
                            <label>Afficher les relevés du :</label>
                            <input type="date" class="form-control" placeholder="entrer une date (AAAA-MM-JJ)" name="1date" id="1date">
                            <div class="alert alert-block alert-danger" style="display:none">
                                <h4>Erreur !</h4>
                                Vous devez entrer au moins 4 caractères !
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Afficher</label>
                            <input type="number" class="form-control" placeholder="X dernières valeurs" name="Nvaleurs" id="Nvaleurs">
                        </div>
                        <div class="input-group">
                            <label>Afficher les relevés selon période :</label>
                            <input type="date" class="form-control" placeholder="1ère date (AAAA-MM-JJ)" id="1periode1">
                            <input type="date" class="form-control" placeholder="2ème date (AAAA-MM-JJ)" id="1periode2">
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary pull-left" id="envoi">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</nav>

<div class="row">
    <article><h1>Tableau de relevés</h1>
        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8" id="Temperature"></div>
    </article>
</div>
<div class="row fin">
    <article><h1>Graphique de relevés</h1>
        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8" id="graphdiv20"></div>
    </article>
</div>
