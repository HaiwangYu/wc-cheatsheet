#/bin/env bash

while sleep 1; do top -b -n 1 | awk -v pattern="$1" '$0 ~ pattern {print $9,$10}'; done;
