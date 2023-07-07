// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.10;

contract BoxV2 {
    uint public val;

    //function initialize(uint _val) external {
    //    val =_val;
    //}
    
    // increases the state variable bal
    function increment(uint _val) external {
        val += 1;
    }
}