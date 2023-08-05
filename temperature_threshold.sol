// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract ThresholdTemperatures {
    struct TemperatureDetail {
        string userAddress;
        string date;
        string time;
        string temperature;
    }

    mapping(string => uint256) public monthlyReport;

    TemperatureDetail[] public tempDetails;

    constructor() {
        monthlyReport["January"] = 0;
        monthlyReport["February"] = 0;
        monthlyReport["March"] = 0;
        monthlyReport["April"] = 0;
        monthlyReport["May"] = 0;
        monthlyReport["June"] = 0;
        monthlyReport["July"] = 0;
        monthlyReport["August"] = 0;
        monthlyReport["September"] = 0;
        monthlyReport["October"] = 0;
        monthlyReport["November"] = 0;
        monthlyReport["December"] = 0;
    }


    function getTemperatureDetailsCount() external view returns (uint256) {
        return tempDetails.length;
    }

    function addTemperatureDetails(
        string calldata month,
        string[] calldata dates,
        string[] calldata times,
        string[] calldata temperatures,
        string calldata userAddress
    ) external {
        require(
            dates.length == times.length && dates.length == temperatures.length,
            "Invalid input lengths"
        );

        for (uint256 i = 0; i < dates.length; i++) {
            tempDetails.push(
                TemperatureDetail(userAddress, dates[i], times[i], temperatures[i])
            );
        }

        monthlyReport[month] += dates.length;
    }
}
