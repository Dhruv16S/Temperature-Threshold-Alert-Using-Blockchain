
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
document.getElementById("submit").addEventListener("click", () => {

  const threshold = Number(document.getElementById("threshold").value); 
  const rounded_temperatures = temperatures.map((temperature) => parseInt(temperature));
  console.log(rounded_temperatures);

});
