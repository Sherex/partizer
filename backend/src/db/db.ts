import mongoose from 'mongoose'
import { config } from '../lib/load-config'
import { getModels, Part } from './schemas/schemas'

const db = mongoose.createConnection(config.dbConnString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: config.dbName
})

export const models = getModels(db)

export async function setup (): Promise<void> {
  await db.createCollection('parts')
}

interface CollectionObject {
  [index: string]: mongoose.Collection
}

export async function getCollections (): Promise<CollectionObject> {
  return db.collections
}

interface PartInput {
  name: string
  description?: string
  attributes?: [
    { [key: string]: string }
  ]
}

export async function addPart (part: PartInput): Promise<Part> {
  const newPart = await models.Part.create({
    _schema_version: '0.1.0',
    name: part.name,
    description: part.description,
    attributes: part.attributes
  })
  return newPart.toObject({ minimize: false }) as Part
}

export async function getParts (query?: mongoose.MongooseFilterQuery<Part>): Promise<Part[]> {
  const parts = await models.Part.find()
  return parts as Part[]
}
