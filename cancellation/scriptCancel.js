document.addEventListener("DOMContentLoaded", function () {
    const cancelForm = document.getElementById("cancel-booking-form");
    const reprintForm = document.getElementById("reprint-receipt-form");

    // Handle the cancellation form submission
    cancelForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const bookingId = document.getElementById("booking-id").value;
        const reason = document.getElementById("reason").value;

        if (!bookingId || !reason) {
            alert("Please fill in all fields for cancellation.");
            return;
        }

        // Display a success message
        alert(`Booking with ID ${bookingId} has been successfully canceled.\nReason: ${reason}`);

        // Clear the form fields
        cancelForm.reset();
    });

    // Handle the re-print receipt form submission
    reprintForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const receiptId = document.getElementById("receipt-id").value;

        if (!receiptId) {
            alert("Please enter a Receipt ID to re-print.");
            return;
        }

        // Display a success message
        alert(`Receipt with ID ${receiptId} has been successfully re-printed.`);

        // Clear the form fields
        reprintForm.reset();
    });
});
