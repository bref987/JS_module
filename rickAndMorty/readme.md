
search by rickandmortyapi character properties:
id, name, status, species, type, gender etc.

recommandation: update data base before starting search
$ node index search initdb

ex: search by gender
$ node index search --type "gender" --searcher "female" 
or
$ node index search -t "gender" -s "female"

multiple search is possible
ex: search by species, status, gender
$ node index search -t "species" -s "humanoid" -t "status" -s "alive" -t "gender" -s "male"
