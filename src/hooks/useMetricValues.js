import { useQuery } from 'react-query'

import { fetchMetricValues } from '../api'
import { filterToDateRange } from '../utils'

export const queryKey = 'metricValues'

export const useMetricValues = (id, filter = null, options = {}) => {
  let query = {}

  if (filter) {
      query = {
        ...filterToDateRange[filter]()
      }
  }

  return useQuery(
    [queryKey, id, filter],
    () => fetchMetricValues(id, { query }).then(res => res.json()),
    options
  )
}
