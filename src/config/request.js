import axios from 'axios'
import { API_URL } from './constants'

const getRequest = url => {
  return axios.get(url, {
    headers: {'Authorization': `Token token="0fc8db57aadb0bd4880fe990bd74e1f0"`}
  }).catch(
    err => console.log(err)
  )
}

export default {
  getAll: _ => getRequest(API_URL),
  getQuery: query => getRequest(API_URL + `?filter=${query}&type=tag`)
}
