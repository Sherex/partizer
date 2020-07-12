import * as db from './db/db'

db.setup().then(() => {
  console.log('Done!')
})

db.getCollections().then(() => {
  console.log('Done!')
})