import { IData } from "./types"

export const fetchCatImageData = () => {
  const url = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

  return fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'DEMO-API-KEY' }),
    redirect: 'follow'
  })
}

export const parseCatImageData = (json: string) : IData => JSON.parse(json)[0]
