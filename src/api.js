import qs from 'qs'

import { baseUrl, headers } from './utils'

const apiV1 = `${baseUrl}/api/v1`

export const fetchMetrics = () =>
  fetch(`${apiV1}/metrics`, { headers })

export const fetchMetric = id =>
  fetch(`${apiV1}/metrics/${id}`, { headers })

export const fetchMetricValues = (id, query) => {
  const queryParams = qs.stringify(query)
  const url = `${apiV1}/metrics/${id}/values?${queryParams}`
  return fetch(url, { headers })
}

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

export const createMetricValue = ({ metricId, ...data }) =>
  fetch(`${apiV1}/metrics/${metricId}/values`, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  })

export const deleteMetricValue = ({ metricId, id }) =>
  fetch(`${apiV1}/metrics/${metricId}/values/${id}`, {
    method: 'delete',
    headers
  })
