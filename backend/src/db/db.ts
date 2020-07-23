import mongoose from 'mongoose'
import { config } from '../lib/load-config'

const db = mongoose.createConnection(config.dbConnString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: config.dbName
})

async function setup (): Promise<void> {
  await db.createCollection('parts')
  console.log(db.collections)
}

async function getCollections (): Promise<void> {
  console.log(await db.collection('parts'))
}

export {
  setup,
  getCollections
}
