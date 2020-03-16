!csv files are tested with libreoffice

run todoApp: node index or npm start + commands (add, remove, read, list)

add: node index add -t "title" -b "body"

remove: node index remove -t "title"

read: node index read -t "title"

list: node index list

sort: node index sort -t "length" -i "title or body" -o "ascending or descending"

update: node index update -t "some title" --nt "new title" --nb "new body"
