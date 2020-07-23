import * as db from './db/db'

(async () => {
  await db.setup()
  await db.getCollections()
})().catch(error => {
  console.error(error)
})
