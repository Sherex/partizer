import * as db from './db/db'

(async () => {
  await db.setup()
  const collections = await db.getCollections()

  console.log(Object.keys(collections))

  const part = await db.addPart({
    name: 'NE555',
    description: 'A 555 timer'
  })
  console.log(part)

  console.log(await db.getParts())
})().catch(error => {
  console.error(error)
})
