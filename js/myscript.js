$(function(){
    $('#pages').turn({
        when:{
            turning: function(e,page,view){
                const book = $(this),
                pages=book.turn("pages");
                 if (page >= 2) $("#pages .p2").addClass("fixed");
                else $("#pages .p2").removeClass("fixed");

                if (page < book.turn("pages"))
                    $("#pages .p6").addClass("fixed");
                else $("#pages .p6").removeClass("fixed");

            }
        }
    });
});