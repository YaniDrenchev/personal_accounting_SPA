$(document).ready(function () {    
    $('#continue').on('click', function () {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        $("#intro").html("Hello, " + firstName + " " + lastName);
        $("#intro2").html("Everything is set up for you, " + firstName + " " + lastName);
        $(".login-page").fadeOut();        
    })
})