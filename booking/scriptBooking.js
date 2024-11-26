document.addEventListener("DOMContentLoaded", function () {
    const lessonDateInput = document.getElementById("lesson-date");
    const slotContainer = document.getElementById("slot-container");

    // Simulate available time slots
    const timeSlots = [
        { time: "9:00 AM - 10:00 AM", available: true },
        { time: "10:30 AM - 11:30 AM", available: true },
        { time: "1:00 PM - 2:00 PM", available: false },
        { time: "2:30 PM - 3:30 PM", available: true }
    ];

    let selectedSlot = null; // Track selected time slot

    // Function to update available time slots based on selected date
    lessonDateInput.addEventListener("change", function () {
        const selectedDate = new Date(lessonDateInput.value);
        const currentDate = new Date();

        // If the selected date is today or in the future, show time slots
        if (selectedDate >= currentDate) {
            updateTimeSlots();
        } else {
            slotContainer.innerHTML = "<p>Please select a valid date.</p>";
        }
    });

    // Function to populate available time slots
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
            slotButton.disabled = !slot.available; // Disable button if slot is not available

            // Highlight selected slot
            if (selectedSlot === index) {
                slotCard.classList.add("selected");
                slotButton.textContent = "Selected";
                slotButton.disabled = true;
            }

            slotButton.addEventListener("click", function () {
                // Update selected slot and UI
                selectedSlot = index;
                updateTimeSlots(); // Re-render time slots
            });

            slotCard.appendChild(slotText);
            slotCard.appendChild(slotButton);
            slotContainer.appendChild(slotCard);
        });
    }

    // Default to today's date if not already selected
    lessonDateInput.valueAsDate = new Date();
});
