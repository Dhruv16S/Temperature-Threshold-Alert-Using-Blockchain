const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "month",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "dates",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "times",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "temperatures",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "userAddress",
				"type": "string"
			}
		],
		"name": "addTemperatureDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getTemperatureDetailsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "monthlyReport",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tempDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "userAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "temperature",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const bytecode = "0x60806040523480156200001157600080fd5b50600080604051620000239062000217565b90815260200160405180910390208190555060008060405162000046906200027e565b9081526020016040518091039020819055506000806040516200006990620002e5565b9081526020016040518091039020819055506000806040516200008c906200034c565b908152602001604051809103902081905550600080604051620000af90620003b3565b908152602001604051809103902081905550600080604051620000d2906200041a565b908152602001604051809103902081905550600080604051620000f59062000481565b9081526020016040518091039020819055506000806040516200011890620004e8565b9081526020016040518091039020819055506000806040516200013b906200054f565b9081526020016040518091039020819055506000806040516200015e90620005b6565b90815260200160405180910390208190555060008060405162000181906200061d565b908152602001604051809103902081905550600080604051620001a49062000684565b9081526020016040518091039020819055506200069b565b600081905092915050565b7f4a616e7561727900000000000000000000000000000000000000000000000000600082015250565b6000620001ff600783620001bc565b91506200020c82620001c7565b600782019050919050565b60006200022482620001f0565b9150819050919050565b7f4665627275617279000000000000000000000000000000000000000000000000600082015250565b600062000266600883620001bc565b915062000273826200022e565b600882019050919050565b60006200028b8262000257565b9150819050919050565b7f4d61726368000000000000000000000000000000000000000000000000000000600082015250565b6000620002cd600583620001bc565b9150620002da8262000295565b600582019050919050565b6000620002f282620002be565b9150819050919050565b7f417072696c000000000000000000000000000000000000000000000000000000600082015250565b600062000334600583620001bc565b91506200034182620002fc565b600582019050919050565b6000620003598262000325565b9150819050919050565b7f4d61790000000000000000000000000000000000000000000000000000000000600082015250565b60006200039b600383620001bc565b9150620003a88262000363565b600382019050919050565b6000620003c0826200038c565b9150819050919050565b7f4a756e6500000000000000000000000000000000000000000000000000000000600082015250565b600062000402600483620001bc565b91506200040f82620003ca565b600482019050919050565b60006200042782620003f3565b9150819050919050565b7f4a756c7900000000000000000000000000000000000000000000000000000000600082015250565b600062000469600483620001bc565b9150620004768262000431565b600482019050919050565b60006200048e826200045a565b9150819050919050565b7f4175677573740000000000000000000000000000000000000000000000000000600082015250565b6000620004d0600683620001bc565b9150620004dd8262000498565b600682019050919050565b6000620004f582620004c1565b9150819050919050565b7f53657074656d6265720000000000000000000000000000000000000000000000600082015250565b600062000537600983620001bc565b91506200054482620004ff565b600982019050919050565b60006200055c8262000528565b9150819050919050565b7f4f63746f62657200000000000000000000000000000000000000000000000000600082015250565b60006200059e600783620001bc565b9150620005ab8262000566565b600782019050919050565b6000620005c3826200058f565b9150819050919050565b7f4e6f76656d626572000000000000000000000000000000000000000000000000600082015250565b600062000605600883620001bc565b91506200061282620005cd565b600882019050919050565b60006200062a82620005f6565b9150819050919050565b7f446563656d626572000000000000000000000000000000000000000000000000600082015250565b60006200066c600883620001bc565b9150620006798262000634565b600882019050919050565b600062000691826200065d565b9150819050919050565b61106180620006ab6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063558e5d7d146100515780639b24a0f01461006d578063d3b1b7ed1461009d578063e29fa9f2146100d0575b600080fd5b61006b60048036038101906100669190610738565b6100ee565b005b61008760048036038101906100829190610996565b6103ce565b60405161009491906109f8565b60405180910390f35b6100b760048036038101906100b29190610a3f565b6103fc565b6040516100c79493929190610aeb565b60405180910390f35b6100d861065c565b6040516100e591906109f8565b60405180910390f35b858590508888905014801561010857508383905088889050145b610147576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013e90610b98565b60405180910390fd5b60005b88889050811015610387576001604051806080016040528085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020018b8b858181106101bf576101be610bb8565b5b90506020028101906101d19190610bf6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200189898581811061022c5761022b610bb8565b5b905060200281019061023e9190610bf6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200187878581811061029957610298610bb8565b5b90506020028101906102ab9190610bf6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152509080600181540180825580915050600190039060005260206000209060040201600090919091909150600082015181600001908161032f9190610e65565b5060208201518160010190816103459190610e65565b50604082015181600201908161035b9190610e65565b5060608201518160030190816103719190610e65565b505050808061037f90610f66565b91505061014a565b508787905060008b8b60405161039e929190610fde565b908152602001604051809103902060008282546103bb9190610ff7565b9250508190555050505050505050505050565b6000818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6001818154811061040c57600080fd5b906000526020600020906004020160009150905080600001805461042f90610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461045b90610c88565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b5050505050908060010180546104bd90610c88565b80601f01602080910402602001604051908101604052809291908181526020018280546104e990610c88565b80156105365780601f1061050b57610100808354040283529160200191610536565b820191906000526020600020905b81548152906001019060200180831161051957829003601f168201915b50505050509080600201805461054b90610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461057790610c88565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b5050505050908060030180546105d990610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461060590610c88565b80156106525780601f1061062757610100808354040283529160200191610652565b820191906000526020600020905b81548152906001019060200180831161063557829003601f168201915b5050505050905084565b6000600180549050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126106a2576106a161067d565b5b8235905067ffffffffffffffff8111156106bf576106be610682565b5b6020830191508360018202830111156106db576106da610687565b5b9250929050565b60008083601f8401126106f8576106f761067d565b5b8235905067ffffffffffffffff81111561071557610714610682565b5b60208301915083602082028301111561073157610730610687565b5b9250929050565b60008060008060008060008060008060a08b8d03121561075b5761075a610673565b5b60008b013567ffffffffffffffff81111561077957610778610678565b5b6107858d828e0161068c565b9a509a505060208b013567ffffffffffffffff8111156107a8576107a7610678565b5b6107b48d828e016106e2565b985098505060408b013567ffffffffffffffff8111156107d7576107d6610678565b5b6107e38d828e016106e2565b965096505060608b013567ffffffffffffffff81111561080657610805610678565b5b6108128d828e016106e2565b945094505060808b013567ffffffffffffffff81111561083557610834610678565b5b6108418d828e0161068c565b92509250509295989b9194979a5092959850565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108a38261085a565b810181811067ffffffffffffffff821117156108c2576108c161086b565b5b80604052505050565b60006108d5610669565b90506108e1828261089a565b919050565b600067ffffffffffffffff8211156109015761090061086b565b5b61090a8261085a565b9050602081019050919050565b82818337600083830152505050565b6000610939610934846108e6565b6108cb565b90508281526020810184848401111561095557610954610855565b5b610960848285610917565b509392505050565b600082601f83011261097d5761097c61067d565b5b813561098d848260208601610926565b91505092915050565b6000602082840312156109ac576109ab610673565b5b600082013567ffffffffffffffff8111156109ca576109c9610678565b5b6109d684828501610968565b91505092915050565b6000819050919050565b6109f2816109df565b82525050565b6000602082019050610a0d60008301846109e9565b92915050565b610a1c816109df565b8114610a2757600080fd5b50565b600081359050610a3981610a13565b92915050565b600060208284031215610a5557610a54610673565b5b6000610a6384828501610a2a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aa6578082015181840152602081019050610a8b565b60008484015250505050565b6000610abd82610a6c565b610ac78185610a77565b9350610ad7818560208601610a88565b610ae08161085a565b840191505092915050565b60006080820190508181036000830152610b058187610ab2565b90508181036020830152610b198186610ab2565b90508181036040830152610b2d8185610ab2565b90508181036060830152610b418184610ab2565b905095945050505050565b7f496e76616c696420696e707574206c656e677468730000000000000000000000600082015250565b6000610b82601583610a77565b9150610b8d82610b4c565b602082019050919050565b60006020820190508181036000830152610bb181610b75565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112610c1357610c12610be7565b5b80840192508235915067ffffffffffffffff821115610c3557610c34610bec565b5b602083019250600182023603831315610c5157610c50610bf1565b5b509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ca057607f821691505b602082108103610cb357610cb2610c59565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d1b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cde565b610d258683610cde565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d62610d5d610d58846109df565b610d3d565b6109df565b9050919050565b6000819050919050565b610d7c83610d47565b610d90610d8882610d69565b848454610ceb565b825550505050565b600090565b610da5610d98565b610db0818484610d73565b505050565b5b81811015610dd457610dc9600082610d9d565b600181019050610db6565b5050565b601f821115610e1957610dea81610cb9565b610df384610cce565b81016020851015610e02578190505b610e16610e0e85610cce565b830182610db5565b50505b505050565b600082821c905092915050565b6000610e3c60001984600802610e1e565b1980831691505092915050565b6000610e558383610e2b565b9150826002028217905092915050565b610e6e82610a6c565b67ffffffffffffffff811115610e8757610e8661086b565b5b610e918254610c88565b610e9c828285610dd8565b600060209050601f831160018114610ecf5760008415610ebd578287015190505b610ec78582610e49565b865550610f2f565b601f198416610edd86610cb9565b60005b82811015610f0557848901518255600182019150602085019450602081019050610ee0565b86831015610f225784890151610f1e601f891682610e2b565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f71826109df565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610fa357610fa2610f37565b5b600182019050919050565b600081905092915050565b6000610fc58385610fae565b9350610fd2838584610917565b82840190509392505050565b6000610feb828486610fb9565b91508190509392505050565b6000611002826109df565b915061100d836109df565b925082820190508082111561102557611024610f37565b5b9291505056fea26469706673582212206c43109615838ca8a9caec77b1425879eb8b1814ffcd40a9fe03089fe90ddb8064736f6c63430008120033"

const contract_address = "0x7C83cbd6d87AFB4f5cf812876a60e0718E4794Aa"