// from data.js
var tableData = data;

// Assign table body variable
var tbody = d3.select("tbody");

// Iterate through data
tableData.forEach(function(UFOinfo) {
    console.log(UFOinfo);
    // Add rows to table
    var row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(function([key, value]) {
        console.log(key,value);
        // Add data to row cells
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Assign variables for filter form
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);

    // Match inputValue to value in table
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
    
    function clearTable() {
        d3.select("tbody").selectAll("td").remove();
    };
    
    clearTable();

    filteredData.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        // Add rows to table
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
            console.log(key,value);
            // Add data to row cells
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
