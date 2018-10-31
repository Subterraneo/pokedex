$( document ).ready(function() {
 		
    var pokemon = "25";
    $.ajax("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/")
    .done(function (data){
        $("#pk_name").html(data.name);
        $("#pk_abilities").html(data.abilities[0].ability.name);
        $("#pk_types").html(data.types[0].type.name);
        $("#pk_weight").html(data.weight);
        document.querySelector(".pokemon-image").src = data.sprites.front_default;
        $("#pk_base_experience").html(data.base_experience);
        });

});

