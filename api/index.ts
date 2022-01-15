import axios from 'axios';

type Props = {
  page?: string
  breed?: string
}


export const getListBreedsP = ({ page }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?p=${page}`

  const data = axios.get(apiUrl).then((resp) => {
    return resp.data
  })
  return data
};

export const getListBreedsSearch = ({ breed }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?q=${breed}`

  const data = axios.get(apiUrl).then((resp) => {
    return resp.data
  })
  return data
};

export const getListBreed = ({ breed }: Props) => {
  console.log(breed)
  const apiUrl = `https://cats-api.strsqr.cloud/cats/${encodeURI(breed)}`
  console.log(apiUrl)
  const data = axios.get(apiUrl).then((resp) => {
    console.log(resp.data)
    return resp.data
    
  })
  return data
};
