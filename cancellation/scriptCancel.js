// wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // getting references to the cancel and re-print receipt forms by their IDs
    const cancelForm = document.getElementById("cancel-booking-form");
    const reprintForm = document.getElementById("reprint-receipt-form");

    // handle the cancellation form submission
    cancelForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stopping the browser from doing what it normally does when user submits a form

        // get the values entered by the user for booking ID and reason
        const bookingId = document.getElementById("booking-id").value;
        const reason = document.getElementById("reason").value;

        // check if both fields are filled in
        if (!bookingId || !reason) {
            alert("Please fill in all fields for cancellation."); // tells user that the field is empty
            return; // exits the function if the validation fails
        }

        // display a success message with the booking ID and reason
        alert(`Booking with ID ${bookingId} has been successfully canceled.\nReason: ${reason}`);

        // clears the form after submission is a success
        cancelForm.reset();
    });

    // handle the re-print receipt form submission
    reprintForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stopping the browser from doing what it normally does when user submits a form

        // get the value entered by the user for receipt ID
        const receiptId = document.getElementById("receipt-id").value;

        // check if the fields are empty or not
        if (!receiptId) {
            alert("Please enter a Receipt ID to re-print."); // tells user that the field is empty
            return; // exits the function if the validation fails
        }

        // shows a success message with the receipt ID
        alert(`Receipt with ID ${receiptId} has been successfully re-printed.`);

        // clears the form after submission is a success
        reprintForm.reset();
    });
});
