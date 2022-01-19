import axios from 'axios';

type Props = {
  page?: string
  breed?: string
}

// Request for breeds with pagination
export const getListBreedsP = ({ page }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?p=${page}`

  const data = axios.get(apiUrl).then((resp) => {
    return resp
  })
  return data
}

// Request for obtaining breeds by description
export const getListBreedsSearch = ({ breed }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?q=${breed}`

  const data = axios.get(apiUrl).then((resp) => {
    return resp
  })
  return data
}

// Request for a specific breed
export const getListBreed = ({ breed }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats/${encodeURI(breed)}`
  const data = axios.get(apiUrl).then((resp) => {
    return resp.data

  })
  return data
}


// // Request for breeds with pagination
// export const getListBreedsPandQ = ({ page, breed }: Props) => {
//   const apiUrl = `https://cats-api.strsqr.cloud/cats?p=${page}`

//   const data = axios.get(apiUrl).then((resp) => {
//     return resp
//   })
//   return data
// }