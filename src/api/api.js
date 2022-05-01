import axios from 'axios'

export const api = axios.create ( {
  baseURL: 'http://localhost:5000'
})

export const busca = async(url, setDado) => {
  const resposta = await api.get(url)
  setDado(resposta.data)
}

//assync para conectar coma api de forma assincrona
// await é necessário quando usar assync para dizer que quero esperar a resposta da api
