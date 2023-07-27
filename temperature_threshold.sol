// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract TemperatureThresholdContract {
    uint8[] public temperatureData;
    uint8 public thresholdTemperature;

    function addData(uint8[] calldata temperatures, uint8 newThresholdTemperature) external {
        delete temperatureData;
        for (uint8 i = 0; i < temperatures.length; i++) {
            temperatureData.push(temperatures[i]);
        }
        thresholdTemperature = newThresholdTemperature;
    }

    function getTemperaturesAboveThreshold() external view returns (uint8[] memory) {
        uint8 count = 0;
        // Count the number of elements that meet the condition (temperature > thresholdTemperature)
        for (uint8 i = 0; i < temperatureData.length; i++) {
            if (temperatureData[i] > thresholdTemperature) {
                count++;
            }
        }

        uint8[] memory aboveThresholdIndices = new uint8[](count);

        uint8 index = 0;
        for (uint8 i = 0; i < temperatureData.length; i++) {
            if (temperatureData[i] > thresholdTemperature) {
                aboveThresholdIndices[index] = i;
                index++;
            }
        }
        return aboveThresholdIndices;
    }
}
