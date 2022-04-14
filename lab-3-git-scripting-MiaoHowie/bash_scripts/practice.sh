#!/bin/bash
#Author: Howie Miao
#Date: 2/4/2022
#Script:
echo "Enter a number:"
read numOne
echo "Enter a second number:"
read numTwo
sum=$(($numOne + $numTwo))
echo "The sum of both numbers is: $sum"
let prod=numOne*numTwo
echo "The product of both numbers is: $prod"
echo "File Name: $0"
echo "Command Line Argument1: $1"
grep $1 $2
