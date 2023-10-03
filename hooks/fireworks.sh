#!/bin/bash

rows=$(tput lines)
cols=$(tput cols)
colors=(red green blue purple cyan yellow brown)
lock_file=
lock_file_base=/tmp/$(basename $0 .sh)

multiple=0
nsingle=5
nmultiple=5

function colorstr()
{
    local  row=$1
    local  col=$2
    local  color=$3
    local  v
    case "$color" in
    red)     v=31;;
    green)   v=34;;
    blue)    v=32;;
    purple)  v=35;;
    cyan)    v=36;;
    yellow)  v=33;;
    brown)   v=33;;
    white)   v=37;;
    *)       v=;;
    esac
    shift 3

    if [[ $multiple -ne 0 ]]; then
        touch $lock_file
        while [[ $(ls $lock_file_base.* 2>/dev/null | head -n 1) != $lock_file ]]
        do
            sleep 0.05
        done
    fi
        
    tput cup $row $col
    echo -n -e "\e["$v"m"
    set -f
    echo -n $*
    set +f
    if [[ $multiple -ne 0 ]]; then
        rm -f $lock_file
    fi
}

function center_colorstr()
{
    local  row=$1
    local  color=$2
    shift 2
    local  s="$*"
    local  slen=${#s}
    colorstr $row $(((cols / 2) - (slen / 2))) $color "$s"
}

function fireworks()
{
    local row=$((rows - 1))
    local col=$(((RANDOM % (cols / 2)) + (cols / 4)))
    local height=$((RANDOM % rows - 2))
    local slant
    local h
    local color1=${colors[$((RANDOM % ${#colors[*]}))]}
    local color2=${colors[$((RANDOM % ${#colors[*]}))]}
    local color3=${colors[$((RANDOM % ${#colors[*]}))]}
    while [[ $color1 == $color2  ||  $color1 == $color3  ||  $color2 == $color3 ]]
    do
        color2=${colors[$((RANDOM % ${#colors[*]}))]}
        color3=${colors[$((RANDOM % ${#colors[*]}))]}
    done

    case $((RANDOM % 4)) in
    0) slant=-2;;
    1) slant=-1;;
    2) slant=1;;
    3) slant=2;;
    esac

    if [[ $height -gt 5 ]]; then
        h=$height

        while [[ $h -gt 0 ]]
        do
            colorstr $row $col $color1 '.'
            let row--
            if [[ $((col + slant)) -ge $((cols - 3))  ||  $((col + slant)) -le 2 ]]; then break; fi
            let col+=slant
            let h--
            sleep 0.1
        done

        if [[ $((col + slant)) -lt $((cols - 3))  &&  $((col + slant)) -gt 2 ]]; then

            h=$((height / 5))

            while [[ $h -gt 0 ]]
            do
                colorstr $row $col $color2 '.'
                let row++
                if [[ $((col + slant)) -ge $((cols - 3))  ||  $((col + slant)) -le 2 ]]; then break; fi
                let col+=slant
                let h--
                sleep 0.1
            done
        fi

        colorstr $((row)) $((col - 1)) $color3 '***'
        colorstr $((row - 1)) $((col)) $color3 '*'
        colorstr $((row + 1)) $((col)) $color3 '*'
    fi
}

for i in $(seq 1 $nsingle)
do
    clear
    fireworks
    sleep 1
done

clear

pids=
for i in $(seq 1 $nmultiple)
do
    let multiple++
    lock_file=$lock_file_base.$i
    fireworks &
    pids="$pids $!"
done

trap "kill -9 $pids 2>/dev/null" EXIT

wait $pids
sleep 1

clear
center_colorstr $((rows / 2 - 1)) blue "azd - the one CLI to rule them all"
echo

sleep 3
clear