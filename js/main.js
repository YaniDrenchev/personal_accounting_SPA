var accountBalance = 1000;
var totalSpend = 0;
var monthlySpend = 0;
var earned = 0;
var addToSummarySpend = function(moneySpend, reason){
    totalSpend = totalSpend + parseInt(moneySpend);
    $('.spendings-section #totalMoneySpend').html( "" + totalSpend);
    var $itemToAppend = $('<h2>' + moneySpend + ' BGN ' + 'on ' + reason + '</h2>');
    $('.spendings-section .content').append($itemToAppend);
}
var addToSummaryMontly  = function(moneySpend, reason){
    monthlySpend = monthlySpend + parseInt(moneySpend);
    $('.monthly-section #totalMoneyMonthly').html(monthlySpend);
    var $itemToAppend = $('<h2>' + moneySpend + ' BGN ' + 'on ' + reason + '</h2>');
    $('.monthly-section .content').append($itemToAppend);
}
var addToSummaryIncome  = function(moneyEarned, reason){
    earned = earned + parseInt(moneyEarned);
    $('.income-section #totalMoneyIncome').html(earned);
    var $itemToAppend = $('<h2>' + moneyEarned + ' BGN ' + 'from ' + reason + '</h2>');
    $('.income-section .content').append($itemToAppend);
}
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
            var $spendedMoney = $('#spendedMoney').val();
            var $reason = $( "#spended-select option:selected" ).text();
            $('#transactions_history')
            .append("<div>" + "You spend " + $spendedMoney + 
            "BGN " + "for " + $reason + "</div>");
            accountBalance = parseInt(accountBalance) - parseInt($spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            if(accountBalance <= 100){
                $('.overlay').css({'visibility': 'visible',
                 'opacity': '1'});                 
                 $('.popup').css('display', 'block');         
                              
            }
            addToSummarySpend($spendedMoney, $reason); 
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
            var $spendedMoney = $('#mothlySpendingsVal').val();
            var $reason = $( "#monthly-select option:selected" ).text();
            $('#transactions_history')
            .append("<div>" + "You spend " + $spendedMoney + 
            "BGN " + "for " + $reason + "</div>");
            accountBalance = parseInt(accountBalance) - parseInt($spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            if(accountBalance <= 100){
                $('.overlay').css({'visibility': 'visible',
                 'opacity': '1'});
                 $('.popup').css('display', 'block');         
                           
            }
            addToSummaryMontly($spendedMoney, $reason);      
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
            var $reason = $( "#income-select option:selected" ).text();
            var $spendedMoney = $('#incomeVal').val();
            $('#transactions_history')
            .append("<div>" + "You earned " + $spendedMoney + 
            "BGN " + "from " + $reason + "</div>");
            accountBalance = parseInt(accountBalance) + parseInt($spendedMoney);
            $('#balance').html(accountBalance + "BGN");
            addToSummaryIncome($spendedMoney, $reason);
        }                  
       
    })
    $(".progress-bar").loading();	
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
    $('.close').on('click', function(){
        $('.overlay').css({'visibility': 'hidden',
                 'opacity': '0'});                         
        $('.popup').css('display', 'none');    
    })