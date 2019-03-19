//add items to to-do list
$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        let todoText = $(this).val();
        //clear input field after enter is pressed
        $(this).val("");
        // add new items to ul element
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
    }
})



// check off specific items by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on trash can icon to delete item

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//toggle input field with click of plus button
$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
});