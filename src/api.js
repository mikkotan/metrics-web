import { baseUrl, headers } from './utils'

const apiV1 = `${baseUrl}/api/v1`

export const fetchMetrics = () =>
  fetch(`${apiV1}/metrics`, { headers })

export const fetchMetricValues = id =>
  fetch(`${apiV1}/metrics/${id}/values`, { headers })

export const createMetric = data =>
  fetch(`${apiV1}/metrics`, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  })

export const deleteMetric = id =>
  fetch(`${apiV1}/metrics/${id}`, {
    method: 'delete',
    headers
  })
