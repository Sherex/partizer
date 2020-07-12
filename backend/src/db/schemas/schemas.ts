import { createSchema, typedModel, Type } from 'ts-mongoose'

const PartSchema = createSchema({
  name: Type.string({ required: true }),
  model: Type.string(),
  description: Type.string(),
  attachments: Type.array().of({
    fileId: Type.string({ required: true }),
    name: Type.string({ required: true }),
    type: Type.string({ required: true })
  })
})

const CompartmentSchema = createSchema({
  name: Type.string({ required: true }),
  description: Type.string(),
  parts: Type.array().of({
    partId: Type.string({ required: true }),
    amount: Type.number()
  })
})

const ShelfSchema = createSchema({
  name: Type.string({ required: true }),
  description: Type.string(),
  compartments: Type.array().of(CompartmentSchema)
})

const StorageLocationSchema = createSchema({
  name: Type.string({ required: true }),
  address: Type.string(),
  shelves: Type.array().of(ShelfSchema)
})

function getModels (connection?) {
  return {
    Part: typedModel('Part', PartSchema, undefined, undefined, {}, connection)
  }
}
