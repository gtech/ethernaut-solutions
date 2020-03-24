pragma solidity ^0.4.18;

contract KingLock {
    address public owner;
    bytes32 public own;
    address contractToPay = 0x4101D4178Dea83724f3835c830C98234b4647B90;
    constructor() public {
        owner = msg.sender;
    }
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
  
    //function pay(uint amount) public returns (bool) {
    function pay() public returns (bool) {
        require(msg.sender == owner, "This isn't the owner");
        return contractToPay.call.value(address(this).balance)("");
    }
  
    function destroy() public {
        require(msg.sender == owner, "This isn't the owner");
        selfdestruct(msg.sender);
    }

    function() payable public {
        own = "this will fail on transfer";
    }
}