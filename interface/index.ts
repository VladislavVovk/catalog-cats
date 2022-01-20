import { BreedsDataType } from './types'

interface IBreedsData {
  data: BreedsDataType[]
}

interface IgetListBreedsP {
  config: Object
  data: BreedsDataType[]
  headers: Object
  request?: XMLHttpRequest
  status: number
  statusText: string
}

export type { IBreedsData, IgetListBreedsP }