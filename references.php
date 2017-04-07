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