export interface PartsType {
  _id: string
  name: string
  description: string
  attributes: {
    [key: string]: string
  }
}