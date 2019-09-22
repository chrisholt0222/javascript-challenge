// Select the button
var button = d3.select("#filter-btn");

// Click handler, get date
button.on("click", function() {
  
  // from data.js
  var filteredData = data;
  
  // Get the value property of the input element
  var inputElement =  d3.select("#datetime");
  var inputDate = inputElement.property("value");

  var inputElement =  d3.select("#city");
  var inputCity = inputElement.property("value");
  inputCity = inputCity.toLowerCase();

  var inputElement =  d3.select("#state");
  var inputState = inputElement.property("value");
  inputState = inputState.toLowerCase();

  var inputElement =  d3.select("#country");
  var inputCountry = inputElement.property("value");
  inputCountry = inputCountry.toLowerCase();

  var inputElement =  d3.select("#shape");
  var inputShape = inputElement.property("value");
  inputShape = inputShape.toLowerCase();

  // Use the form input to filter the data by date
  if (inputDate != "") {filteredData = filteredData.filter(filteredData => filteredData.datetime === inputDate);}
  if (inputCity != "") {filteredData = filteredData.filter(filteredData => filteredData.city === inputCity);}
  if (inputState != "") {filteredData = filteredData.filter(filteredData => filteredData.state === inputState);}
  if (inputCountry != "") {filteredData = filteredData.filter(filteredData => filteredData.country === inputCountry);}
  if (inputShape != "") {filteredData = filteredData.filter(filteredData => filteredData.shape === inputShape);}

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
