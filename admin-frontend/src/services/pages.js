import api from './api'

export async function getAllPages() {
  const response = await api.get('/pages')
  return response.data
}

export async function getPage(slug) {
  const response = await api.get(`/pages/${slug}`)
  return response.data
}

export async function createPage(payload) {
  const response = await api.post('/pages/create', payload)
  return response.data
}

export async function updatePage(payload) {
  const response = await api.post('/pages/update', payload)
  return response.data
}

export async function deletePage(slug) {
  const response = await api.delete(`/pages/${slug}`)
  return response.data
}
