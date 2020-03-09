run dirWatcher: node indexWatch or npm run watcher
run importer: node indexImport or npm run importer

class Importer has 2 methods:
import(path) - ascync
importSync(path) - sync
where path - path to toImport.json file (./dataImport/toImport.json)
with pathes to changed .csv files
