import { useQuery } from 'react-query'

import { fetchMetricValues } from '../api'

export const queryKey = 'metricValues'

export const useMetricValues = (id, options = {}) =>
  useQuery(
    [queryKey, id],
    () => fetchMetricValues(id).then(res => res.json()),
    options
  )
