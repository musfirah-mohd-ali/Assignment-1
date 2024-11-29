document.addEventListener("DOMContentLoaded", function () {
    // call the references from HTML
    const lessonDateInput = document.getElementById("lesson-date"); // input field for selecting the date
    const slotContainer = document.getElementById("slot-container"); // container for generated time slots
    const bookingForm = document.getElementById("booking-form"); // the booking form element

    const timeSlots = [
        { time: "9:00 AM - 10:00 AM", available: true },  
        { time: "10:30 AM - 11:30 AM", available: true },  
        { time: "1:00 PM - 2:00 PM", available: false },  
        { time: "2:30 PM - 3:30 PM", available: true }  
    ];

    let selectedSlot = null; // stores the index of the selected slot, null at first
    // function for updating and rendering time slots
    function updateTimeSlots() {
        slotContainer.innerHTML = ""; // clears the previous slots

        // loops through each time slot and create HTML for it
        timeSlots.forEach((slot, index) => {
            const slotCard = document.createElement("div"); // creates a div for each slot
            slotCard.classList.add("slot-card"); // adds a class to the slot card for styling

            const slotText = document.createElement("h4"); // create a heading for the time
            slotText.textContent = slot.time; // set the time text

            const slotButton = document.createElement("button"); // create a button for selection
            slotButton.textContent = slot.available ? "Select" : "Unavailable"; // set the button text based on availability
            slotButton.classList.add("slot-button"); // add a class to the button for styling
            slotButton.disabled = !slot.available; // if slot is not available the button is unusable

            // checks if the slot is already selected
            if (selectedSlot === index) {
                slotCard.classList.add("selected"); // add a selected class to the slot
                slotButton.textContent = "Selected"; // change the button text
                slotButton.disabled = true; // turns off once selected
            }

            // add an event listener to handle slot selection
            slotButton.addEventListener("click", () => {
                selectedSlot = index; // set the selected slot
                updateTimeSlots(); // remakes teh time slot to update the UI
            });

            // edit the time and button to the slot card, then adds the slot card to the container
            slotCard.appendChild(slotText);
            slotCard.appendChild(slotButton);
            slotContainer.appendChild(slotCard);
        });
    }

    //function to clear the form and reset the inputs and selected slots
    function clearForm() {
        lessonDateInput.value = ""; // clears the lesson date input
        document.getElementById("lesson-type").value = "basic"; // reset the lesson type to default "basic"
        document.getElementById("additional-notes").value = ""; // clear any additional notes
        selectedSlot = null; // resets the selected slot
        updateTimeSlots(); // remakes the time slot to reset the UI
    }

    // handles form submission
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent the default form submission behavior

        // checks if a time slot has been selected
        if (selectedSlot === null) {
            alert("Please select a time slot before booking."); // shows an alert is no time slot has been chosen yet
            return;
        }

        alert("Your lesson has been successfully booked!"); // shows success message on successful booking

        clearForm(); // clears all form fields after booking
    });

    // ensures the default value of the lesson date input is today's date
    lessonDateInput.valueAsDate = new Date();
    updateTimeSlots(); // orginal render of available dates
});
