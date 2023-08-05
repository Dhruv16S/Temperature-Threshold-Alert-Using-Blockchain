var breachedDataDates = [];
var breachedDataTimes = [];
var breachedDataTemperatures = [];
var breached_temperatures = [];
var blockchain_content;

month_conversion = {
  "01" : "January",
  "02" : "February",
  "03" : "March",
  "04" : "April",
  "05" : "May",
  "06" : "June",
  "07" : "July",
  "08" : "August",
  "09" : "September",
  "10" : "October",
  "11" : "November",
  "12" : "December"
}

// Button to Submit Temperatures
document.getElementById("submit").addEventListener("click", async () => {
  await connectMetamask();

  blockchain_content = "User Wallet Address is " + account + "\n\n.";

  breached_temperatures = [];
  // Submit the threshold temperature and the rounded temperatures to the smart contract
  const threshold = Number(document.getElementById("threshold").value); 

  blockchain_content += `In ${month}/${year}, the dates and times on which the temperature exceeded ${threshold}° celsius are:\n\n.`

  //breached_temperatures holds the indices.
  temperatures.forEach(element => {
    if(element > threshold){
      breached_temperatures.push(temperatures.indexOf(element));
    }
  });

  if(breached_temperatures.length === 0){
    createTable(table_empty = true);
  }
  else{
    displayBreachedTemperatures();
    createTable(table_empty = false);
  }
});

function displayBreachedTemperatures() {
  breachedData = [];
  for (let i = 0; i < breached_temperatures.length; i++) {
    let date = dates[breached_temperatures[i]];
    let time = times[breached_temperatures[i]];
    let temperature = temperatures[breached_temperatures[i]];
    breachedData.push({ date, time, temperature });
    breachedDataDates.push(String(date));
    breachedDataTimes.push(String(time));
    breachedDataTemperatures.push(String(temperature));
  }
}

const createTable = async(table_empty) => {
  
  await addData(month_conversion[month], breachedDataDates, breachedDataTimes, breachedDataTemperatures, String(account));

  const tableContainer = document.getElementById('table-container');
  
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

  if(table_empty){
    const h2 = document.createElement('h2');
    h2.textContent = 'No dates found';
    tableContainer.appendChild(h2);
  }
  else{
    const h2 = document.createElement('h2');
    h2.textContent = 'Dates on which temperature exceeded the threshold';
    tableContainer.appendChild(h2)

    const link = document.createElement("a");
    link.href = "https://mumbai.polygonscan.com/address/" + contract_address + "#readContract";
    link.target = "_blank";
    link.textContent = "Read Blockchain Contents here";
    tableContainer.appendChild(link);
    

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Date', 'Time', 'Temperature'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    for (const index in breachedData) {
        const data = breachedData[index];
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = data.date;
        row.appendChild(dateCell);

        const timeCell = document.createElement('td');
        timeCell.textContent = data.time;
        row.appendChild(timeCell);

        const temperatureCell = document.createElement('td');
        temperatureCell.textContent = data.temperature;
        row.appendChild(temperatureCell);

        table.appendChild(row);
    }
    
    tableContainer.appendChild(table);
  }
};