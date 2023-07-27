var breachedData = [];
var breached_temperatures = [];
var blockchain_content;

// Button to Connect to Metamask
document.getElementById("connect").addEventListener("click", async () => {
  await connectMetamask();
  const deploy_section = document.getElementById("deploy-smart-contract");
  if (deploy_section.style.display === "none") {
    deploy_section.style.display = "block";
    document.getElementById("connect").disabled = true;
  }
});


// Button to Deploy Smart Contract
document.getElementById("deploy").addEventListener("click", async () => {
  //Commented for testing
  //await deploy(abi, bytecode);
  const threshold_section = document.getElementById("enter-threshold");
  if(threshold_section.style.display === "none"){
    threshold_section.style.display = "block";
    document.getElementById("deploy").disabled = true;
  }
});

// Button to Submit Temperatures
document.getElementById("submit").addEventListener("click", async () => {
  blockchain_content = "User Wallet Address is " + account + "\n\n";
  console.log(typeof(temperatures[0]))
  breached_temperatures = [];
  // Submit the threshold temperature and the rounded temperatures to the smart contract
  const threshold = Number(document.getElementById("threshold").value); 
  blockchain_content += `In ${month}/${year}, the dates and times on which the temperature exceeded ${threshold}° Celsius are:\n\n`
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
    blockchain_content += `${date} at ${time} with a temperature of ${temperature}° Celsius\n`;
    breachedData.push({ date, time, temperature });
  }
}

function createTable(table_empty) {
  console.log(blockchain_content)
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
}