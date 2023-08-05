var breachedData = [];
var breached_temperatures = [];
var blockchain_content;

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
    blockchain_content += "No dates found\n";
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
    const date = dates[breached_temperatures[i]];
    const time = times[breached_temperatures[i]];
    const temperature = temperatures[breached_temperatures[i]];
    blockchain_content += `${date} at ${time} with a temperature of ${temperature}° Celsius\n. `;
    breachedData.push({ date, time, temperature });
  }
}

const createTable = async(table_empty) => {
  
  await addData(blockchain_content);
  const tableContainer = document.getElementById('table-container');
  
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

  const link = document.createElement("a");
  link.href = "https://mumbai.polygonscan.com/address/" + contract_address + "#readContract";
  link.target = "_blank";
  link.textContent = "Read Blockchain Contents here";
  tableContainer.appendChild(link);
  
  if(table_empty){
    const h2 = document.createElement('h2');
    h2.textContent = 'No dates found';
    tableContainer.appendChild(h2);
  }
  else{
    const h2 = document.createElement('h2');
    h2.textContent = 'Dates on which temperature exceeded the threshold';
    tableContainer.appendChild(h2)
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