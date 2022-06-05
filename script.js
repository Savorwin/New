"use strict"

import $ from "jquery";

$(document).ready(function() {
    
    /* const btn = $('#btn'); // функция по получению элемента
    console.log(btn); */

    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

  /*   $('.list-item:eq(2)').on('click', function() {
        $('image:even').fadeToggle('slow');
    }); */

    $('.list-item:eq(4)').on('click', function() {
        $('image:odd').animate({
            opacity: "toggle",
            height: "toggle"
        });
    });

});

