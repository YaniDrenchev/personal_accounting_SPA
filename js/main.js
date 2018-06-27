var accountBalance;
$(document).ready(function () {

    $("#continue").on("click", function () {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        $(".login-page").fadeOut();
        $("#intro").html("Hello, " + firstName + " " + lastName);
        $("#intro2").html("Everything is set up for you, " + firstName + " " + lastName);
    })
    $("#continue2").on("click", function () {
        $('.header-container').animate({
            opacity: 0.05,
            padding: 0.05,
            left: "+=50",
            height: "toggle"
        }, 500)
        accountBalance = $('#salary').val();
        $('#balance').html(accountBalance + "lv");
    });

    $('#spended').on("click", function () {
        if ($('#spendedMoney').val() == '') {
            $('.spendings .error').css('display', '');
        } else {
            var spendedMoney = $('#spendedMoney').val();
            $('#transactions_history').append("<div> - " + spendedMoney + "</div>");
            accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
            $('#balance').html(accountBalance + "lv");
        }
    })
    $('#mothlySpendings-btn').on("click", function () {

        var spendedMoney = $('#mothlySpendingsVal').val();
        $('#transactions_history').append("<div> - " + spendedMoney + "</div>");
        accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
        $('#balance').html(accountBalance + "lv");
    })
    $('#income-btn').on("click", function () {

        var spendedMoney = $('#incomeVal').val();
        $('#transactions_history').append("<div> + " + spendedMoney + "</div>");
        accountBalance = parseInt(accountBalance) + parseInt(spendedMoney);
        $('#balance').html(accountBalance + "lv");
    })
})