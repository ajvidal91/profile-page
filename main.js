$(function(){
    $("#heart").on("click", function(){
        $("#heart").toggleClass("fas")
            $("#heart").css("color", "#dd002c");
    })

    $("#up").on("click", function(){
        $("#up").toggleClass("fas")
            $("#up").css("color", "#1c00bc")
    })

    $("#down").on("click", function(){
        $("#down").toggleClass("fas")
            $("#down").css("color", "#5b147a")
    })


})
