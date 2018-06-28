var accountBalance = 1000;
$(document).ready(function () {
    // here you enter your salary and the window fades out
    $("#continue2").on("click", function () {
        // validation
        if ($('#salary').val() == "" || $('#salary').val().length < 2) {
            $('.header-container .error').css('display', 'block');
        } else {
            $('.header-container').animate({
                opacity: 0.05,
                padding: 0.05,
                left: "+=50",
                height: "toggle"
            }, 500)
            accountBalance = $('#salary').val();
            $('#balance').html(accountBalance + "BGN");
        }
    });

    $('#spended').on("click", function () {
        if ($('#spendedMoney').val() == '' && $('#spended-select').val() == "") {
            $('.spendings .error').html("Please enter a valid value and reason ")
                .css('display', 'block');
        } else if ($('#spended-select').val() == "") {
            $('.spendings .error').html("Please enter a valid reason ")
                .css('display', 'block');
        } else if ($('#spendedMoney').val() == '') {
            $('.spendings .error').html("Please enter a valid value ")
                .css('display', 'block');
        } else {
            var spendedMoney = $('#spendedMoney').val();
            $('#transactions_history')
            .append("<div>" + "You spend " + spendedMoney + 
            "BGN " + "for " + $('#spended-select').val()+ "</div>");
            accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            if(accountBalance <= 100){
                $('#modal').css('display', 'block');
            
            }
        }
    })
    $('#mothlySpendings-btn').on("click", function () {
        if ($('#mothlySpendingsVal').val() == '' && $('#monthly-select').val() == "") {
            $('.mothlySpendings .error').html("Please enter a valid value and reason ")
                .css('display', 'block');
        } else if ($('#monthly-select').val() == "") {
            $('.mothlySpendings .error').html("Please enter a valid reason ")
                .css('display', 'block');
        } else if ($('#mothlySpendingsVal').val() == '') {
            $('.mothlySpendings .error').html("Please enter a valid value ")
                .css('display', 'block');
        } else {
            var spendedMoney = $('#mothlySpendingsVal').val();
            $('#transactions_history')
            .append("<div>" + "You spend " + spendedMoney + 
            "BGN " + "for " + $('#monthly-select').val()+ "</div>");
            accountBalance = parseInt(accountBalance) - parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            if(accountBalance <= 100){
                $('#modal').css('display', 'block');
            
            }
        }
    })
    $('#income-btn').on("click", function () {
        if ($('#incomeVal').val() == '' && $('#income-select').val() == "") {
            $('.income .error').html("Please enter a valid value and reason ")
            .css('display', 'block');
        }else if ($('#income-select').val() == "") {
            $('.income .error').html("Please enter a valid reason ")
            .css('display', 'block');
        } else if ($('#incomeVal').val() == '') {
            $('.income .error').html("Please enter a valid value ")
            .css('display', 'block');
        }
        else {
            var spendedMoney = $('#incomeVal').val();
            $('#transactions_history')
            .append("<div>" + "You earned " + spendedMoney + 
            "BGN " + "from " + $('#income-select').val()+ "</div>");
            accountBalance = parseInt(accountBalance) + parseInt(spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            if(accountBalance <= 100){
                $('#modal').css('display', 'block');
            
            }
        }

       
            
    })
    //error message reset
    $('#mothlySpendingsVal').on("keypress", function () {
        $('.mothlySpendings .error').css('display', 'none');
    })
    $('#spendedMoney').on("keypress", function () {
        $('.spendings .error').css('display', 'none');
    })
    $('#incomeVal').on("keypress", function () {
        $('.income .error').css('display', 'none');
    })
    $('#salary').on("keypress", function () {
        $('.header-container .error').css('display', 'none');
    })

})