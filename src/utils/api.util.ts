import axios from 'axios'
import { TProduct } from 'src/types/TProduct'

const API_URL = 'http://10.0.1.69:3000/api/v1'

export const api = Object.freeze({
  queryProducts: (body: TQueryProductsBody) => axios.post<TQueryProductsResponse>(`${API_URL}/product`, body),
})

type TQueryProductsBody = { skip?: number; limit?: number; q?: string }
type TQueryProductsResponse = { data: TProduct[] }
