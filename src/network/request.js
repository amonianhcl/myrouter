import axios from 'axios'
const reqInstance1 = axios.create({
  baseURL: 'https://httpbin.org',
  timeout: 1000
});

export function request(config) {
  return reqInstance1(config);
}