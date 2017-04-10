<?php
/**
 * Created by PhpStorm.
 * User: morel
 * Date: 05/04/17
 * Time: 14:47
 */


    ?>


<div class="col-lg-4">

    <form class="form-inline well">

        <div class="form-group">

            <label class="sr-only" for="text">Saisie</label>

            <input id="text" type="text" class="form-control" placeholder="Texte ici">

        </div>

        <button type="submit" class="btn btn-primary pull-right">Envoyer</button>

        <div class="alert alert-block alert-danger" style="display:none">

            <h4>Erreur !</h4>

            Vous devez entrer au moins 4 caractères !

        </div>

    </form>

</div>



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
</section>




<script src="https://code.jquery.com/jquery-3.2.1.js"></script>

<script>

    $(function(){
        $("form").on("submit", function(){
            if($("input").val().length>4){
                $("div.form-group").addClass("has-error");
                $("div.alert").show();
            }
        });
    });

</script>