import LocalForage from 'localforage'

// Configure localforage
LocalForage.config({
  driver      : LocalForage.IndexedDB,
  name        : 'numerologia',
  version     : 1.0,
  storeName   : 'numerologia-store'
})
