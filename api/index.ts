import axios from 'axios';


export const getListBreedsP = () => {
  const apiUrl = `https://cats-api.strsqr.cloud/cats?p=1`
  
  const data = axios.get(apiUrl).then((resp) => {
    return resp.data
  })
  return data
};
