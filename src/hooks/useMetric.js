import { useQuery } from 'react-query'

import { fetchMetric } from '../api'

export const queryKey = 'metric'

export const useMetric = (id, options = {}) =>
  useQuery(
    queryKey,
    () => fetchMetric(id),
    options
  )
