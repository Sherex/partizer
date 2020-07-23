import { prop, Ref, getModelForClass, ReturnModelType } from '@typegoose/typegoose'
import { Connection } from 'mongoose'

class PartSchema {
  @prop({ required: true })
  public schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public model?: string

  @prop()
  public description?: string

  @prop()
  public attributes?: [
    { [key: string]: string }
  ]
}

class PartRef {
  @prop({ required: true })
  public partId!: string

  @prop()
  public amount?: string
}

class CompartmentSchema {
  @prop({ required: true })
  public schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public description?: string

  @prop({ ref: PartRef })
  public parts?: Ref<PartRef[]>
}

class ShelfSchema {
  @prop({ required: true })
  public schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public description?: string

  @prop({ ref: CompartmentSchema })
  public compartments?: Ref<CompartmentSchema[]>
}

class StorageLocationSchema {
  @prop({ required: true })
  public schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public address?: string

  @prop()
  public description?: string

  @prop({ ref: ShelfSchema })
  public shelves?: Ref<ShelfSchema[]>
}

interface Models {
  Part: ReturnModelType<typeof PartSchema, {}>
  StorageLocation: ReturnModelType<typeof StorageLocationSchema, {}>
}

export function getModels (connection: Connection): Models {
  return {
    Part: getModelForClass(PartSchema, { existingConnection: connection }),
    StorageLocation: getModelForClass(StorageLocationSchema, { existingConnection: connection })
  }
}
