pragma solidity ^0.4.24;

contract MagicNum {

  address public solver;

  constructor() public {}

  function setSolver(address _solver) public {
    solver = _solver;
  }

  /*
    ____________/\\\_______/\\\\\\\\\_____        
     __________/\\\\\_____/\\\///////\\\___       
      ________/\\\/\\\____\///______\//\\\__      
       ______/\\\/\/\\\______________/\\\/___     
        ____/\\\/__\/\\\___________/\\\//_____    
         __/\\\\\\\\\\\\\\\\_____/\\\//________   
          _\///////////\\\//____/\\\/___________  
           ___________\/\\\_____/\\\\\\\\\\\\\\\_ 
            ___________\///_____\///////////////__
  */
}

contract Magic {
    function whatIsTheMeaningOfLife() public returns (uint) 
    {
        assembly
        { 
            mstore(0x80,42)
            return(0x80,0x20)
        }
    }
}   

contract Magic3 {
    function ()
    {
        assembly
        { 
            mstore(0x80,42)
            return(0x80,0x20)
        }
    }
}   
//0x650500c1
contract Magic2 {
    function whatIsTheMeaningOfLife() returns (uint)
    {
            return(42);
    }
}   

