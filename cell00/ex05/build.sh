if [ $# -eq 0 ]; then
   echo "No arguments supplied"
else
   i=1
   while [ $i -le $# ]; do
	mkdir ex"${!i}" 
	i=$((i + 1))
   done
fi

