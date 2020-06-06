$(document).ready(function() {

    $(".testsearch").click(function() {
        $(".leftpane").animate({
            width: '40%'
        }, 1500);
        $(".rightpane").animate({
            width: '55%'
        }, 1500);

      });

    // $( function() {
    //     $( ".sortable" ).sortable();
    //     $( ".sortable" ).disableSelection();
    // } );

    // $('.editbtn').click(function () {
    //     var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
    //     var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
    //     var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
    //     var currentTD = $(this).parents('tr').find('td');
        
    //     console.log($(this).attr("src"));
    //     console.log(editsvg);
    //     console.log($(this).attr("src")==editsvg);
    //     if ($(this).attr("src") == editsvg) {
    //         console.log(currentTD);
    //         $.each(currentTD, function () {
    //             $(this).prop('contenteditable', true)
    //         });
    //         $(this).attr("src",savesvg);
    //     } else {
    //         console.log(currentTD);
    //         $.each(currentTD, function () {
    //             $(this).prop('contenteditable', false)
    //         });
    //         $(this).attr("src",editsvg);
    //     };   
    // });

    // $('.rmbtn').click(function () {
    //     var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
    //     var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
    //     var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
    //     var currentTD = $(this).parents('tr').find('td');
        
    //     $(this).closest('tr').remove();  
    // });

    $('.addnewrow img').click(function () {
        var editsvg = './Img/icons-1.0.0-alpha3/icons/pencil-square.svg';
        var rmsvg = '<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">';
        var savesvg = './Img/icons-1.0.0-alpha3/icons/check.svg';
        var newrowstr = '<tr>\n<td></td>\n<td></td>\n<td></td>\n<td>\n<img src="./Img/icons-1.0.0-alpha3/icons/pencil-square.svg" class="editbtn">\n<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">\n</td>\n</tr>';
        // var newrowstr = '<tr>\n<td contenteditable=true></td>\n<td contenteditable=true></td>\n<td contenteditable=true></td>\n<td>\n<img src="./Img/icons-1.0.0-alpha3/icons/check.svg" class="editbtn">\n<img src="./Img/icons-1.0.0-alpha3/icons/trash.svg" class="rmbtn">\n</td>\n</tr>';
        
        $('#sortable').append(newrowstr); 
        
        // var img = $('img');
        // $('#sortable tr td').eq(2).last().find('img') img').each(function() {
        //     alert($(this).attr('src'))
        // });       
        // $('#sortable tr td').img.attr('src') === 'data:image' ? img.addClass("img-responsive") : img.addClass("another-class");
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
        // searchkeys=searchkeys.substring(0,searchkeys.length-1);
        console.log(nthIndex(searchkeys,",",ingnum));
        searchkeys=searchkeys.substring(0,nthIndex(searchkeys,",",ingnum));
        console.log(searchkeys.toLowerCase());

        var apikey = '&apiKey=""';
        var callurl = 'https://api.spoonacular.com/recipes/findByIngredients?number=' + resnum + '&ingredients=' + searchkeys + '&ranking=1&ignorePantry=FALSE&limitLicense=FALSE' + apikey;
        console.log(callurl);

    
        
        // '<tr>\n<td>\n<img src="'
        // https://spoonacular.com/recipeImages/102259-312x231.jpg
        // '" alt="'
        // RECIPE ID
        // '" class="resimg"></td>\n<td>\n<p class="resttl">\n<span class="resh6">'
        // Yum Yum Avocado Salsa sdffh fgjkl 
        // '</span>\n<span class='resicon'>\n<img src="./Img/icons-1.0.0-alpha3/icons/heart.svg" alt="" class="hearticon">\n<img src="./Img/icons-1.0.0-alpha3/icons/card-list.svg" alt="" class="listicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/info-square-fill.svg" alt="" class="infoicon">\n</span>\n</p>\n<p class="resdesc">Used Ingredients: '
        // avocado
        // ', '
        // onion
        // ', '
        // tomato
        // '</p>\n</td>\n</tr>\n</tbody>\n</table>\n</div>'
        $.get(callurl, function(res) {
            // var resulttablehtml = [];
            console.log(res);
            console.log(res[0]['id']);
            console.log(res[0]['usedIngredientCount']);
            console.log(res[0]['usedIngredients'][0]['name']);
            var resultreturnnum = res.length; //array
            var resultreturnnum2 = res[0].length; // first object inside array
            
            var resultreturnnum4 = res[0]['usedIngredients'][0].length; // object
            var resultreturnnum5 = res[0]['usedIngredients'][0]['name'];

            var resulttablestart = '<div class="table-responsive restable">\n<table class="table table-hover">\n<thead class="thead-dark">\n<tr>\n<th scope="col">RESULTS</th>\n<th scope="col"></th>\n</tr>\n</thead>\n<tbody>';
            var resulttablehtml = '<div class="table-responsive restable">\n<table class="table table-hover">\n<thead class="thead-dark">\n<tr>\n<th scope="col">RESULTS</th>\n<th scope="col"></th>\n</tr>\n</thead>\n<tbody id="resbody">';
            // $(".rightpane").append(resulttablestart);
            for (i=0;i<resultreturnnum;i++) {
                var recipeid = res[i]['id'];
                var recipettl = res[i]['title'];
                var recipeimg = res[i]['image'];

                var useding = '';
                var resultreturnnum3 = res[i]['usedIngredients'].length; // array
                for (j=0;j<resultreturnnum3;j++) {
                    useding+=res[i]['usedIngredients'][j]['name'] + ', ';
                    console.log(res[i]['usedIngredients'][j]['name']);
                }
                useding=useding.substring(0,useding.length-2);
                resulttablehtml+= '<tr>\n<td>\n<img src="' + recipeimg + '" alt="' + recipeid + '" class="resimg"></td>\n<td>\n<p class="resttl">\n<span class="resh6">' + recipettl + '</span>\n<span class="resicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/heart.svg" alt="" class="hearticon">\n<img src="./Img/icons-1.0.0-alpha3/icons/card-list.svg" alt="" class="listicon">\n<img src="./Img/icons-1.0.0-alpha3/icons/info-square.svg" alt="" class="infoicon" data-toggle="modal" data-target="#infomodal" id="i' + recipeid + '">\n</span>\n</p>\n<p class="resdesc">Used Ingredients: ' + useding + '</p>\n</td>\n</tr>';
                
                // $(".rightpane").append(resulttablehtml[i]);
                
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

    // $('.advsearchbtn').click(function() {
    //     $.get('https://api.spoonacular.com/recipes/findByIngredients?number=5&ingredients=avocado,onion,tomato&ranking=1&ignorePantry=FALSE&limitLicense=FALSE&', function(res) {
    //         res.results[0]['id'];
    //         res.results[0]['usedIngredientCount'];
    //         res.results[0]['']
    //     });
    // });

    // $.get('https://api.spoonacular.com/recipes/findByIngredients/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=""', function(res){
    //             console.log(res);
    //             // $('#name').html(res.name);
    //             // $('#rightpane img').attr('src',res.sprites.front_shiny);
    //             // var types_str = '<ul>';
    //             // for(var i = 0; i < res.types.length; i++){
    //             //     types_str += '<li>'+res.types[i].type.name+'</li>';
    //             // }
    //             // types_str += '</ul>';
    //             // $('#info').html('<h2>Types</h2><p>'+types_str+'</p><h2>Height</h2><p>'+res.height+'</p><h2>Weight</h2><p>'+res.weight+'</p>')
    // });

    // function AddImages() {
            //     var imgurl = 'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';
            //     var output = '';
            //     for (var i=1;i<=24;i++) {
            //         output+="<p>\n<img src='http://" + imgurl + i + ".png' class='" + i + "'>\n</p>";
            //     }
            //     $("leftpane").html(output);
            //     console.log(output);
            // }   
            
            // AddImages();           
            // // document.getElementById("leftpane").innerHTML = output;
            
            // // your jquery codes here
            // // $('button').click(function() {
            // //     var btnid = $(this).attr("id");
            // //     var divid = $(this).parent().attr("id")
            // //     // console.log(btnid, divid);

            // //     if (btnid === "fadeOutbtn") {
            // //         $('#' + divid + ' h6').fadeOut();
            // //         // console.log("fade out");
            // //     } else if (btnid === "showbtn") {
            // //         $('#fadeOut h6').show();
            // //         // console.log("show");
            // //     } else {
            // //         // $('#' + divid + ' h6').append("<span>  ** " + $('img').attr('alt') + " **</span>");
            // //         // $('#' + divid + ' span').css("color",'rgb(75,0,130)');
            // //         // console.log("img attr");
            // //         var imgsrc = $('img').attr('src').slice(0,-5);
            // //         var imgnum = $('img').attr('src').slice(imgsrc.length,imgsrc.length+1);
            // //         // console.log(imgsrc, imgnum);
            // //         if (imgnum==1) imgnum = 2;
            // //         else imgnum = 1;
            // //         $('img').attr('src',imgsrc + imgnum + '.png');   
            // //     }
            // // });

            // // loop to go through each object
            // // check if the return object value is an array
            // // check if the array has objects
            // // use recursion to repeat (until no object or array is found -> extract value)
            // $("#leftpane img").click(function() {
            //     var imgid = $(this).attr('id');
            //     var imgsrc = $(this).attr('src');
            //     var CallValues = [
            //         // 'id',
            //         'name',
            //         // 'base_experience',
            //         // 'is_default',
            //         // 'order',
            //         // 'abilities',
            //         // 'forms',
            //         // 'game_indices',
            //         // 'held_items',
            //         // 'location_area_encounters',
            //         // 'moves',
            //         // 'sprites',
            //         // 'species',
            //         // 'stats',
            //         'types',
            //         'height',
            //         'weight'
            //     ];
            //     $.get("'https://pokeapi.co/api/v2/pokemon/" + imgid + "'", function(res) {
            //         // var keyname = object.keys(res)[0];
            //         var keyname = CallValues[0];
            //         var resoutput = "<h3>\n" + res[keyname] + "<img src='" + imgsrc + "'>\n";
            //         // name, image, types (in ul), height, weight    
            //         // for(var i = 1; i < object.keys(res).length; i++) {
            //         for (var i=1;i<CallValues.length;i++) {
            //             for (key in res) {
            //                 if (Object.keys(res) = CallValues[i]) {

            //                     if (Array.isArray(res[key])) {
                                    
            //                         if (typeof res[key] === 'object' && res[key] !== null) {
                                        
            //                         }
            //                     } else {
            //                         // use value and add to html
            //                     }
            //                 }
            //             }
            //         }
                
                
            //         for(var i = 0; i < res.types.length; i++) {
            //             console.log(res.types[i].type.name);
            //         }
            //     }, "json");

               

            //     function AddValues() {
            //         var output = '';
                    
            //         for (key in FuncNames) {
            //             output+="<div id='" + key + "'>\n<h1>" + key + "</h1>\n<button id='" + key + "btn'>" + key + "</button>\n<h6>" + FuncNames[key] + "</h6>\n</div>";
            //         }
            //         output+="\n<p>\n<img src='./DisappearingNinja1.png' alt='Disappearing Ninja'>\n</p>"
            //         document.getElementById("container").innerHTML = output;
            //         console.log(output);
            //     }   
        
            // });
    // $('.hearticon').click(function () {
    //     if ($(this).attr("src")=='./Img/icons-1.0.0-alpha3/icons/heart.svg') {
    //         $(this).attr("src","./Img/icons-1.0.0-alpha3/icons/heart-fill.svg");
    //     } else {
    //         $(this).attr("src","./Img/icons-1.0.0-alpha3/icons/heart.svg");
    //     }
    // });

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

    // $('#myModal').on('show.bs.modal', function (e) {
    //     if (!data) return e.preventDefault() // stops modal from being shown
    // });
    // $('#basicModal').on('shown.bs.modal', function (e) {
    //     alert('Modal is successfully shown!');
    //   });
    
    
});

