var accountBalance;
$(document).ready(function () {
    $("#continue2").on("click", function () {
        $('.header-container').animate({
            opacity: 0.05,
            padding: 0.05,
            left: "+=50",
            height: "toggle"
        }, 500)
        accountBalance = $('#salary').val();
        $('#balance').html(accountBalance + "BGN");
    });

    $('#spended').on("click", function () {
        if ($('#spendedMoney').val() == '') {
            $('.spendings .error').css('display', '');
        } else {
            var spendedMoney = $('#spendedMoney').val();
            $('#transactions_history').append("<div> - " + spendedMoney + "</div>");
            accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
        }
    })
    $('#mothlySpendings-btn').on("click", function () {
        if ($('#spendedMoney').val() == '') {
            $('.spendings .error').css('display', '');
        } else {
            var spendedMoney = $('#mothlySpendingsVal').val();
            $('#transactions_history').append("<div> - " + spendedMoney + "</div>");
            accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
        }
    })
    $('#income-btn').on("click", function () {
        if ($('#spendedMoney').val() == '') {
            $('.spendings #error').css('display', '');
        } else {
            var spendedMoney = $('#incomeVal').val();
            $('#transactions_history').append("<div> + " + spendedMoney + "</div>");
            accountBalance = parseInt(accountBalance) + parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
        }
    })
})