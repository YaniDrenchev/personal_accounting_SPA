$(document).ready(function () {
    $('#continue').on('click', function () {
        if ($("#firstName").val() == "" || $("#lastName").val() == "") {
            $('.login-form .error').css('display', 'block');
        } else {
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            $("#intro").html("Hello, " + firstName + " " + lastName);
            $("#intro2").html("Everything is set up for you, " + firstName + " " + lastName);
            $(".login-page").fadeOut();
        }
    })
    $('#firstName,#lastName').on("keypress", function () {
        $('.login-form .error').css('display', 'none');
    })
})