import api from './api'

export async function getPage(slug) {
  const response = await api.get(`/pages/${slug}`)
  return response.data
}
