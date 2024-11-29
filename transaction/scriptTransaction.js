// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Sample data representing transaction information
    const transactionData = [
        {
            bookingId: "045",
            bookingType: "Driving Lesson",
            date: "2024-11-04",
            timeSlot: "9:00 AM - 10:40 AM",
            lessonType: "Practical",
            totalPrice: "$89.75"
        },
        {
            bookingId: "005",
            bookingType: "Theory Lesson",
            date: "2024-11-12",
            timeSlot: "8:30 AM - 9:30 AM",
            lessonType: "Theory",
            totalPrice: "$45.60"
        },
        {
            bookingId: "019",
            bookingType: "Driving Lesson",
            date: "2024-11-14",
            timeSlot: "2:30 PM - 5:20 PM",
            lessonType: "Practical",
            totalPrice: "$89.75"
        },
        {
            bookingId: "180",
            bookingType: "Circuit Improvement",
            date: "2024-11-30",
            timeSlot: "2:30 PM - 5:20 PM",
            lessonType: "Practical",
            totalPrice: "$89.75"
        },
    ];

    // Get reference to the table body and the date filter input element
    const tableBody = document.getElementById("transaction-table");
    const dataFilter = document.getElementById("date-filter");
    const clearFilter = document.getElementById("clear-filter");

    // Function to populate the table with data
    function populateTable(data) {
        tableBody.innerHTML = ""; // Clear any existing table rows
        if (data.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No data found.</td></tr>"; // Show message if no data found
            return;
        }

        // Loop through the data and create table rows for each transaction
        data.forEach(transaction => {
            const row = document.createElement("tr"); // Create a new table row
            row.innerHTML = `
                <td>${transaction.bookingId}</td>
                <td>${transaction.bookingType}</td>
                <td>${transaction.date}</td>
                <td>${transaction.timeSlot}</td>
                <td>${transaction.lessonType}</td>
                <td>${transaction.totalPrice}</td>
            `;
            tableBody.appendChild(row); // Add the row to the table body
        });
    }

    // Event listener for the date filter input
    dataFilter.addEventListener("change", function() {
        const selectedDate = dataFilter.value; // Get the selected date from the input
        if (selectedDate) {
            // Filter the transaction data by the selected date
            const filteredData = transactionData.filter(
                transaction => transaction.date === selectedDate
            );
            populateTable(filteredData); // Populate the table with filtered data
        }
    });

    // Event listener for the clear filter button
    clearFilter.addEventListener("click", function() {
        dataFilter.value = ""; // Clear the selected date in the filter
        populateTable(transactionData); // Show all transactions again
    });

    // Initial population of the table when the page loads
    populateTable(transactionData);
});
