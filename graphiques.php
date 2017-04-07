
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <div class="collapse navbar-collapse" id="sibesoin">
                <form class="form-inline">
                    <div class="form-group">
                        <div class="input-group">
                            <label>Afficher les relevés du :</label>
                            <input type="date" class="form-control" placeholder="entrer une date (AAAA-MM-JJ)" id="1date">
                            <div class="alert alert-block alert-danger" style="display:none">
                                <h4>Erreur !</h4>
                                Vous devez entrer au moins 4 caractères !
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Afficher</label>
                            <input type="number" class="form-control" placeholder="X dernières valeurs" id="Nvaleurs">
                        </div>
                        <div class="input-group">
                            <label>Afficher les relevés selon période :</label>
                            <input type="date" class="form-control" placeholder="1ère date (AAAA-MM-JJ)" id="1periode1">
                            <input type="date" class="form-control" placeholder="2ème date (AAAA-MM-JJ)" id="1periode2">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-left">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</nav>



    <section>
        <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <article>
                    <table class="table table-hover table-bordered table-striped"> <!-- classe table-striped pour griser les lignes impaires  -->
                    <caption>Liste des relevés de température</caption>
                        <thead>
                            <tr>
                                <th class="danger">Date</th>
                                <th class="danger">Température</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="success">
                                <td>date</td>
                                <td>Température</td>
                            </tr>
                            <tr class="warning">
                                <td>date</td>
                                <td>Température</td>
                            </tr>
                            <tr class="info">
                                <td>date</td>
                                <td>Température</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </div>
            <div class="col-lg-offset-2 col-lg-5 col-md-offset-2 col-md-6 col-sm-offset-2 col-sm-6 col-xs-offset-2 col-xs-6">
                <aside class="graph">
                    <p>graph temp</p>
                </aside>
            </div>

        </div>

        <div class="row sauts"></div>

        <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <article>
                    <table class="table table-hover table-bordered">
                    <caption>Liste des relevés d'humidité</caption>
                        <thead>
                            <tr>
                                <th class="danger">Date</th>
                                <th class="danger">Humidité</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="success">
                                <td>date</td>
                                <td>Humidité</td>
                            </tr>
                            <tr class="warning">
                                <td>date</td>
                                <td>Humidité</td>
                            </tr>
                            <tr class="info">
                                <td>date</td>
                                <td>Humidité</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </div>
            <div class="col-lg-offset-2 col-lg-5 col-md-offset-2 col-md-6 col-sm-offset-2 col-sm-6 col-xs-offset-2 col-xs-6">
                <aside class="graph"
                    <p>graph hum</p>
                </aside>
            </div>

        </div>
    </section>

  </body>



<script src="https://code.jquery.com/jquery-3.2.1.js"></script>

<script>

    $(function(){

        $("form").on("submit", function() {

            if($("input").val().length < 4) {

                $("div.form-group").addClass("has-error");

                $("div.alert").show();

                return false;

            }

        });

    });

</script>
</html>
