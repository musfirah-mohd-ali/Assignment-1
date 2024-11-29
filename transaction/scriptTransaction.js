// waiting for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // data for teh table
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

    // references for date input and table body
    const tableBody = document.getElementById("transaction-table");
    const dataFilter = document.getElementById("date-filter");
    const clearFilter = document.getElementById("clear-filter");

    // fill table with data provided
    function populateTable(data) {
        tableBody.innerHTML = ""; // ensures taht the table starts fresh wiht only new data
        if (data.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No data found.</td></tr>"; // informs the user that there is no data
            return;
        }

        // adds rows to a table, each row representing a transaction from the data
        data.forEach(transaction => { //goes through each item in the data array one by one
            const row = document.createElement("tr"); // create a new table row
            row.innerHTML = `
                <td>${transaction.bookingId}</td>
                <td>${transaction.bookingType}</td>
                <td>${transaction.date}</td>
                <td>${transaction.timeSlot}</td>
                <td>${transaction.lessonType}</td>
                <td>${transaction.totalPrice}</td>
            `;
            tableBody.appendChild(row); // add the row to the table body
        });
    }

    // looks for a change event in the dateFilter element
    dataFilter.addEventListener("change", function() {
        const selectedDate = dataFilter.value; // captures the data chosen by the user
        if (selectedDate) {
            // filters the transaction data by the selected date
            const filteredData = transactionData.filter(
                transaction => transaction.date === selectedDate
            );
            populateTable(filteredData); // updates the table with only the transactions that match the selected date
        }
    });

    // lets the user to reset the date filter ande view all transaction in the tab;e
    clearFilter.addEventListener("click", function() {
        dataFilter.value = ""; // clears the selected date
        populateTable(transactionData); // inputs all the data with the original dataset into the table
    });

   // automatically displays all transactions in the table when the page first loads
    populateTable(transactionData);
});
