$(function(){
    const url = 'https://www.codepile.net/raw/odNvjOdO.js';
    $.getJSON(url).done(function(data){
        console.log(data);
        $.each(data, function(i, item){
            let name = item.name;
            let link = $('<a>').attr("class", item.)
            let price = item.price;
            let price_td = $('<td>').append(price);
            let tr1 = $('<tr>').html("").append(name_td, price_td);
            tr1.appendTo("#courses");
        });
    }).fail(function(){
        console.log("Requisição falhou");
    }).always(function(){
        console.log('Requisição Ok')
    })
})