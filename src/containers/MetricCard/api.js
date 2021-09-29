import { baseUrl, headers } from '../../utils'

export const fetchMetricValues = id =>
  fetch(`${baseUrl}/api/v1/metrics/${id}/values`, { headers })
