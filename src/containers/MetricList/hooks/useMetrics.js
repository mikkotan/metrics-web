import { useQuery } from 'react-query'

import { fetchMetrics } from '../api'

export const queryKey = 'metrics'

export const useMetrics = (options = {}) =>
  useQuery(
    queryKey,
    () => fetchMetrics().then(res => res.json()),
    options
  )
