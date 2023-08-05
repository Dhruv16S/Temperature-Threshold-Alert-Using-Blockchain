// Just send exceeded dates. 

const addData = async (month, breachedDataDates, breachedDataTimes, breachedDataTemperatures, account) => {
    if(contract){
        var transaction = await contract.methods.addTemperatureDetails(month, breachedDataDates, breachedDataTimes, breachedDataTemperatures, account).send({
            from: account
        });
    }
};
