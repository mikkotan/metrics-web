import axios from 'axios'

import { baseUrl, headers } from './utils'

const apiV1 = `${baseUrl}/api/v1`

export const fetchMetrics = () =>
  axios.get(`${apiV1}/metrics`, { headers })

export const fetchMetric = id =>
  axios.get(`${apiV1}/metrics/${id}`, { headers })

export const fetchMetricValues = (id, query) =>
  axios.get(`${apiV1}/metrics/${id}/values`, {
    params: query,
    headers
  })

export const createMetric = data =>
  axios.post(`${apiV1}/metrics`, data, {
    headers
  })

export const deleteMetric = id =>
  axios.delete(`${apiV1}/metrics/${id}`, { headers })

export const createMetricValue = ({ metricId, ...data }) =>
  axios.post(`${apiV1}/metrics/${metricId}/values`, data, {
    headers
  })

export const deleteMetricValue = ({ metricId, id }) =>
  axios.delete(`${apiV1}/metrics/${metricId}/values/${id}`, {
    headers
  })
