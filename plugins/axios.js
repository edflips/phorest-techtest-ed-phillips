import axios from 'axios'

export const axiosGet = axios.create({
  method: 'get',
  baseURL: process.env.API_BASE,
  auth: {
    username: process.env.BASIC_AUTH_USER,
    password: process.env.BASIC_AUTH_PASS
  }
})