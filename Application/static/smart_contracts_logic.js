// Connect metamask to our site. Get user's address
const connectMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
  
      var accounts = await web3.eth.getAccounts();
      account = accounts[0];
      document.getElementById("account").innerHTML = "Account Address is " + account;
    }
  };
  
  // Deploy bytecode to Polygon
  const deploy = async(abi, bytecode) =>{
    var deployingContract = new web3.eth.Contract(abi).deploy({
          data:bytecode,
          arguments: []
    });
    var estimatedGas = await deployingContract.estimateGas();
    var deployedContract = await deployingContract.send({
          from: account,
          gas: estimatedGas,
    });
    document.getElementById("contract-address").innerHTML = "Smart Contract Address is " + deployedContract.options.address;
    document.getElementById("contract-url").href = "https://mumbai.polygonscan.com/address/" + deployedContract.options.address;
    document.getElementById("contract-url").setAttribute("target", "_blank");
    console.log(deployedContract.options.address);
    return deployedContract.options.address;
  };