async function main() {

     // Deploy ExampleExternalContract contract
     YourTokenFactory = await ethers.getContractFactory('SWIToken');
     tokenContract = await YourTokenFactory.deploy();
 
     // Deploy Staker Contract
     const VendorContract = await ethers.getContractFactory('Vendor');
     vendorContract = await VendorContract.deploy(tokenContract.address);
 
     await tokenContract.transfer(vendorContract.address, ethers.utils.parseEther('5'));
     await vendorContract.transferOwnership('0xA4Dd5426a9FF093a68e92D25b6e86ab9306c50d5');
  
    console.log("SWIToken deployed to:", tokenContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });