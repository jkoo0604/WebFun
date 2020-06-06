function sort_date() {
    var table = $('#tableforsort');
    var tbody =$('#sortable');

    tbody.find('tr').sort(function(a, b) {
        if($('#date_order').val()=='asc') {
            if (Date.parse($(a).children('td').eq(2).last().text()) < Date.parse($(b).children('td').eq(2).last().text())) {
                return -1;
            };
            if (Date.parse($(a).children('td').eq(2).last().text()) > Date.parse($(b).children('td').eq(2).last().text())) {
                return 1;
            };
            return 0;
        }
        else {
            if (Date.parse($(b).children('td').eq(2).last().text()) < Date.parse($(a).children('td').eq(2).last().text())) {
                return -1;
            };
            if (Date.parse($(b).children('td').eq(2).last().text()) > Date.parse($(a).children('td').eq(2).last().text())) {
                return 1;
            };
            return 0;
        }
            
    }).appendTo(tbody);
    
    var sort_order=$('#date_order').val();
    if(sort_order=="asc") {
        document.getElementById("date_order").value="desc";
    }
    if(sort_order=="desc") {
        document.getElementById("date_order").value="asc";
    }
}


function nthIndex(str, pat, n){
    var L= str.length, i= -1;
    while(n-- && i++<L){
        i= str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}