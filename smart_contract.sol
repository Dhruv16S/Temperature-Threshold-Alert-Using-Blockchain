// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract ThresholdTemperatures {
    string public tempDetails = "";

    function appendString(string calldata str) external {
        tempDetails = string(abi.encodePacked(tempDetails, str));
    }
}