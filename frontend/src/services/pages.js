import api from './api.js'

const handleResponse = (response) => {
  return response?.data?.data || response?.data || response
}

export async function getPage(slug) {
  const response = await api.get(`/pages/${slug}`)
  return handleResponse(response)
}

export async function getAllPages() {
  const response = await api.get('/pages')
  return handleResponse(response)
}

export async function createPage(data) {
  const response = await api.post('/pages/create', data)
  return handleResponse(response)
}

export async function updatePage(data) {
  const response = await api.post('/pages/update', data)
  return handleResponse(response)
}

export async function deletePage(slug) {
  const response = await api.delete(`/pages/${slug}`)
  return handleResponse(response)
}
