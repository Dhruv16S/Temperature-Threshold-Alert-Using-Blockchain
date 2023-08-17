// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract ThresholdTemperatures {
    struct TemperatureDetail {
        string userAddress;
        string date;
        string time;
        string temperature;
    }

    struct RecentTemperatureDetail {
        string date;
        string time;
        string temperature;
    }

    struct MonthlyOccurrence {
        string month;
        uint256 occurrences;
    }

    mapping(string => uint256) public monthlyReport;

    TemperatureDetail[] public tempDetails;
    RecentTemperatureDetail[] public recentTempDetails;

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

    function getRecentTemperatureDetailsCount() external view returns (uint256) {
        return recentTempDetails.length;
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

        delete recentTempDetails;

        for (uint256 i = 0; i < dates.length; i++) {
            recentTempDetails.push(
                RecentTemperatureDetail(dates[i], times[i], temperatures[i])
            );
        }

        for (uint256 i = 0; i < dates.length; i++) {
            tempDetails.push(
                TemperatureDetail(userAddress, dates[i], times[i], temperatures[i])
            );
        }

        monthlyReport[month] += dates.length;
    }

    function getAllMonthlyOccurrences() external view returns (MonthlyOccurrence[] memory) {
        MonthlyOccurrence[] memory occurrences = new MonthlyOccurrence[](12);
        occurrences[0] = MonthlyOccurrence("January", monthlyReport["January"]);
        occurrences[1] = MonthlyOccurrence("February", monthlyReport["February"]);
        occurrences[2] = MonthlyOccurrence("March", monthlyReport["March"]);
        occurrences[3] = MonthlyOccurrence("April", monthlyReport["April"]);
        occurrences[4] = MonthlyOccurrence("May", monthlyReport["May"]);
        occurrences[5] = MonthlyOccurrence("June", monthlyReport["June"]);
        occurrences[6] = MonthlyOccurrence("July", monthlyReport["July"]);
        occurrences[7] = MonthlyOccurrence("August", monthlyReport["August"]);
        occurrences[8] = MonthlyOccurrence("September", monthlyReport["September"]);
        occurrences[9] = MonthlyOccurrence("October", monthlyReport["October"]);
        occurrences[10] = MonthlyOccurrence("November", monthlyReport["November"]);
        occurrences[11] = MonthlyOccurrence("December", monthlyReport["December"]);
        return occurrences;
    }

    function getTemperatureDetails() external view returns (TemperatureDetail[] memory) {
        return tempDetails;
    }

    function getRecentTemperatureDetails() external view returns (RecentTemperatureDetail[] memory) {
        return recentTempDetails;
    }
}