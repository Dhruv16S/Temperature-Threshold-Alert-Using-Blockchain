var breachedData = [];
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
  await deploy(abi, bytecode);
  const threshold_section = document.getElementById("enter-threshold");
  if(threshold_section.style.display === "none"){
    threshold_section.style.display = "block";
    document.getElementById("deploy").disabled = true;
  }
});

// Button to Submit Temperatures
document.getElementById("submit").addEventListener("click", async () => {
  // Submit the threshold temperature and the rounded temperatures to the smart contract
  const threshold = Number(document.getElementById("threshold").value); 
  const rounded_temperatures = temperatures.map((temperature) => Math.ceil(temperature));
  await addData(threshold, rounded_temperatures);
  breached_temperatures = await getBreachedTemperatures();
  breached_temperatures = breached_temperatures.map((temperature) => Number(temperature));
  displayBreachedTemperatures();
  createTable();
});

function displayBreachedTemperatures() {
  for (const index of breached_temperatures) {
    const date = dates[index];
    const time = times[index];
    const temperature = temperatures[index];
    breachedData.push({ date, time, temperature });
  }
}

function createTable() {
  const tableContainer = document.getElementById('table-container');
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }
  const table = document.createElement('table');

  const h2 = document.createElement('h2');
  h2.textContent = 'Dates on which temperature exceeded the threshold';
  
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
  tableContainer.appendChild(h2);
  tableContainer.appendChild(table);
}