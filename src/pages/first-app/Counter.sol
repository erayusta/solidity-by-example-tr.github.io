// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
    uint public count;

    // şuanki count değerini döndürür
    function get() public view returns (uint) {
        return count;
    }

    // count değerini 1 arttırır.
    function inc() public {
        count += 1;
    }

    // count değerini 1 azaltır.
    function dec() public {
        count -= 1;
    }
}
