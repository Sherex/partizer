import * as db from './db/db'
import * as query from './db/queries'

(async () => {
  // await db.setup()

  await query.insertShelves([
    {
      location_id: 1,
      name: 'A'
    }
  ])

  await query.insertContainers([
    {
      shelf_id: 1,
      name: 'A'
    }
  ])
})().catch(error => {
  console.error(error)
})
