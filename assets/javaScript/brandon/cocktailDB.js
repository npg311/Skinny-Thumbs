$(document).ready(function () {
//var drinkSearch= document.getElementById("search").value;
var drinkSearch="mojito";
$.getJSON(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch,
        function (data) {
            console.log(data.drinks.length);

        //length to array
        // [i] to [0]
            //for (i = 0; i < data.drinks.length; i++) {
                var icon = data.drinks[0].strDrinkThumb;
                var name = data.drinks[0].strDrink;
                var instructions = data.drinks[0].strInstructions;
                var glassType = data.drinks[0].strGlass;
                /*
                var Ingredient1 = data.drinks[i].strIngredient1 + " " + data.drinks[i].strMeasure1;
                var Ingredient2 = data.drinks[i].strIngredient2 + " " + data.drinks[i].strMeasure2;
                var Ingredient3 = data.drinks[i].strIngredient3 + " " + data.drinks[i].strMeasure3;
                var Ingredient4 = data.drinks[i].strIngredient4 + " " + data.drinks[i].strMeasure4;
                var Ingredient5 = data.drinks[i].strIngredient5 + " " + data.drinks[i].strMeasure5;
                var Ingredient6 = data.drinks[i].strIngredient6 + " " + data.drinks[i].strMeasure6;
                var Ingredient7 = data.drinks[i].strIngredient7 + " " + data.drinks[i].strMeasure7;
                */
                var ingredients = [];
                for(var j = 1; j <= 15; j++) {
                    if(data.drinks[0]["strIngredient" + j] === "") break;
                    ingredients.push(data.drinks[0]["strIngredient" + j] + " " + data.drinks[0]["strMeasure" + j]);
                }
                console.log(ingredients);

/*
            var display = "<div class='drink-container'>"+
            "<img src "+ icon + ">"+
            "<p>"+name+"</p>"+
            "<h1>INGREDIENTS</h1>" +
            "<div>" + Ingredient1 + "</div>" +
            "<div>" + Ingredient2 + "</div>" +
            "<div>" + Ingredient3 + "</div>" +
            "<div>" + Ingredient4 + "</div>" +
            "<div>" + Ingredient5 + "</div>" +
            "<div>" + Ingredient6 + "</div>" +
            "<div>" + Ingredient7 + "</div>" +
            "<h3>Glass Type</h3>"
            "<div>" + glassType + "</div>" +
            "<h3>Instructions</h3>"
            "<div>" + instructions + "</div> </div>";
*/
                console.log(data);
                
                $("#icon").attr("src", icon);
                $("#name").text("" + name);

                ingredients.forEach(function(ingredient){
                    var li = $("<li>")
                    li.text(ingredient)
                    $("#Ingredients").append(li);

                });
                
                //(ingredients[j]).append("#Ingredients");
                /*
                $("#Ingredient1").text(Ingredient1);
                $("#Ingredient2").text(Ingredient2);
                $("#Ingredient3").text(Ingredient3);
                $("#Ingredient4").text(Ingredient4);
                $("#Ingredient5").text(Ingredient5);
                $("#Ingredient6").text(Ingredient6);
                $("#Ingredient7").text(Ingredient7);
                */
                $("#glassType").text(glassType);
                $("#instructions").text(instructions);
                
                

                
            //}

            //$("#display").append(display);





        }
    );

});