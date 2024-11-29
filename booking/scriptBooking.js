document.addEventListener("DOMContentLoaded", function () {
    const lessonDateInput = document.getElementById("lesson-date");
    const slotContainer = document.getElementById("slot-container");
    const bookingForm = document.getElementById("booking-form");

    // Simulate available time slots
    const timeSlots = [
        { time: "9:00 AM - 10:00 AM", available: true },
        { time: "10:30 AM - 11:30 AM", available: true },
        { time: "1:00 PM - 2:00 PM", available: false },
        { time: "2:30 PM - 3:30 PM", available: true }
    ];

    let selectedSlot = null;

    // Populate available time slots
    function updateTimeSlots() {
        slotContainer.innerHTML = ""; // Clear previous slots
        timeSlots.forEach((slot, index) => {
            const slotCard = document.createElement("div");
            slotCard.classList.add("slot-card");

            const slotText = document.createElement("h4");
            slotText.textContent = slot.time;

            const slotButton = document.createElement("button");
            slotButton.textContent = slot.available ? "Select" : "Unavailable";
            slotButton.classList.add("slot-button");
            slotButton.disabled = !slot.available;

            if (selectedSlot === index) {
                slotCard.classList.add("selected");
                slotButton.textContent = "Selected";
                slotButton.disabled = true;
            }

            slotButton.addEventListener("click", () => {
                selectedSlot = index;
                updateTimeSlots(); // Re-render slots
            });

            slotCard.appendChild(slotText);
            slotCard.appendChild(slotButton);
            slotContainer.appendChild(slotCard);
        });
    }

    // Clear input fields and selected slot
    function clearForm() {
        lessonDateInput.value = "";
        document.getElementById("lesson-type").value = "basic";
        document.getElementById("additional-notes").value = "";
        selectedSlot = null;
        updateTimeSlots();
    }

    // Handle form submission
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Check if a time slot is selected
        if (selectedSlot === null) {
            alert("Please select a time slot before booking.");
            return;
        }

        alert("Your lesson has been successfully booked!");

        clearForm(); // Clear inputs after booking
    });

    // Default to today's date if not already selected
    lessonDateInput.valueAsDate = new Date();
    updateTimeSlots(); // Initial render of time slots
});
