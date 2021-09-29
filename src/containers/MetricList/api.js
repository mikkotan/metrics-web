import { baseUrl, headers } from '../../utils'

export const fetchMetrics = () =>
  fetch(`${baseUrl}/api/v1/metrics`, { headers })
