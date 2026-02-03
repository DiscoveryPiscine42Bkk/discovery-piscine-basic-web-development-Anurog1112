if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    i=1
    while [ $i -le $# ] && [ $i -le 3 ]; do
        echo "${!i}"
        i=$((i + 1))
    done
fi
