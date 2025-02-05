# React Native AsyncStorage: Handling Complex Objects

This repository demonstrates a common yet easily missed error when using AsyncStorage in React Native. AsyncStorage only accepts strings, leading to issues when attempting to directly store objects or arrays. This example shows the problem and its solution.

## Problem
Directly storing objects with AsyncStorage results in data corruption or unexpected behavior, as AsyncStorage only supports strings.

## Solution
Utilize `JSON.stringify` before storage and `JSON.parse` after retrieval to convert complex data structures into strings and back again.