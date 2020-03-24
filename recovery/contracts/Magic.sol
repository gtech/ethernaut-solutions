pragma solidity ^0.4.24;
contract Magic {
    function whatIsTheMeaningOfLife() public returns (int) 
    {
        assembly
        { 
            mstore(0x80,42)
            return(0x80,0x20)
        }
    }
} 