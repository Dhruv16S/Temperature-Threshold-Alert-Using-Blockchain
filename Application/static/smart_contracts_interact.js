// Interacting with Smart Contract
// Essentially, submit the threshold temperature and the rounded temperatures to the smart contract
// The smart contract will then check if the threshold is breached and returns the indices of the breached temperatures

var breached_temperatures = null;

const addData = async (threshold, rounded_temperatures) => {
    if(contract){
        var transaction = await contract.methods.addData(rounded_temperatures, threshold).send({
            from: account
        });
    }
};

const getBreachedTemperatures = async () => {
    if(contract){
        breached_temperatures = await contract.methods.getTemperaturesAboveThreshold().call();
        return breached_temperatures;
    }
};