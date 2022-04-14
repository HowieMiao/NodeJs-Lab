#!/bin/bash
# Author: Howie Miao
exists=false
if test  -f "$1"; then
	echo "$1 exists"
    exists=true
fi

if [ "$exists" = true ]
then
    echo "Enter option 1-6"
    echo "1) Find Words"
    echo "2) Add Text"
    echo "3) Delete Word"
    echo "4) Replace First Occurence"
    echo "5) Copy File"
    echo "6) Quit"
    while :
    do
        read input
        case $input in
           "1")
              echo "1) Find Words"
              cat $1 | grep -n "Linux"
              cat $1 | grep -n "functions"
              cat $1 | grep -n "Bash"
              cat $1 | grep -n "run"
              echo "Enter option 1-6"
              ;;
           "2")
              echo "2) Add Text"
              echo "Enter text to be added"
              read input1
              echo $input1 >> $1
              echo "$input1 added to $1"
              echo "Enter option 1-6"
              ;;
           "3")
              echo "3) Delete Word"
              echo "Enter text to be deleted"
              read input2
              sed -i "s/$input2//g" $1
              #THIS FUNCTION WILL ONLY WORK WHEN RUN THROUGH DEVEL DOCKER
              #MET WITH BRIAN NOBLE ON THIS, FOR SOME REASON ON MAC TERMINAL SED TAKES AN EXTRA INPUT
              # E.X. (sed -i [??input] [change request] [filename])
              #WHILE DOCKER DOES NOT HAVE THIS EXTRA INPUT, FORCING THIS FUNCTION TO WORK ON ONLY ONE OR THE OTHER
              #FOR IT TO WORK ON MAC TERMINAL REPLACE 37 WITH
              #sed -i '' "s/${input2}//g" ${1}
              echo "$input2 removed from $1"
              echo "Enter option 1-6"
              ;;
           "4")
              echo "4) Replace First Occurence"
              echo "Enter text to be replaced"
              read input3
              echo "Enter text that will replace"
              read input4
              sed -i "0,/$input3/s//$input4/" $1
              #Same situation as above
              #sed -i '' "0,/$input3/s//$input4/" ${1}
              echo "$input3 replaced with $input4 in $1"
              echo "Enter option 1-6"
              ;;
           "5")
              echo "5) Copy File"
              mkdir -p solution
              cp $1 "./solution/lab3_sample.txt"
              echo "$1 copied"
              echo "Enter option 1-6"
              ;;
           "6")
              echo "6) Quit"
              echo "Exiting"
              exit
              ;;   
           *)
             echo "bad input"
             echo "Enter option 1-6"
             ;;
        esac
    done
else
    echo "$1 does not exist"
fi

    
    
