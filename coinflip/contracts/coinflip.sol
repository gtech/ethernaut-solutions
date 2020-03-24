pragma solidity ^0.4.18;

contract CoinFlipAttack {
    uint256 public consecutiveWins;
    uint256 lastHash;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor() public {
        consecutiveWins = 0;
    }

    function flip(bool _guess) public returns (bool) {
        uint256 blockValue = uint256(block.blockhash(block.number-1));

        if (lastHash == blockValue) {
            revert("Block hasn't changed since last flip.");
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        if (side == _guess) {
            consecutiveWins++;
            return true;
        } else {
            consecutiveWins = 0;
            return false;
        }
    }
   
    function bv1() public view returns (uint256) {
        uint256 blockValue = uint256(block.blockhash(block.number-1));
        return blockValue;
    }
    function bv2() public view returns (uint256) {
        uint256 blockValue = uint256(block.blockhash(block.number-2));
        return blockValue;
    }
    function side() public view returns (bool) {
        uint256 blockValue = uint256(block.blockhash(block.number-1));
        uint256 coinFlip = blockValue / FACTOR;
        bool side2 = coinFlip == 1 ? true : false;
        return side2;
    }
}