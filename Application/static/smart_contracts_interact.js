// Just send exceeded dates. 

const addData = async (blockchain_content) => {
    if(contract){
        var transaction = await contract.methods.appendString(blockchain_content).send({
            from: account
        });
    }
};
