// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Click handler, get date
button.on("click", function() {

  // Get the value property of the input element
  var inputElement =  d3.select("#datetime");
  var inputDate = inputElement.property("value");

  // Use the form input to filter the data by date
  var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

  // Add filtered data to HTML table
  var tbody = d3.select("tbody");

  tbody.html("");

  filteredData.forEach((dataPoint) => {
    var row = tbody.append("tr");
    Object.entries(dataPoint).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});
