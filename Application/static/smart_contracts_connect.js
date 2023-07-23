// Connect metamask to our site. Get user's address
var deployingContract = null;
var contract_address = null;
var contract = null;
var accounts = null;

const connectMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
  
      accounts = await web3.eth.getAccounts();
      account = accounts[0];
      document.getElementById("account").innerHTML = "Account Address is " + account;
    }
  };
  
// Deploy bytecode to Polygon
const deploy = async(abi, bytecode) =>{
    deployingContract = new web3.eth.Contract(abi).deploy({
          data:bytecode,
          arguments: []
    });
    var estimatedGas = await deployingContract.estimateGas();
    var deployedContract = await deployingContract.send({
          from: account,
          gas: estimatedGas,
    });
    contract_address = deployedContract.options.address;
    document.getElementById("contract-address").innerHTML = "Smart Contract Address is " + deployedContract.options.address;
    document.getElementById("contract-url").href = "https://mumbai.polygonscan.com/address/" + deployedContract.options.address;
    document.getElementById("contract-url").setAttribute("target", "_blank");
    contract = new web3.eth.Contract(abi, contract_address);
    return deployedContract.options.address;
};