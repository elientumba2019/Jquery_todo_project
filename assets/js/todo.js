//check todoas by clicking
jQuery("ul").on("click" , 'li' , function () {
    $(this).toggleClass("completed");
});

//click on X  to delete todos
$("ul").on('click' , 'span' , function (event) {

    //remove entire element
    $(this).parent().fadeOut(500 , function (event) {
        $(this).remove();
    });

    event.stopPropagation();
});



//add listener to input field
$('input[type = "text"]').keypress(function (event) {
    if(event.which === 13){

        //add element to the todox
        var value = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + value + "</li>");

    }
});


$(".fa-plus").click(function () {
    $('input[type = "text"]').fadeToggle(500)
});