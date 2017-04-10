
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <div class="collapse navbar-collapse" id="sibesoin">
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
                    <button class="btn btn-primary pull-left" id="envoi">Envoyer</button>
            </div>
        </div>
    </div>
</nav>



<div class="row General">
<div id="General"></div>


    <div class="space" id="graphe"></div>
<div id="dygraph"></div>
</div>

