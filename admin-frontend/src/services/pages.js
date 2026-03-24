import api from './api'

export async function getPage(slug) {
  const response = await api.get(`/pages/${slug}`)
  return response.data
}

export async function updatePage(payload) {
  const response = await api.post('/pages/update', payload)
  return response.data
}
