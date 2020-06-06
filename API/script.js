$(document).ready(function() {

    $(".testsearch").click(function() {
        $(".leftpane").animate({
            width: '40%'
        }, 1500);
        $(".rightpane").animate({
            width: '55%'
        }, 1500);

      });

    $('.addnewrow img').click(function () {
        var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
        var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
        var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
        var newrowstr = '<tr>\n<td></td>\n<td></td>\n<td></td>\n<td>\n<img src="./Img/icons-1.0.0-alpha3/icons/pencil-square.svg" class="editbtn">\n<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">\n</td>\n</tr>';
        
        $('#sortable').append(newrowstr); 

    });

    $("#sortable").on("click", ".editbtn", function( event ) {
        event.preventDefault();
        var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
        var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
        var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
        var currentTD = $(this).parents('tr').find('td');
        
        if ($(this).attr("src") ==editsvg) {
            console.log(currentTD);
            $.each(currentTD, function () {
                $(this).prop('contenteditable', true)
            });
            $(this).attr("src",savesvg);
        } else {
            console.log(currentTD);
            $.each(currentTD, function () {
                $(this).prop('contenteditable', false)
            });
            $(this).attr("src",editsvg);
        };
    });

    $("#sortable").on("click", ".rmbtn", function( event ) {
        event.preventDefault();
        var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
        var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
        var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
        var currentTD = $(this).parents('tr').find('td');
        
        $(this).closest('tr').remove(); 
    });

    $('.simplesearchbtn').click(function() {
        event.preventDefault();
        var resnum = $( "#rescount" ).val();
        var ingnum = $( "#ingcount" ).val();
        console.log(ingnum);

        if ($('#sortable tr').length < ingnum) {
            ingnum = $('#sortable tr').length;
        }

        console.log(resnum);
        console.log(ingnum);

        var searchkeys = '';
        $("#sortable").find("tr").each(function() {
            searchkeys+=$(this).find("td:eq(0)").text() + ",";
        });
        console.log(searchkeys);
        console.log(nthIndex(searchkeys,",",ingnum));
        searchkeys=searchkeys.substring(0,nthIndex(searchkeys,",",ingnum));
        console.log(searchkeys.toLowerCase());

        var apikey = '&apiKey=""';
        var callurl = 'https://api.spoonacular.com/recipes/findByIngredients?number=' + resnum + '&ingredients=' + searchkeys + '&ranking=1&ignorePantry=FALSE&limitLicense=FALSE' + apikey;
        console.log(callurl);

        $.get(callurl, function(res) {
            console.log(res);
            console.log(res[0]['id']);
            console.log(res[0]['usedIngredientCount']);
            console.log(res[0]['usedIngredients'][0]['name']);
            var resultreturnnum = res.length; 
            var resultreturnnum2 = res[0].length; 
            
            var resultreturnnum4 = res[0]['usedIngredients'][0].length; 
            var resultreturnnum5 = res[0]['usedIngredients'][0]['name'];

            var resulttablestart = '<div class="table-responsive restable">\n<table class="table table-hover">\n<thead class="thead-dark">\n<tr>\n<th scope="col">RESULTS</th>\n<th scope="col"></th>\n</tr>\n</thead>\n<tbody>';
            var resulttablehtml = '<div class="table-responsive restable">\n<table class="table table-hover">\n<thead class="thead-dark">\n<tr>\n<th scope="col">RESULTS</th>\n<th scope="col"></th>\n</tr>\n</thead>\n<tbody id="resbody">';
            for (i=0;i<resultreturnnum;i++) {
                var recipeid = res[i]['id'];
                var recipettl = res[i]['title'];
                var recipeimg = res[i]['image'];

                var useding = '';
                var resultreturnnum3 = res[i]['usedIngredients'].length;
                for (j=0;j<resultreturnnum3;j++) {
                    useding+=res[i]['usedIngredients'][j]['name'] + ', ';
                    console.log(res[i]['usedIngredients'][j]['name']);
                }
                useding=useding.substring(0,useding.length-2);
                resulttablehtml+= '<tr>\n<td>\n<img src="' + recipeimg + '" alt="' + recipeid + '" class="resimg"></td>\n<td>\n<p class="resttl">\n<span class="resh6">' + recipettl + '</span>\n<span class="resicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/heart.svg" alt="" class="hearticon">\n<img src="./Img/icons-1.0.0-alpha3/icons/card-list.svg" alt="" class="listicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/info-square.svg" alt="" class="infoicon" data-toggle="modal" data-target="#infomodal" id="i' + recipeid + '">\n</span>\n</p>\n<p class="resdesc">Used Ingredients: ' + useding + '</p>\n</td>\n</tr>';
                
                
            }
            var resulttableend = '\n</tbody>\n</table>\n</div>';
            resulttablehtml+=resulttableend
            $(".rightpane").append(resulttablehtml);
        });

        $(".leftpane").animate({
            width: '40%'
        }, 1500);
        $(".rightpane").animate({
            width: '55%'
        }, 1500);
        
    });


    $(".resicon").on("click", ".hearticon",function( event ) {
        // event.preventDefault();
        console.log($(this).attr("src"));
        var emptyheart = './Img/icons-1.0.0-alpha3/icons/heart.svg';
        if ($(this).attr("src")==emptyheart) {
            $(this).attr("src","./Img/icons-1.0.0-alpha3/icons/heart-fill.svg");
        } else {
            $(this).attr("src",emptyheart);
        } 
    });

 

    

    $('.infoicons').click(function () {
        // event.preventDefault();
        var recipeid = $(this).attr('id');
        recipeid = recipeid.splice(1);
        console.log(recipeid);
        var infocallurl = 'https://api.spoonacular.com/recipes/' + recipeid + '/information?includeNutrition=true&apiKey=""'
        console.log(infocall);

        $.get(infocallurls, function(res) {
            var recipesum = res['summary'];
            var recipettl = res['title'];
            var recipeimg = res['image'];
            var recipeurl = res['sourceUrl'];
            var recipetime = res['readyInMinutes'];
            var recipedairy = res['dairyFree'];
            var recipegluten = res['glutenFree'];
            var recipeservings = res['servings'];
            var recipecalories = res['nutrition']['nutrients'][0]['amount'];

            var infocalltable = '<div class="modal-header">\n<h5 class="modal-title" id="exampleModalScrollableTitle">' + recipettl + '</h5>\n<button type="button" class="close" data-dismiss="modal" aria-label="Close">\n<span aria-hidden="true">&times;</span>\n</button>\n</div>\n<div class="modal-body resmodal">\n<img src=' + recipeimg + ' class="modalimg">\n<p class="ressum">' + recipesum + '</p>\n<ul>\n<li>Ready in Minutes: ' + recipetime + '</li>\n<li>Dairy Free: ' + recipedairy + '</li>\n<li>Gluten Free: ' + recipegluten + '</li>\n<li>Servings: ' + recipeservings + '</li>\n<li>Calories: ' + recipecalories + '</li>\n</ul>\n</div>\n<div class="modal-footer">\n<img src="./Img/icons-1.0.0-alpha3/icons/heart.svg" alt="" class="hearticon">\n<img src="./Img/icons-1.0.0-alpha3/icons/card-list.svg" alt="" class="listicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/arrow-bar-right.svg" alt="" class="exticon">\n</div>'
            
            $(".modal-content").html(infocalltable);
            $('#infomodal').modal('show');
                
        });
    }); 
   
    
});

