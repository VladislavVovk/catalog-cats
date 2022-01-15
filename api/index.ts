import axios from 'axios';

type Props = {
  page: string
}


export const getListBreedsP = ({ page }: Props) => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?p=${page}`

  const data = axios.get(apiUrl).then((resp) => {
    return resp.data
  })
  return data
};
