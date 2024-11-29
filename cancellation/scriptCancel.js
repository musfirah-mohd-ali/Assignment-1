// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Get references to the cancel and re-print receipt forms by their IDs
    const cancelForm = document.getElementById("cancel-booking-form");
    const reprintForm = document.getElementById("reprint-receipt-form");

    // Handle the cancellation form submission
    cancelForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission to handle it manually

        // Get the values entered by the user for booking ID and reason
        const bookingId = document.getElementById("booking-id").value;
        const reason = document.getElementById("reason").value;

        // Check if both fields are filled in
        if (!bookingId || !reason) {
            alert("Please fill in all fields for cancellation."); // Alert user if fields are empty
            return; // Exit the function if validation fails
        }

        // Display a success message with the booking ID and reason
        alert(`Booking with ID ${bookingId} has been successfully canceled.\nReason: ${reason}`);

        // Clear the form fields after successful submission
        cancelForm.reset();
    });

    // Handle the re-print receipt form submission
    reprintForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission to handle it manually

        // Get the value entered by the user for receipt ID
        const receiptId = document.getElementById("receipt-id").value;

        // Check if the receipt ID field is filled in
        if (!receiptId) {
            alert("Please enter a Receipt ID to re-print."); // Alert user if the field is empty
            return; // Exit the function if validation fails
        }

        // Display a success message with the receipt ID
        alert(`Receipt with ID ${receiptId} has been successfully re-printed.`);

        // Clear the form fields after successful submission
        reprintForm.reset();
    });
});
