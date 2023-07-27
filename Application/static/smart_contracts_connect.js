// Connect metamask to our site. Get user's address
var deployingContract = null;
var contract = null;
var accounts = null;

const connectMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      accounts = await web3.eth.getAccounts();
      account = accounts[0];
      document.getElementById("account").innerHTML = "Account Address is " + account;
      contract = new web3.eth.Contract(abi, contract_address);
    }
};