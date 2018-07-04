$(document).ready(function () {
    $('#continue').on('click submit', function () {
        if ($("#firstName").val() == "" || $("#lastName").val() == "") {
            $('.login-form .error').css('display', 'block');
        } else {
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            $("#intro").html("Hello, " + firstName + " " + lastName);
            $("#intro2").html("Everything is set up for you, " + firstName + " " + lastName);
            $(".login-page").fadeOut();
            $(".header-container").css({'width':'100vw',
            'height': '100vh',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'display': 'block'
            })
        }
    })
    $('#firstName,#lastName').on("keypress", function () {
        $('.login-form .error').css('display', 'none');
    })
})