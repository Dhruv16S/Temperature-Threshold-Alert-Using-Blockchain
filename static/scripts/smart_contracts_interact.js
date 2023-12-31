// Send exceeded temperature data to the smart contract along with the month, date, time and the user's account address 

const addData = async (month, breachedDataDates, breachedDataTimes, breachedDataTemperatures, account) => {
    if(contract){
        var transaction = await contract.methods.addTemperatureDetails(month, breachedDataDates, breachedDataTimes, breachedDataTemperatures, account).send({
            from: account
        });
    }
};

const getRecordCount = async () => {
    if(contract){
        var count = await contract.methods.getTemperatureDetailsCount().call();
        return count
    }
};

const getRecentTemperatureDetails = async () => {
    if(contract){
        return await contract.methods.getRecentTemperatureDetails().call();
    }
};

const getRecentRecordCount = async () => {
    if(contract){
        var recentCount = await contract.methods.getRecentTemperatureDetailsCount().call();
        return recentCount
    }
};


const getAllMonthlyOccurrences = async () => {
    if(contract){
        var occurences = await contract.methods.getAllMonthlyOccurrences().call();
        return occurences
    }
};
