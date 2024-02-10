$(document).ready(function () {
    $("#btnCalculateTotal").click(function () {
        var hours = $("#txtFrom").val();

        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return false; // Prevent form submission
        }

        // Retrieve hourly rate from the input
        var hourlyRate = parseFloat($("#txtHourlyRate").val());

        if (isNaN(hourlyRate) || hourlyRate <= 0) {
            alert("Invalid hourly rate. Please check the input.");
            return false; // Prevent further execution
        }

        var total = hours * hourlyRate;

        // Set the total to the "Your Price" input
        $("#totalPrice").val(total.toFixed(2));
    });

    // Set the value and make the input readonly
    $("#txtHourlyRate").prop("readonly", true);
});

