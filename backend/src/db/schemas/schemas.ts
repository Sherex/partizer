import { prop, Ref, getModelForClass, ReturnModelType } from '@typegoose/typegoose'
import { Connection } from 'mongoose'

class Part {
  @prop({ required: true })
  public _schema_version!: string

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

class Compartment {
  @prop({ required: true })
  public _schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public description?: string

  @prop({ ref: PartRef })
  public parts?: Ref<PartRef[]>
}

class Shelf {
  @prop({ required: true })
  public _schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public description?: string

  @prop({ ref: Compartment })
  public compartments?: Ref<Compartment[]>
}

class StorageLocation {
  @prop({ required: true })
  public _schema_version!: string

  @prop({ required: true })
  public name!: string

  @prop()
  public address?: string

  @prop()
  public description?: string

  @prop({ ref: Shelf })
  public shelves?: Ref<Shelf[]>
}

export {
  Part,
  StorageLocation,
  Shelf,
  Compartment
}

export interface Models {
  Part: ReturnModelType<typeof Part, {}>
  StorageLocation: ReturnModelType<typeof StorageLocation, {}>
}

export function getModels (connection: Connection): Models {
  return {
    Part: getModelForClass(Part, { existingConnection: connection }),
    StorageLocation: getModelForClass(StorageLocation, { existingConnection: connection })
  }
}
