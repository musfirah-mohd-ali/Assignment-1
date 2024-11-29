document.addEventListener("DOMContentLoaded", function() {
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
    const tableBody = document.getElementById("transaction-table");
    const dataFilter = document.getElementById("date-filter");
    const clearFilter = document.getElementById("clear-filter");

    //function to input data into table
    function populateTable(data) {
        tableBody.innerHTML=""; //to clear the previous rows
        if (data.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No data found.</td></tr>";
            return;
        }
        data.forEach(transaction => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${transaction.bookingId}</td>
                <td>${transaction.bookingType}</td>
                <td>${transaction.date}</td>
                <td>${transaction.timeSlot}</td>
                <td>${transaction.lessonType}</td>
                <td>${transaction.totalPrice}</td>
                `;
                tableBody.appendChild(row);
        });
    }
    // Filtering transactions by date
    dataFilter.addEventListener("change", function() {
        const selectedDate = dataFilter.value; // Corrected property
        if (selectedDate) {
            const filteredData = transactionData.filter(
                transaction => transaction.date === selectedDate
            );
            populateTable(filteredData);
        }
    });

    // Clear filter to show all transactions
    clearFilter.addEventListener("click", function() {
        dataFilter.value = ""; // Clear the selected date
        populateTable(transactionData); // Show all transactions
    });

    // Initial population of the table
    populateTable(transactionData);
});